
import React from "react";
import { useEffect, useState } from "react"
import { KeyboardEvent } from 'react';
import httpClient from "../httpClient"
import Input from "../components/inventory/Input";
import { FreshList } from "../types";
import { BottomBar } from "../components/BottomBar";
import FLBar from "../components/topbar/FLBar";
import TopBar from "../components/inventory/TopBar";
import TextField from "@mui/material/TextField";

import { useFilterReferencesByUserIdQuery, } from "../utils/__generated__/graphql";
import ChangeRefValue from "../components/inventory/ChangeRefValue";




export default function InventoryPage(props: InventoryPageProps){
  const [inputText, setInputText] = useState("");
  const [display, setDisplay] = useState(0);
  const [selectedId, setSelectedId] = useState(0);

  const [submitted, setSubmitted] = useState('');

  
  const userId = localStorage.getItem('userId') as string;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(inputText);
    setInputText("");
  }


  const { data, loading, error } = useFilterReferencesByUserIdQuery({
    variables: {
       userId: userId,
       referencesInput: {name:submitted}

    },
  });

   if (loading || !data) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }




  function updateDisplay(token:number)
  {
    if (display ===0)
    {
      setDisplay(token);
    } else
    {
      setDisplay(display + token);
    }
  }








  return (
    
    

    <div
      className={` font-['Lexend']`}
      style={props.style}
    >

        <div className="relative h-32 w-32 ...">
          <div className="absolute inset-x-0 top-8 h-16 ...">
            <TopBar></TopBar>
        <br/>
          <FLBar></FLBar>
        </div>
      </div>
 
              <div className="relative h-8 w-200 ...">
                <div className="absolute inset-y-1/2 left-0 w-32...">

         
     <div
      className={`text-left font-normal font-['Lexend'] text-[rgba(102,112,133,1)]`}
    >
      <div
        className="absolute right-0 top-0 gap-1.5 w-[347px] right-[-0.37px]"
      >
        <div className="w-full gap-1.5">
          <div className="[box-shadow:0px_0px_0px_1px_rgba(208,_213,_221,_1)_inset] [box-shadow-width:1px] px-3.5 py-2.5 w-full bg-white gap-2 flex items-center self-stretch rounded-lg drop-shadow-lg]">
            <div className="flex-1 gap-2 flex items-center flex-grow">
               <div className="w-5 h-5">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 17.5 17.5 L 13.875 13.875 M 15.833 9.167 C 15.833 12.849 12.849 15.833 9.167 15.833 C 5.485 15.833 2.5 12.849 2.5 9.167 C 2.5 5.485 5.485 2.5 9.167 2.5 C 12.849 2.5 15.833 5.485 15.833 9.167 Z"
          stroke="#667085"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
      </svg>
    </div>
             <form onSubmit={handleSubmit} >
                          <input type="text" value={inputText} onChange={handleChange} 
                            />          
               </form>   
            </div>
          </div>
          </div>
   
      </div>
    </div>

          
              <br />
              <br />
        <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden  md:rounded-lg">
              <table className="table-fixed border-separate border-spacing-y-2  ">
          
                      <thead>
                        <tr>
                          <th  scope="col" className="sticky py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Libelle
                          </th>
                          <th  scope="col" className="sticky px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Inventaire
                          </th>
                          <th  scope="col" className="sticky px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Commande
                          </th>
                        </tr>
                      </thead>
                      
                      <tbody className="divide-y box-shadow bg-white drop-shadow-md  shadow-inner	 border-2 border-gray-500   ">
          
                        {data.filterReferences.references?.map((p:any) => (
                          <tr key={p.id}>
                            <td className="whitespace-nowrap px-1 py-4 text-sm text-gray-500 drop-shadow-lg   ">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="h-5 not-italic  font-bold text-sm leading-5 px-1 text-black flex-none order-none flex-grow-0 "> 
                                  {p.name}
                                  </div>
                                  <span className="inline-flex rounded-full not-italic px-1  text-xs font-normal leading-5 text-gray-800">
                                    PA: {p.p_bought} / {p.unit}
                                  </span>
                                  <span className="inline-flex rounded-full not-italic px-1  text-xs font-normal leading-5 text-gray-800">
                                    PVC: {p.p_sold} / {p.unit}
                                  </span>
                                  <span className="inline-flex rounded-full not-italic px-1  text-xs font-normal leading-5 text-gray-800">
                                    PCB: {p.qty_sold}
                                  </span>
                                  <br />
                                  <span className=" inline-flex rounded-full not-italic px-1  text-xs font-normal leading-5 text-gray-800  flex-none order-none flex-grow-0">
                                  marge: 30%
                                   </span>
                                  <div className=" inline-flex rounded-full not-italic px-1  text-xs font-normal leading-5 text-gray-800 w-40 h-4 bg-red-200 flex-none order-none flex-grow-0">
                                    <p className="w-32 h-4 not-italic  font-semibold text-xs leading-4 text-center text-orange-700 flex-none order-none flex-grow-0">
                                    promotion: {p.promotion}
                                    
                                  </p>
                                  </div>
                                  {/* <div className="text-gray-500"></div> */}
                                </div>
                              </div>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

                                <div className="flex flex-wrap -mx-3 mb-2">
                                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                  <span onClick={() => setSelectedId(p.id)} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    <input required type="text" value={p.inventory} />
                                  </span>
                                </div>
                              </div>
                                

                              </td>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <div>
                                
                                </div>
                              </td>
                            </td>

                          </tr>
                        ))}

                      </tbody>
                    </table>
                  </div>
                  
                  </div>
                  </div>
                  </div>
                </div>
                </div>
              

            <div className="relative h-32 w-120 ...">
                <div className="absolute inset-x-1/2 right-0 w-32...">
                      <div>
                        <div className="flex flex-col items-center rounded ">

                          <div className=" [box-shadow:0px_0px_0px_1px_rgba(208,_213,_221,_1)_inset] border-3 border-gray-500 shadow-lg  p-2 my-1">{display}</div>

                          <div className="flex justify-between my-1">
                            <button
                              onClick={() => updateDisplay(7)}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              7
                            </button>
                            <button
                              onClick={() => updateDisplay(8)}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              8
                            </button>
                            <button
                              onClick={() => updateDisplay(9)}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              9
                            </button>

                          </div>
                          <div className="flex justify-between my-1">
                            <button
                              onClick={() => updateDisplay(4)}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              4
                            </button>
                            <button
                              onClick={() => updateDisplay(5)}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              5
                            </button>
                            <button
                              onClick={() => updateDisplay(6)}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              6
                            </button>

                          </div>

                          <div className="flex justify-between my-1">
                            <button
                              onClick={() => updateDisplay(1)}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              1
                            </button>
                            <button
                              onClick={() => updateDisplay(2)}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              2
                            </button>
                            <button
                              onClick={() => updateDisplay(3)}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              3
                            </button>

                          </div>
                          <div className="flex justify-between my-1">
                            <button
                              onClick={() => updateDisplay(0)}
                              className="p-2  w-20  border-3 border-gray-500 shadow-lg"
                            >
                              0
                            </button>


                          </div>


                          <div className="flex justify-between my-1">

                           <ChangeRefValue id={selectedId} display={display}></ChangeRefValue>


                            <button
                              onClick={() => setDisplay(0)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5  [box-shadow-width:1px] py-2.5 flex-1 inline-flex justify-center items-center flex-grow rounded-lg dark:text-white pl-[18px] pr-[18px] drop-shadow-lg bg-amber-600 overflow-clip "
                            >
                              C
                            </button>
                   
                        

                      </div>


                    </div>

                  </div>


            </div>
          </div>

              
         <BottomBar  value="Prédire la commande" href="/order" />
      
    </div>

  

  );
}

InventoryPage.defaultProps = {
  style: {},
};




InventoryPage.defaultProps = {
  style: {},
};

interface InventoryPageProps {
  style: Object;
}


