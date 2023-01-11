import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: TodoResult;
  deleteTodo: DeleteTodoResult;
  getCurrentUser: UserResult;
  loginUser: UserResult;
  logoutUser: UserResult;
  markDone: TodoResult;
  registerUser: UserResult;
  updateDueDate: TodoResult;
  updateReferenceInventory: ReferenceResult;
  updateReferenceOrdered: ReferenceResult;
  updateReferenceUid: ReferenceResult;
};


export type MutationCreateTodoArgs = {
  description: Scalars['String'];
  dueDate: Scalars['String'];
};


export type MutationDeleteTodoArgs = {
  todoId: Scalars['ID'];
};


export type MutationGetCurrentUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationMarkDoneArgs = {
  todoId: Scalars['ID'];
};


export type MutationRegisterUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateDueDateArgs = {
  newDate: Scalars['String'];
  todoId: Scalars['ID'];
};


export type MutationUpdateReferenceInventoryArgs = {
  newInventory: Scalars['Int'];
  referenceId: Scalars['ID'];
};


export type MutationUpdateReferenceOrderedArgs = {
  newOrdered: Scalars['Int'];
  referenceId: Scalars['ID'];
};


export type MutationUpdateReferenceUidArgs = {
  newUid: Scalars['ID'];
  referenceId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  filterReferences: ReferencesResult;
  reference?: Maybe<ReferenceResult>;
  referenceByUserId: ReferencesResult;
  references: ReferencesResult;
  todo?: Maybe<TodoResult>;
  todos: TodosResult;
  user?: Maybe<UserResult>;
  users: UsersResult;
};


export type QueryFilterReferencesArgs = {
  input?: InputMaybe<ReferencesInputFilter>;
  userId: Scalars['ID'];
};


export type QueryReferenceArgs = {
  referenceId: Scalars['ID'];
};


export type QueryReferenceByUserIdArgs = {
  userId: Scalars['ID'];
};


export type QueryTodoArgs = {
  todoId: Scalars['ID'];
};

export type Reference = {
  __typename?: 'Reference';
  created_at: Scalars['String'];
  date: Scalars['String'];
  hour: Scalars['String'];
  id: Scalars['ID'];
  inventory: Scalars['Int'];
  name: Scalars['String'];
  ordered: Scalars['Int'];
  p_bought: Scalars['Int'];
  p_sold: Scalars['Int'];
  promotion: Scalars['Int'];
  qty_sold: Scalars['Int'];
  unit: Scalars['String'];
  valorisation: Scalars['Int'];
};

export type ReferenceResult = {
  __typename?: 'ReferenceResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  reference?: Maybe<Reference>;
  success: Scalars['Boolean'];
};

export type ReferencesInputFilter = {
  created_at?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  hour?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inventory?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  ordered?: InputMaybe<Scalars['Int']>;
  p_bought?: InputMaybe<Scalars['Int']>;
  p_sold?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Int']>;
  qty_sold?: InputMaybe<Scalars['Int']>;
  unit?: InputMaybe<Scalars['String']>;
  valorisation?: InputMaybe<Scalars['Int']>;
};

export type ReferencesResult = {
  __typename?: 'ReferencesResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  references?: Maybe<Array<Maybe<Reference>>>;
  success: Scalars['Boolean'];
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  description: Scalars['String'];
  dueDate: Scalars['String'];
  id: Scalars['ID'];
};

export type TodoResult = {
  __typename?: 'TodoResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
  todo?: Maybe<Todo>;
};

