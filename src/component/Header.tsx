import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../component/Navigation";

const Header: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="logo">
          <Link to="/">React × TypeScript</Link>
        </h1>
        <Navigation />
      </div>
    </>
  );
};

export default Header;
