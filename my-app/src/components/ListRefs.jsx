

import { React, useState } from 'react'
import Incrementor from "../components/Incrementor"


function List({props}) {


    //create a new array by filtering the original array
    const filteredData = props.data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((p) => (
                    <tr key={p.id}>
                        
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={p.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{p.id} {p.name}</div>
                          
                               <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              PA: {p.p_bought} / {p.unit}
                              </span>
                               <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              PVC: {p.p_sold} / {p.unit}
                              </span>

                              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              PVC: {p.qty_sold}
                              </span>
                              <br/>
                             <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                              promotion: {p.promotion}
                              </span>
                            {/* <div className="text-gray-500"></div> */}
                          </div>
                        </div>
                          </td>
             
        
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{p.date}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{p.valorisation}</td>
                    
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <Incrementor id={p.id} value={p.inventory} name="inventory" func={props.func} FreshList={props.data} />
                        </td>
                      </td>
                  
                    </tr>
                  ))}
        </ul>
    )
}

export default List


 