export type TodosResult = {
  __typename?: 'TodosResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type User = {
  __typename?: 'User';
  active: Scalars['Boolean'];
  created_at: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserResult = {
  __typename?: 'UserResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};

export type UsersResult = {
  __typename?: 'UsersResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success?: Maybe<Scalars['Boolean']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type DeleteTodoResult = {
  __typename?: 'deleteTodoResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
};

export type UpdateReferenceInventoryMutationVariables = Exact<{
  referenceId: Scalars['ID'];
  newInventory: Scalars['Int'];
}>;


export type UpdateReferenceInventoryMutation = { __typename?: 'Mutation', updateReferenceInventory: { __typename?: 'ReferenceResult', success: boolean, errors?: Array<string | null> | null, reference?: { __typename?: 'Reference', id: string, name: string, qty_sold: number, unit: string, p_sold: number, p_bought: number, date: string, hour: string, valorisation: number, promotion: number, inventory: number, ordered: number } | null } };

export type ReferenceByUserIdQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type ReferenceByUserIdQuery = { __typename?: 'Query', referenceByUserId: { __typename?: 'ReferencesResult', success: boolean, errors?: Array<string | null> | null, references?: Array<{ __typename?: 'Reference', id: string, name: string, qty_sold: number, unit: string, p_sold: number, p_bought: number, date: string, hour: string, valorisation: number, promotion: number, inventory: number, ordered: number } | null> | null } };

export type FilterReferencesByUserIdQueryVariables = Exact<{
  userId: Scalars['ID'];
  referencesInput?: InputMaybe<ReferencesInputFilter>;
}>;


export type FilterReferencesByUserIdQuery = { __typename?: 'Query', filterReferences: { __typename?: 'ReferencesResult', success: boolean, errors?: Array<string | null> | null, references?: Array<{ __typename?: 'Reference', id: string, name: string, qty_sold: number, unit: string, p_sold: number, p_bought: number, date: string, hour: string, valorisation: number, promotion: number, inventory: number, ordered: number } | null> | null } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserResult', success?: boolean | null, errors?: Array<string | null> | null, user?: { __typename?: 'User', email: string, password: string, id: string, username: string } | null } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser: { __typename?: 'UserResult', success?: boolean | null, errors?: Array<string | null> | null, user?: { __typename?: 'User', email: string, password: string, username: string, id: string } | null } };

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'UserResult', success?: boolean | null, errors?: Array<string | null> | null, user?: { __typename?: 'User', email: string, username: string, id: string } | null } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: { __typename?: 'UsersResult', success?: boolean | null, errors?: Array<string | null> | null, users?: Array<{ __typename?: 'User', email: string, password: string, username: string, id: string } | null> | null } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'UserResult', success?: boolean | null, errors?: Array<string | null> | null, user?: { __typename?: 'User', email: string, password: string, username: string, id: string } | null } | null };


export const UpdateReferenceInventoryDocument = gql`
    mutation UpdateReferenceInventory($referenceId: ID!, $newInventory: Int!) {
  updateReferenceInventory(referenceId: $referenceId, newInventory: $newInventory) {
    success
    errors
    reference {
      id
      name
      qty_sold
      unit
      p_sold
      p_bought
      date
      hour
      valorisation
      promotion
      inventory
      ordered
    }
  }
}
    `;
export type UpdateReferenceInventoryMutationFn = Apollo.MutationFunction<UpdateReferenceInventoryMutation, UpdateReferenceInventoryMutationVariables>;

/**
 * __useUpdateReferenceInventoryMutation__
 *
 * To run a mutation, you first call `useUpdateReferenceInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReferenceInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReferenceInventoryMutation, { data, loading, error }] = useUpdateReferenceInventoryMutation({
 *   variables: {
 *      referenceId: // value for 'referenceId'
 *      newInventory: // value for 'newInventory'
 *   },
 * });
 */
export function useUpdateReferenceInventoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReferenceInventoryMutation, UpdateReferenceInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReferenceInventoryMutation, UpdateReferenceInventoryMutationVariables>(UpdateReferenceInventoryDocument, options);
      }
export type UpdateReferenceInventoryMutationHookResult = ReturnType<typeof useUpdateReferenceInventoryMutation>;
export type UpdateReferenceInventoryMutationResult = Apollo.MutationResult<UpdateReferenceInventoryMutation>;
export type UpdateReferenceInventoryMutationOptions = Apollo.BaseMutationOptions<UpdateReferenceInventoryMutation, UpdateReferenceInventoryMutationVariables>;
export const ReferenceByUserIdDocument = gql`
    query ReferenceByUserId($userId: ID!) {
  referenceByUserId(userId: $userId) {
    success
    errors
    references {
      id
      name
      qty_sold
      unit
      p_sold
      p_bought
      date
      hour
      valorisation
      promotion
      inventory
      ordered
    }
  }
}
    `;

