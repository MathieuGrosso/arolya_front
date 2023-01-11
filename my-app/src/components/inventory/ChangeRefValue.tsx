import React from 'react'
import { useState } from 'react';
import { refetchReferenceByUserIdQuery, useUpdateReferenceInventoryMutation } from '../../utils/__generated__/graphql';

type TopBarProps = {
    id:number,
    display:number,	
}

export default function ChangeRefValue(props: TopBarProps) {
  const [name, setName] = useState('');
  const userId = localStorage.getItem('userId') as string;

  const [updateReferenceInventoryMutation, { data, loading, error }] = useUpdateReferenceInventoryMutation({
    refetchQueries: [refetchReferenceByUserIdQuery(
        {userId: userId}
    )],
  });

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await updateReferenceInventoryMutation({
        variables: {
            referenceId: String(props.id), // value for 'referenceId'
            newInventory: props.display // value for 'newInventory'
          },
        },
      );
    } catch (error) {
      return console.error(error);
    }

    setName('');


  };

  return (
    <div>
         <form onSubmit={handleSubmit}>
           
          {error && <div>Error: {error.message}</div>}
          <div>
            <button type="submit" disabled={loading} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 [box-shadow:0px_0px_0px_1px_rgba(78,_148,_79,_1)_inset] [box-shadow-width:1px] py-2.5 flex-1 inline-flex justify-center items-center flex-grow rounded-lg dark:text-white pl-[18px] pr-[18px] drop-shadow-lg bg-[rgba(78,148,79,1)] overflow-clip ">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />        
                </svg>
            </button>
          </div>
        </form>
    </div>
  );
}