import React from "react";
import { useEffect, useState } from "react"
import httpClient from "../httpClient"


import { CloudArrowDownIcon, ArrowDownIcon } from "@heroicons/react/20/solid";


import { BottomBar } from "../components/summary/BottomBar";
import TextField from "@mui/material/TextField";
import ReturnButton from "../components/summary/ReturnButton";
import TopBar from "../components/summary/TopBar";



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function SummaryPage(props: SummaryPageProps) {
  const [FreshList, setFreshList] = useState<[]>([]);
  const [inputText, setInputText] = useState("");
  const [FilteredFreshList, setFilteredFreshList] = React.useState([])

  useEffect(() => {

    async function fetchFreshProducts() {
      try {
        console.log(sessionStorage.getItem("userId"))
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

      } catch (e) {
        console.log("Database is empty")
      }
    }
    fetchFreshProducts()

  }, [])


  let inputHandler = (e: any) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    async function FilterFreshList() {
      //create a new array by filtering the original array
      setFilteredFreshList(FreshList.filter((el: any) => {
        //convert name to lower case
        var name = el.name.toLowerCase();
        //check if name contains the input text
        return name.includes(inputText);
      }));
    }
    FilterFreshList()
  }, [inputText, FreshList])



  return (
    <div
      className={`pt-3 inline-flex flex-col items-start w-[1194px] h-[834px] font-['Lexend']`}
      style={props.style}
    >
      <div
        className="w-full flex-1 pt-8 pb-12 bg-white gap-8 flex flex-col items-start flex-grow self-stretch rounded-tl-[40px] rounded-bl-[40px]"
      >
        <TopBar />
        <div
          className="w-full pt-2.5 pb-0 pl-2.5 relative gap-2.5 flex flex-col items-start self-stretch h-[90px] pr-[66px]"
        >
          <div>
            <div
              className="pl-8 pr-0 absolute left-6 top-2.5 gap-6 flex flex-col items-start w-[1118px] h-[876px]"
            >



              <div className="sm:flex sm:items-cente ">

                <div className="sm:flex-auto">
                  <div
                    className="[box-shadow:0px_0px_0px_1px_rgba(208,_213,_221,_1)_inset] [box-shadow-width:1px] px-4 py-2.5 bg-white gap-2 flex justify-center items-center rounded-lg w-[140px] drop-shadow-lg overflow-clip"
                  >
                    <CloudArrowDownIcon />
                    <p className="text-sm leading-5 m-0">
                      Télécharger
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">

                  <label htmlFor="table-search" className="sr-only">Rechercher</label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
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


              <table className="min-w-full border-separate" style={{ borderSpacing: 0 }}>
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      <div className="flex items-center">
                        Nom du produit  <ArrowDownIcon className="w-5 h-5 ml-1.5 text-gray-400" />
                      </div>

                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Commande
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Prix du jour
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">

                  {FilteredFreshList.map((p: any, pIdx: any) => (
                    <tr key={p.id}>
                      <td
                        className={classNames(
                          pIdx !== FilteredFreshList.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                        )}
                      >
                        {p.name}
                      </td>
                      <td
                        className={classNames(
                          pIdx !== FilteredFreshList.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
                        )}
                      >
                        {p.ordered}
                      </td>
                      <td
                        className={classNames(
                          pIdx !== FilteredFreshList.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
                        )}
                      >
                        {p.p_sold}
                      </td>
                      <td
                        className={classNames(
                          pIdx !== FilteredFreshList.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
                        )}
                      >
                        {p.p_sold * p.ordered}
                      </td>



                    </tr>
                  ))}
                </tbody>
              </table>

            </div>

          </div>
        </div>
        <BottomBar freshList={FreshList} value="Prédire la commande" href="/order" />
        <ReturnButton href='order' />
      </div>
    </div>
  );
}

SummaryPage.defaultProps = {
  style: {},
};

interface SummaryPageProps {
  style: Object;
}

