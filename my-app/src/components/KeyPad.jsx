import React from 'react'
import { useState } from 'react'
import Button from './Button'
import ButtonBox from './buttonBox'



export const KeyPad = (props) => {
    const [display, setDisplay] = useState("0");

  function updateDisplay(token) {
    if (display === "0") {
      setDisplay(token);
    } else {
      setDisplay(display + token);
    }
  }

   const replace = (id,name,display) => {
        const newFreshList = props.FreshList.map((product) => {
            if (product.id === id && name==="inventory") {
                return {
                    ...product, 
                    inventory: display
                }
        
              
            }
            else if (product.id === id && name==="ordered") {
                return {
                    ...product, 
                    ordered: product.ordered + 1
                }
        
              
            }
            return product
        })
        props.func(newFreshList)  
    }



  
    


  return (
<div>
   <div className="flex flex-col items-center rounded shadow">
     
        <div className="bg-gray-300 p-2 my-4">{display}</div>
        <div className="flex justify-between my-3">
          <button
            onClick={() => updateDisplay("7")}
            className="p-2 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            7
          </button>
          <button
            onClick={() => updateDisplay("8")}
            className="p-2 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            8
          </button>
          <button
            onClick={() => updateDisplay("9")}
            className="p-2 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            9
          </button>
          
        </div>
        <div className="flex justify-between my-3">
          <button
            onClick={() => updateDisplay("4")}
            className="p-2 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            4
          </button>
          <button
            onClick={() => updateDisplay("5")}
            className="p-2 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            5
          </button>
          <button
            onClick={() => updateDisplay("6")}
            className="p-2 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            6
          </button>
         
        </div>
        <div className="flex justify-between my-3">
          <button
            onClick={() => updateDisplay("1")}
            className="p-2 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            1
          </button>
          <button
            onClick={() => updateDisplay("2")}
            className="p-2 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            2
          </button>
          <button
            onClick={() => updateDisplay("3")}
            className="p-2 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            3
          </button>
         
        </div>
        <div className="flex justify-between my-3">
          <button
            onClick={() => updateDisplay("0")}
            className="p-2  w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            0
          </button>
          <button
            onClick={() => setDisplay("0")}
            className="p-2 w-20 rounded-xl border-2 border-gray-500 shadow-md text-black"
          >
            C
          </button>
  
        
          
        </div>
      </div>
      <button 
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 [box-shadow:0px_0px_0px_1px_rgba(78,_148,_79,_1)_inset] [box-shadow-width:1px] py-2.5 flex-1 inline-flex justify-center items-center flex-grow rounded-lg dark:text-white pl-[18px] pr-[18px] drop-shadow-lg bg-[rgba(78,148,79,1)] overflow-clip font-['Inter']"
        onClick={() => replace(props.id,props.name,display)}
        >Valider le stock 
        </button>

</div>


  )
}
