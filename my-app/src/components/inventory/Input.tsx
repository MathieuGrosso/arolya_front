import React, { KeyboardEvent } from 'react';

type InputProps = {
    func: Function,
    inputText: String
}
const Input = (props: InputProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        console.log()
        props.func(props.inputText)
        
      console.log('do validate')

    }
  }

  return <input type="text" onKeyPress={handleKeyDown}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
 />
}

export default Input;