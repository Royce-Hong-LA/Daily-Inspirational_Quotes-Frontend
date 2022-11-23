import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  

  return (
    <div className="w-100 h-20 bg-slate-400 font-bold">
      <ul className="flex justify-center">
        <Link to="/">
          <li className="m-10">HOME</li>
        </Link>

        <Link to="/quotes">
          <li className="m-10">QUOTES</li>
        </Link>

        <Link to="/quotes">
          <li className="m-10">ABOUT</li>
        </Link>

        <Link to="/write">
          <li className="m-10">WRITE</li>
        </Link>
      </ul>
    </div>
  );
};

export default Topbar;
