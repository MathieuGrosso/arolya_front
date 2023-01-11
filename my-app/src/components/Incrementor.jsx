import React from 'react'



export const Incrementor = (props) => {
  
  const increment = (id,name) => {
        const newFreshList = props.FreshList.map((product) => {
            if (product.id === id && name==="inventory") {
                return {
                    ...product, 
                    inventory: product.inventory + 1
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

   const decrement = (id,name) => {
        const newFreshList = props.FreshList.map((product) => {
            if (product.id === id && name==="inventory") {
                return {
                    ...product, 
                    inventory: product.inventory - 1
                }
        
            }
            else if (product.id === id && name==="ordered") {
                return {
                    ...product, 
                    ordered: product.ordered - 1
                }
        
              
            }
            return product
        })
        props.func(newFreshList)  
    }
  
  return (
   <div >
          <h1> {props.value}</h1>
          <button onClick={()=>increment(props.id,props.name,props.value)}  > + </button>
          <button onClick={()=>decrement(props.id,props.name.props.value)} > - </button>


        </div>
  )
   
}



export default Incrementor