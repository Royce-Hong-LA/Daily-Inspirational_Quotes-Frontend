import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  

  return (
    <div className="w-100 h-20 bg-slate-400">
      <ul className="flex">
        <Link to="/">
          <li className="m-10">Home</li>
        </Link>

        <Link to="/quotes">
          <li className="m-10">Quotes</li>
        </Link>

        <Link to="/quotes">
          <li className="m-10">about</li>
        </Link>

        <Link to="/write">
          <li className="m-10">write</li>
        </Link>

      </ul>
    </div>
  );
};

export default Topbar;
