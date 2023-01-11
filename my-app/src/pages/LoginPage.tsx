import React, { useState } from "react";
import httpClient from "../httpClient";
import "@fontsource/lexend"
import { LoginUserMutation,useLoginUserMutation,LoginUserMutationVariables } from "../utils/__generated__/graphql";

export default function LoginPage(props: LoginPageProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Mutation function and mutation loading state
  const [loginUser, { loading }] = useLoginUserMutation();

  


  // Event handler for the form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Call the loginUser mutation and pass it the email and password
    const result = await loginUser({
      variables: { email, password } as LoginUserMutationVariables,
    });

    // Check the result for success or errors
    if (result.data?.loginUser?.success) {
      console.log("it works")
      console.log(String(result.data?.loginUser?.user?.id))
      localStorage.setItem("userId", String(result.data?.loginUser?.user?.id));
      window.location.href = "/inventory";
  // Login was successful, do something here
} else {

  // Login failed, display the errors to the user
  const errors = result.data?.loginUser?.errors;
  console.log(errors);
  console.log('dont works')
  console.log(result)
}

  
  };






  return (
    <div
      className={`flex flex-col items-center relative gap-2.5  bg-[rgba(232,232,204,0.45)] font-['Lexend']`}
      style={props.style}
    >
      <div className="flex flex-col items-center justify-center px-10 py-20 mx-auto md:h-screen lg:py-0">

        <a href="/" className="flex items-center mb-6 text-2xl font-semibold">
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

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="Email" className="font-semibold m-0 block mb-2 text-sm font-medium text-gray-900 "> Email: </label>
                <input
                  className="[box-shadow:0px_0px_0px_1px_rgba(208,_213,_221,_1)_inset] [box-shadow-width:1px] px-3.5 py-2.5 w-full bg-white gap-2 flex items-center self-stretch rounded-lg font-normal drop-shadow-lg overflow-clip text-[rgba(102,112,133,1)]"
                  type="text"
                  value={email}
                   onChange={(event) => setEmail(event.target.value)}
                  id=""
                />
              </div>
              <div>
                <label htmlFor="Password" className="font-semibold m-0 block mb-2 text-sm font-medium text-gray-900"> Password: </label>
                <input
                  className="[box-shadow:0px_0px_0px_1px_rgba(208,_213,_221,_1)_inset] [box-shadow-width:1px] px-3.5 py-2.5 w-full bg-white gap-2 flex items-center self-stretch rounded-lg font-normal drop-shadow-lg overflow-clip text-[rgba(102,112,133,1)]"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id=""
                />
              </div>



              <button
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 [box-shadow:0px_0px_0px_1px_rgba(78,_148,_79,_1)_inset] [box-shadow-width:1px] py-2.5 flex-1 inline-flex justify-center items-center flex-grow rounded-lg dark:text-white pl-[18px] pr-[18px] drop-shadow-lg bg-[rgba(78,148,79,1)] overflow-clip font-['Inter']"
                type="submit"
                disabled={loading}>
                Connexion
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Pas de compte ? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Enregistrez vous ! </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>



  )
}

LoginPage.defaultProps = {
  style: {},
};

interface LoginPageProps {
  style: Object;
}

