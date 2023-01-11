import React, { useState, useEffect } from "react";
import httpClient from "../httpClient";
import { User } from "../types";
import SideBar from "../components/AnimateSideBar";



export default function LandingPage(props: LandingPageProps) {
  const [user, setUser] = useState<User | null>(null);
  



  const logoutUser = async () => {
    localStorage.clear();
    await httpClient.post("http://0.0.0.0:5000/graphql",
      {
        query: `
        mutation {
          logoutUser {
            success
            errors
            user {
                email
                password 
                username 
                id
          }
        }
        }
      `,
      })

    window.location.href = "/";
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.post("http://0.0.0.0:5000/graphql", {
          query: `
          query {
            user {
              success
              errors
              user {
                email
                password 
                username 
                id
                

              
            }
          }
        }
        `,
        });
        console.log(resp)
        setUser(resp.data.data.user.user);
        localStorage.setItem("userId", resp.data.data.user.user.id);


      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);

  return (


    <div
      className={`relative gap-2.5  bg-[rgba(232,232,204,0.45)] font-['Lexend']`}
      style={props.style}
    >

      {user != null ? (

        <div className="flex flex-col items-center justify-center px-10 py-20 mx-auto md:h-screen lg:py-0">

          <a href="/" className="flex items-center mb-6 text-2xl font-semibold  ">
            <div
              className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/7a3fb7e4f01c787503f5644d3a637aa654b96124.webp)_center_/_cover] h-16 w-[218px]"
            />
          </a>

          <SideBar />

          <div className="w-full  md:mt-0 sm:max-w-md xl:p-0  gap-3 flex flex-col items-start ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p
                className="w-full text-3xl font-semibold m-0 leading-[38px] text-[rgba(16,24,40,1)]"
              >Welcome {user.username}, you are logged in.
              </p>
              <p
                className="w-full text-base font-normal leading-6 m-0 text-[rgba(102,112,133,1)]"
              >
                Your email is {user.email}
              </p>

              <form className="space-y-4 md:space-y-6">
                <button
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 [box-shadow:0px_0px_0px_1px_rgba(78,_148,_79,_1)_inset] [box-shadow-width:1px] py-2.5 flex-1 inline-flex justify-center items-center flex-grow rounded-lg dark:text-white pl-[18px] pr-[18px] drop-shadow-lg bg-[rgba(78,148,79,1)] overflow-clip font-['Inter']"
                  type="button"
                  onClick={() => logoutUser()}>
                  logout
                </button>

              </form>

            </div>
          </div>
        </div>




      ) : (
        <div className="flex flex-col align-items: center items-center justify-center px-10 py-20 mx-auto md:h-screen lg:py-0">

          <a href="/" className="flex  mb-6 text-2xl font-semibold  ">
            <div
              className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/7a3fb7e4f01c787503f5644d3a637aa654b96124.webp)_center_/_cover] h-16 w-[218px] "
            />


          </a>
          <div className="w-full font-['Lexend'] flex flex-col items-center md:mt-0 sm:max-w-md xl:p-0  gap-3  align-items: center ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p
                className="w-full  text-3xl font-semibold m-0 leading-[38px] font-['Lexend'] text-[rgba(16,24,40,1)]"
              >Connectez-vous !
              </p>


              <form className="space-y-4 md:space-y-6">

                <a href="/Register">
                  <button type="button" className="text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 mr-2 mb-2" >
                    <p className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 [box-shadow:0px_0px_0px_1px_rgba(78,_148,_79,_1)_inset] [box-shadow-width:1px] py-2.5   rounded-lg dark:text-white pl-[18px] pr-[18px] drop-shadow-lg bg-[rgba(78,148,79,1)] overflow-clip font-['Inter']">
                      Register
                    </p>
                  </button>
                </a>

                <a href="/Login">
                  <button type="button" className="text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full px-2 py-2.5 mr-2 mb-2" >
                    <p className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 [box-shadow:0px_0px_0px_1px_rgba(78,_148,_79,_1)_inset] [box-shadow-width:1px] py-2.5   rounded-lg dark:text-white pl-[18px] pr-[18px] drop-shadow-lg bg-[rgba(78,148,79,1)] overflow-clip font-['Inter']">
                      Login
                    </p>
                  </button>
                </a>


              </form>

            </div>
          </div>
        </div>

      )
      }
    </div>



  )
}




LandingPage.defaultProps = {
  style: {},
};

interface LandingPageProps {
  style: Object;
}


