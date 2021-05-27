import React, { useReducer, useContext, createContext } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/agate.css";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const UseContextAndUseReducer: React.FC = () => {
  // stateの型を定義
  type State = {
    count: number;
  };

  // actionの型を定義
  type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

  // コンテキストの型を定義
  type ContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
  };

  // state初期値を定義
  const initState: State = {
    count: 0,
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };

  const AppContext = createContext<ContextType>({
    state: initState,
    dispatch: () => {},
  });

  const Parent: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        <h1>カウント: {state.count}</h1>
        <Child />
      </AppContext.Provider>
    );
  };

  const Child: React.FC = () => {
    return (
      <>
        <p>子コンポーネント</p>
        <Grandchild />
      </>
    );
  };

  const Grandchild: React.FC = () => {
    const { dispatch } = useContext(AppContext);
    return (
      <>
        <p>孫コンポーネント</p>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
          <Button onClick={() => dispatch({ type: "DECREMENT" })}>-</Button>
        </ButtonGroup>
      </>
    );
  };

  return (
    <>
      <div>
        <h3>UseContextとUseReducerを使用してステート管理</h3>
        <Highlight className="js">{`  // stateの型を定義
  type State = {
    count: number;
  };

  // actionの型を定義
  type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

  // コンテキストの型を定義
  type ContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
  };

  // state初期値を定義
  const initState: State = {
    count: 0,
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };

  const AppContext = createContext<ContextType>({
    state: initState,
    dispatch: () => {},
  });

  const Parent: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        <h1>カウント: {state.count}</h1>
        <Child />
      </AppContext.Provider>
    );
  };

  const Child: React.FC = () => {
    return (
      <>
        <p>子コンポーネント</p>
        <Grandchild />
      </>
    );
  };

  const Grandchild: React.FC = () => {
    const { dispatch } = useContext(AppContext);
    return (
      <>
        <p>孫コンポーネント</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </>
    );
  };

`}</Highlight>
        <Parent />
      </div>
    </>
  );
};

export default UseContextAndUseReducer;
