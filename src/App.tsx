import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Basic from "./pages/Basic";
import Form from "./pages/Form";
import Crud from "./pages/Crud";
import TypeScript from "./pages/TypeScript";

// components
import Navigation from "./component/Navigation";

// styles
import "./assets/scss/styles.scss";

const App: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-10">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Basic} />
            <Route path="/form" component={Form} />
            <Route path="/crud" component={Crud} />
            <Route path="/typescript" component={TypeScript} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
