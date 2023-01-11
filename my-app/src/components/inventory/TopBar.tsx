import React from 'react'
import Badge from "../summary/Badge";



type TopBarProps = {
	
}


const TopBar = (props : TopBarProps) => {
  return (
    


<div className={`text-left text-black font-['Lexend']`}>
              <div className="inset-x-0 relative gap-6 w-[1249px]">
                <div
                  className="px-8 w-full gap-2.5 flex items-start self-stretch"
                >
                  <div className="flex-1 gap-5">
                    <div
                      className="w-full gap-5 flex items-start self-stretch"
                    >
                      <div
                        className="[rotate:90deg] origin-center w-7 h-0 outline outline-1 outline-[rgba(255,255,255,1)]"
                       />
                      <div
                        className="h-7 relative gap-2.5 flex items-start self-stretch w-[25px]"
                      >
                        <div>
                          <div
                            className="h-7 relative -left-2 top-0 leading-none w-[234px]"
                          >
                            <p
                              className="text-lg font-bold leading-5 inline m-0"
                            >
                              Commande à la centrale
                              <br />
                            </p>
                            <p
                              className="text-sm font-normal leading-5 inline m-0"
                            >
                              08:45
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-1 relative gap-5 flex items-start flex-grow font-normal w-[587.5px]"
                  >
                    <div className="w-full">
                      <div
                        className="h-7 absolute top-0 w-[390px] right-[-0.5px]"
                      >
                        <div>
                          <div
                            className="absolute top-0 gap-2.5 w-8 left-[-25px]"
                          >
                            <Badge type="LG_FALSE_GRAY_TYPE" />
                          </div>
                        </div>
                        <div className="w-full">
                          <div
                            className="w-full absolute top-0 gap-2.5 flex items-start self-stretch left-[27px]"
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
                          <div
                            className="opacity-25 absolute top-0 gap-2.5 left-[204px]"
                          >
                            <Badge type="LG_FALSE_GRAY_TYPE1" />
                          </div>
                        </div>
                        <div>
                          <div
                            className="h-7 absolute top-0 gap-2.5 flex items-start self-stretch w-[109px] left-[281px]"
                          >
                            <div>
                              <p
                                className="opacity-25 h-7 top-0 absolute text-sm leading-5 m-0 w-[171px] left-[-33px]"
                              >
                                Revoir et télécharger
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default TopBar