import React from 'react'
import { useState } from 'react';
import {ChartPieIcon,
  ShoppingCartIcon,

} from '@heroicons/react/20/solid'


export const AnimatedSideBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    
  return (
    <>
  {showSidebar ? (
    <button
      className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      x
    </button>
  ) : (
    <svg
      onClick={() => setShowSidebar(!showSidebar)}
      className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
      fill="#252525"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  )}

  <div
  className={`top-0 right-0 w-[35vw]  bg-[rgba(232,232,204,0.45)]  p-10 pl-20 text-black fixed h-full z-40 ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`} >
    <h3 className="mt-20 text-4xl font-semibold text-black">Menu</h3>
     <ul class="mt-12">
        <li class="flex w-full justify-between text-black-300 hover:text-gray-300 cursor-pointer items-center mb-6">
                                    <a href="/dashboard" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                        <ChartPieIcon className="-ml-1 mr-2 h-10 w-5 " aria-hidden="true" />
                                        Tableau de bord
                                    </a>
                                   
                                </li>
                                <li class="flex w-full justify-between text-black-300 hover:text-gray-300 cursor-pointer items-center mb-6">
                                    <a href="/inventory" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                         <ShoppingCartIcon className="-ml-1 mr-2 h-10 w-5 " aria-hidden="true" />
                                         Votre Commande
                                      
                                    </a>
                                 </li>   
     </ul>
  </div>
</>

  )
}

export default AnimatedSideBar