/**
 * __useReferenceByUserIdQuery__
 *
 * To run a query within a React component, call `useReferenceByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useReferenceByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReferenceByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useReferenceByUserIdQuery(baseOptions: Apollo.QueryHookOptions<ReferenceByUserIdQuery, ReferenceByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReferenceByUserIdQuery, ReferenceByUserIdQueryVariables>(ReferenceByUserIdDocument, options);
      }
export function useReferenceByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReferenceByUserIdQuery, ReferenceByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReferenceByUserIdQuery, ReferenceByUserIdQueryVariables>(ReferenceByUserIdDocument, options);
        }
export type ReferenceByUserIdQueryHookResult = ReturnType<typeof useReferenceByUserIdQuery>;
export type ReferenceByUserIdLazyQueryHookResult = ReturnType<typeof useReferenceByUserIdLazyQuery>;
export type ReferenceByUserIdQueryResult = Apollo.QueryResult<ReferenceByUserIdQuery, ReferenceByUserIdQueryVariables>;
export function refetchReferenceByUserIdQuery(variables: ReferenceByUserIdQueryVariables) {
      return { query: ReferenceByUserIdDocument, variables: variables }
    }
export const FilterReferencesByUserIdDocument = gql`
    query FilterReferencesByUserId($userId: ID!, $referencesInput: ReferencesInputFilter) {
  filterReferences(userId: $userId, input: $referencesInput) {
    success
    errors
    references {
      id
      name
      qty_sold
      unit
      p_sold
      p_bought
      date
      hour
      valorisation
      promotion
      inventory
      ordered
    }
  }
}
    `;

/**
 * __useFilterReferencesByUserIdQuery__
 *
 * To run a query within a React component, call `useFilterReferencesByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterReferencesByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterReferencesByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      referencesInput: // value for 'referencesInput'
 *   }, 
 * });
 */
export function useFilterReferencesByUserIdQuery(baseOptions: Apollo.QueryHookOptions<FilterReferencesByUserIdQuery, FilterReferencesByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilterReferencesByUserIdQuery, FilterReferencesByUserIdQueryVariables>(FilterReferencesByUserIdDocument, options);
      }
export function useFilterReferencesByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilterReferencesByUserIdQuery, FilterReferencesByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilterReferencesByUserIdQuery, FilterReferencesByUserIdQueryVariables>(FilterReferencesByUserIdDocument, options);
        }
export type FilterReferencesByUserIdQueryHookResult = ReturnType<typeof useFilterReferencesByUserIdQuery>;
export type FilterReferencesByUserIdLazyQueryHookResult = ReturnType<typeof useFilterReferencesByUserIdLazyQuery>;
export type FilterReferencesByUserIdQueryResult = Apollo.QueryResult<FilterReferencesByUserIdQuery, FilterReferencesByUserIdQueryVariables>;
export function refetchFilterReferencesByUserIdQuery(variables: FilterReferencesByUserIdQueryVariables) {
      return { query: FilterReferencesByUserIdDocument, variables: variables }
    }
export const LoginUserDocument = gql`
    mutation LoginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    success
    errors
    user {
      email
      password
      id
      username
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
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
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($email: String!, $password: String!, $username: String!) {
  registerUser(email: $email, password: $password, username: $username) {
    success
    errors
    user {
      email
      username
      id
      username
    }
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    success
    errors
    users {
      email
      password
      username
      id
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export function refetchGetUsersQuery(variables?: GetUsersQueryVariables) {
      return { query: GetUsersDocument, variables: variables }
    }
export const GetUserDocument = gql`
    query GetUser {
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
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export function refetchGetUserQuery(variables?: GetUserQueryVariables) {
      return { query: GetUserDocument, variables: variables }
    }