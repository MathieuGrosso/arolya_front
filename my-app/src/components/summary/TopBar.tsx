import React from 'react'
import Badge from "./Badge";


type TopBarProps = {
	
}


const TopBar = (props : TopBarProps) => {
  return (

     <div
          className="w-full relative gap-6 flex flex-col items-start self-stretch text-left text-black"
        >
          <div
            className="px-8 w-full relative gap-2.5 flex items-start self-stretch"
          >
            <div className="flex-1 gap-5">
              <div className="w-full gap-5 flex items-start self-stretch">
                <div
                  className="[rotate:90deg] origin-center w-7 h-0 outline outline-1 outline-[rgba(255,255,255,1)]"
                 />
                <div
                  className="h-7 relative gap-2.5 flex items-start self-stretch w-[25px]"
                >
                  <div>

                    <div
                      className="h-7 relative -top-px leading-none w-[234px] left-[151px]"
                    >
                      <p className="text-lg font-bold leading-5 inline m-0">
                        Commande à la centrale
                        <br />
                      </p>
                      <p className="text-sm font-normal leading-5 inline m-0">
                        08:45
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute top-0 gap-5 flex items-start flex-grow font-normal w-[560px] left-[576px]"
          >
            <div className="h-7 absolute top-0 right-0 w-[390px]">
              <div>
                <div
                  className="opacity-25 absolute top-0 gap-2.5 w-8 left-[-25px]"
                >
                  <Badge type="LG_FALSE_GRAY_TYPE" />
                </div>
              </div>
              <div className="w-full">
                <div
                  className="opacity-25 w-full absolute top-0 gap-2.5 flex items-start self-stretch left-[27px]"
                >
                  <div>
                    <p
                      className="h-7 -left-2 top-0 absolute text-sm leading-5 m-0 w-[125px]"
                    >
                      Votre commande
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="[rotate:-180deg] origin-top-left opacity-25 w-7 h-0 top-3.5 absolute left-[186px] outline outline-1 outline-[rgba(0,0,0,1)]"
                 />
              </div>
              <div>
                <div className="absolute top-0 gap-2.5 left-[204px]">
                  <Badge type="LG_FALSE_GRAY_TYPE1" />
                </div>
              </div>
              <div>
                <div
                  className="h-7 absolute top-0 gap-2.5 flex items-start self-stretch w-[109px] left-[281px]"
                >
                  <div>
                    <p
                      className="h-7 top-0 absolute text-sm leading-5 m-0 w-[171px] left-[-33px]"
                    >
                      Revoir et télécharger
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
  )
}

export default TopBar