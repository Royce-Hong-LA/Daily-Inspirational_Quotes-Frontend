import React from "react";

const Card = ({ quote }) => {
  return (
    <>
      <div className="rounded-lg bg-yellow-200 w-96 h-80 ml-10 shadow-xl">
        <div className="grid grid-rows text-center">
          <span className="m-20">{quote.quote}</span>
          <span className="ml-40">{quote.author}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
