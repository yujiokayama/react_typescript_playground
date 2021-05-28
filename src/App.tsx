import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Basic from "./pages/Basic";
import Form from "./pages/Form";
import Crud from "./pages/Crud";
import TypeScript from "./pages/TypeScript";
import Hooks from "./pages/Hooks";
import Apollo from "./pages/Apollo";

// styles
import "./assets/scss/styles.scss";

const App: React.FC = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/basic" exact component={Basic} />
            <Route path="/form" component={Form} />
            <Route path="/crud" component={Crud} />
            <Route path="/typescript" component={TypeScript} />
            <Route path="/hooks" component={Hooks} />
            <Route path="/apollo-graphql" component={Apollo} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
