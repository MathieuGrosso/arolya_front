
import React from "react";
import { useEffect, useState } from "react"
import httpClient from "../httpClient"



import CheckBox from "../components/CheckBox"

import { BottomBar } from "../components/BottomBar";

import TopBar from "../components/order/TopBar";

import TextField from "@mui/material/TextField";
import ReturnButton from "../components/summary/ReturnButton";

export default function OrderPage(props)
{
  const [FreshList, setFreshList] = React.useState([])
  const [isCheckedOrder, setIsCheckedOrder] = React.useState(false)
  const [FilteredFreshList, setFilteredFreshList] = React.useState([])
  const [inputText, setInputText] = useState("");
  const [display, setDisplay] = useState("0");
  const [selectedId, setSelectedId] = useState(0);
  const [fetchRefs, setFetchRefs] = useState(true)


  const replace_order = async (id, display) =>
  {
    try
    {
      const resp = await httpClient.post("http://0.0.0.0:5000/graphql", {
        query: `
        mutation {
           updateReferenceOrdered(referenceId: ${id} newOrdered: ${display}) {
            success
            errors
            reference {
                id
                name
                qty_sold
                unit
                p_sold
                p_bought
                date
                hour
                valorisation
                promotion
                inventory
                ordered
            }
        }
        }
      `,
      })
      setFetchRefs(true)
        ;
    }
    catch (e)
    {
      console.log("Database is empty")
    }
  }







  function updateDisplay(token)
  {
    if (display === "0")
    {
      setDisplay(token);
    } else
    {
      setDisplay(display + token);
    }
  }





  let inputHandler = (e) =>
  {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };




  useEffect(() =>
  {
    async function FilterFreshList()
    {
      //create a new array by filtering the original array
      setFilteredFreshList(FreshList.filter((el) =>
      {
        //convert name to lower case
        var name = el.name.toLowerCase();
        //check if name contains the input text
        return name.includes(inputText);
      }));
    }
    FilterFreshList()
  }, [inputText, FreshList])









  useEffect(() =>
  {

    async function fetchFreshProducts()
    {
      try
      {
        console.log(localStorage.getItem("userId"))
        const resp = await httpClient.post("http://0.0.0.0:5000/graphql", {
          query: `
          query {
            referenceByUserId(userId: ${localStorage.getItem("userId")})
            {
              success
              errors
              references {
                id
                name
                qty_sold
                unit
                p_sold
                p_bought
                date
                hour
         
                valorisation
                promotion
                inventory
                ordered
            }
          }
        }
        `,
        });



        setFreshList(resp.data.data.referenceByUserId.references)

      } catch (e)
      {
        console.log("Database is empty")
      }
    }
    fetchFreshProducts()
    setFetchRefs(false)
  }, [fetchRefs, setFetchRefs])



  return (
    <div
      className={`inline-flex flex-col items-start w-[1194px] h-[922px] gap-[3px] font-['Lexend']`}
      style={props.style}
    >
      <div
        className="w-full flex-1 relative bg-white gap-8 rounded-tl-[40px] rounded-bl-[40px] h-[819px]"
      >
        <div className="text-left text-black">
          <div className="inset-x-0 absolute top-8 gap-6 w-[1194px]">
            <TopBar></TopBar>

            <div className="px-4 sm:px-6 lg:px-8">
              <br />
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">

                    <h1 className="text-xl font-semibold text-green-900">Tous les produits</h1>

                  </div>


                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

                    <div class="p-4">
                      <label for="table-search" class="sr-only">Rechercher</label>
                      <div class="relative mt-1">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <TextField
                          id="outlined-basic"
                          onChange={inputHandler}
                          variant="outlined"
                          fullWidth
                          label="Rechercher"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
                        />
                      </div>
                    </div>
                  </div>


                  <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                      Filtrer
                    </button>
                  </div>
                </div>
              </div>



              <br />
              <div className='flex flex-row space-x-20 space-y-10' >
                <div className='flex flex-col w-3/5 h-screen '>

                  <div class="flex-grow overflow-auto">

                    <table class="table-auto">
                      <thead>
                        <tr>
                          <th className="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-3 py-1 text-base font-medium text-gray-500">
                            Libelle
                          </th>

                          <th className="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-1 py-1 text-base font-medium text-gray-500">
                            Inventaire

                          </th>


                          <th scope="col" className="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                            <CheckBox name="Commande" func={setIsCheckedOrder} isCheckedInventory={isCheckedOrder} />
                          </th>



                        </tr>
                      </thead>
                      <tbody className="divide-y bg-white">
                        {FilteredFreshList.map((p) => (
                          <tr key={p.id}>

                            <td className="whitespace-nowrap px-1 py-4 text-sm text-gray-500">
                              <div className="flex items-center">

                                <div className="ml-4">
                                  <div className="font-medium text-gray-900">{p.id} {p.name}</div>

                                  <span className="inline-flex rounded-full bg-green-100 px-1 text-xs font-semibold leading-5 text-green-800">
                                    PA: {p.p_bought} / {p.unit}
                                  </span>
                                  <span className="inline-flex rounded-full bg-green-100 px-1 text-xs font-semibold leading-5 text-green-800">
                                    PVC: {p.p_sold} / {p.unit}
                                  </span>

                                  <span className="inline-flex rounded-full bg-green-100 px-1 text-xs font-semibold leading-5 text-green-800">
                                    PCB: {p.qty_sold}
                                  </span>
                                  <br />
                                  <span className="inline-flex rounded-full bg-red-100 px-1 text-xs font-semibold leading-5 text-red-800">
                                    promotion: {p.promotion}
                                  </span>
                                  {/* <div className="text-gray-500"></div> */}
                                </div>
                              </div>
                            </td>



                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{p.inventory}</td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {/* 
                          <Replacer id={p.id} value={p.inventory} name="inventory" func={setFreshList} FreshList={FreshList} display={display}  />
                         */}
                                <div>
                                  <span className="inline-flex items-center  border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <input type="text" value={p.ordered} onClick={() => setSelectedId(p.id)} />
                                  </span>
                                </div>
                              </td>
                            </td>

                          </tr>
                        ))}

                      </tbody>
                    </table>


                  </div>

                </div>
                <div className="flex flex-col w-1/3">
                  <div className={`flex flex-col text-center font-normal font-['Lexend']`}>

                    <div
                      className=" [box-shadow-width:1px]  absolute items-start rounded-lg w-[297px]  drop-shadow-lg overflow-clip"
                    >
                      <div>
                        <div className="flex flex-col items-center rounded ">

                          <div className=" [box-shadow:0px_0px_0px_1px_rgba(208,_213,_221,_1)_inset] border-3 border-gray-500 shadow-lg  p-2 my-1">{display}</div>

                          <div className="flex justify-between my-1">
                            <button
                              onClick={() => updateDisplay("7")}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              7
                            </button>
                            <button
                              onClick={() => updateDisplay("8")}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              8
                            </button>
                            <button
                              onClick={() => updateDisplay("9")}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              9
                            </button>

                          </div>
                          <div className="flex justify-between my-1">
                            <button
                              onClick={() => updateDisplay("4")}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              4
                            </button>
                            <button
                              onClick={() => updateDisplay("5")}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              5
                            </button>
                            <button
                              onClick={() => updateDisplay("6")}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              6
                            </button>

                          </div>

                          <div className="flex justify-between my-1">
                            <button
                              onClick={() => updateDisplay("1")}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              1
                            </button>
                            <button
                              onClick={() => updateDisplay("2")}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              2
                            </button>
                            <button
                              onClick={() => updateDisplay("3")}
                              className="p-2 w-20  border-3 border-gray-500 shadow-lg"
                            >
                              3
                            </button>

                          </div>
                          <div className="flex justify-between my-1">
                            <button
                              onClick={() => updateDisplay("0")}
                              className="p-2  w-20  border-3 border-gray-500 shadow-lg"
                            >
                              0
                            </button>


                          </div>


                          <div className="flex justify-between my-1">

                            <button
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 [box-shadow:0px_0px_0px_1px_rgba(78,_148,_79,_1)_inset] [box-shadow-width:1px] py-2.5 flex-1 inline-flex justify-center items-center flex-grow rounded-lg dark:text-white pl-[18px] pr-[18px] drop-shadow-lg bg-[rgba(78,148,79,1)] overflow-clip "
                              onClick={() => replace_order(selectedId, display)}
                            > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </button>


                            <button
                              onClick={() => setDisplay("0")}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5  [box-shadow-width:1px] py-2.5 flex-1 inline-flex justify-center items-center flex-grow rounded-lg dark:text-white pl-[18px] pr-[18px] drop-shadow-lg bg-amber-600 overflow-clip "
                            >
                              C
                            </button>
                          </div>
                        </div>

                      </div>


                    </div>

                  </div>
                </div>


                <BottomBar freshList={FreshList} value="Valider la commande" href="/summary" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <ReturnButton href="inventory"></ReturnButton>

    </div>
  );
}

OrderPage.defaultProps = {
  style: {},
};




