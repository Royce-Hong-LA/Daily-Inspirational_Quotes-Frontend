import React from "react";

const Card = ({ quote }) => {
  return (
    <>
      <div className="contained rounded-lg bg-white w-96 h-80 ml-10 shadow-xl">
        <div className="grid grid-rows text-center">
          <span className="mt-20">{quote.quote}</span>
          <div className="mt-20">
            <span className="">{quote.author}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
