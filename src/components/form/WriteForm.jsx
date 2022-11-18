import React from "react";

const WriteForm = () => {
  return (
    <div>
      <form action="" className="grid grid-rows m-10">
        <p>Author:</p>
        <input type="text" className="bg-slate-300 w-60" />
        <p>Quotes:</p>
        <input type="text" className="bg-slate-300 h-80" />
      </form>
    </div>
  );
};

export default WriteForm;
