import React, { useState } from "react";
import httpClient from "../httpClient";

export default function RegisterPage(props: RegisterPageProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("")

  const registerUser = async () => {
    try {
      const resp = await httpClient.post("http://0.0.0.0:5000/graphql", {
        query: `
          mutation {
            registerUser(email: "${email}", password: "${password}",  username: "${username}") {
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
      console.log(resp);

      window.location.href = "/";
    } catch (error: any) {
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div
      className={`flex flex-col items-center  bg-[rgba(232,232,204,0.45)] font-['Lexend']`}
      style={props.style}
    >
      <div className="flex flex-col items-center justify-center px-10 py-20 mx-auto md:h-screen lg:py-0">

        <a href="/" className="flex items-center mb-6 text-2xl font-semibold  ">
          <div
            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/7a3fb7e4f01c787503f5644d3a637aa654b96124.webp)_center_/_cover] h-16 w-[218px]"
          />
        </a>

        <div className="w-full  md:mt-0 sm:max-w-md xl:p-0  gap-3 flex flex-col items-start ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p
              className="w-full text-3xl font-semibold m-0 leading-[38px] text-[rgba(16,24,40,1)]"
            >Connectez-vous.
            </p>
            <p
              className="w-full text-base font-normal leading-6 m-0 text-[rgba(102,112,133,1)]"
            >
              Bienvenue! Veuillez entrer vos identifiants.
            </p>

            <form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="Email" className="font-semibold m-0 block mb-2 text-sm font-medium text-gray-900 "> Email: </label>
                <input
                  className="[box-shadow:0px_0px_0px_1px_rgba(208,_213,_221,_1)_inset] [box-shadow-width:1px] px-3.5 py-2.5 w-full bg-white gap-2 flex items-center self-stretch rounded-lg font-normal drop-shadow-lg overflow-clip text-[rgba(102,112,133,1)]"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id=""
                />
              </div>
              <div>
                <label htmlFor="Password" className="font-semibold m-0 block mb-2 text-sm font-medium text-gray-900"> Password: </label>
                <input
                  className="[box-shadow:0px_0px_0px_1px_rgba(208,_213,_221,_1)_inset] [box-shadow-width:1px] px-3.5 py-2.5 w-full bg-white gap-2 flex items-center self-stretch rounded-lg font-normal drop-shadow-lg overflow-clip text-[rgba(102,112,133,1)]"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id=""
                />
              </div>
              <div>
                <label htmlFor="username" className="font-semibold m-0 block mb-2 text-sm font-medium text-gray-900"> Username: </label>
                <input
                  className="[box-shadow:0px_0px_0px_1px_rgba(208,_213,_221,_1)_inset] [box-shadow-width:1px] px-3.5 py-2.5 w-full bg-white gap-2 flex items-center self-stretch rounded-lg font-normal drop-shadow-lg overflow-clip text-[rgba(102,112,133,1)]"
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id=""
                />
              </div>




              <button
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 [box-shadow:0px_0px_0px_1px_rgba(78,_148,_79,_1)_inset] [box-shadow-width:1px] py-2.5 flex-1 inline-flex justify-center items-center flex-grow rounded-lg dark:text-white pl-[18px] pr-[18px] drop-shadow-lg bg-[rgba(78,148,79,1)] overflow-clip font-['Inter']"
                type="button"
                onClick={() => registerUser()}>
                Enregistrez-vous
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>



  )
}

RegisterPage.defaultProps = {
  style: {},
};

interface RegisterPageProps {
  style: Object;
}


