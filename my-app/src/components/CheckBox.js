import React from 'react'





export const  CheckBox = (props) => {


    

    const checkHandler = () => {
    props.func(!props.isChecked)
    
  }

  return (
    <div class="flex items-center pl-4 font-bold ">

        <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            checked = {props.isChecked}
            onChange = {checkHandler}
            /> 

        <label for="bordered-checkbox-2" class="sticky top-0 z-10  border-gray-200 bg-gray-50 px-6 py-3 text-base  font-black ">{props.name}</label>
       
    </div>
  )
}


export default CheckBox