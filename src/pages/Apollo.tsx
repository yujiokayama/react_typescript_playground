import React, { useState } from "react";
import { ApolloProvider } from "react-apollo";
import {
  ApolloProvider as ApolloHooksProvider,
  useMutation,
  useQuery,
} from "react-apollo-hooks";
import { appClient } from "../component/graphql/client";
import { GET_USERS, CREATE_USER } from "../component/graphql/tags/getUser";

import { title } from "../Class";
import Header from "../component/Header";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Input from "@material-ui/core/Input";

type User = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type Users = {
  users: User[];
};

const UserList = () => {
  const { data, error, loading } = useQuery<Users>(GET_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>`Error! ${error.message}`</div>;
  }

  return (
    <ul>
      {data && data.users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};

const UserInput = () => {
  const [state, setState] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  const handleClick = () => {
    createUser({
      refetchQueries: [{ query: GET_USERS }],
      variables: { name: state },
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value);
  };

  return (
    <div>
      <Input type="text" value={state} onChange={onChange} />
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={handleClick}>Add</Button>
      </ButtonGroup>
    </div>
  );
};

const Apollo: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-10">
        <h1 className={title.main}>Apollo × GraphQL</h1>
        <p>※ローカルサーバ立ち上げて確認</p>
        <ApolloProvider client={appClient}>
          <ApolloHooksProvider client={appClient}>
            <UserInput />
            <UserList />
          </ApolloHooksProvider>
        </ApolloProvider>
      </div>
    </>
  );
};

export default Apollo;
