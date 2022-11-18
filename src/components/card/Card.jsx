import React from "react";

const Card = ({ quote }) => {
  console.log("this is from card" + quote);
  return (
    <>
      <div className="cardWrapper">
        {quote.map((p) => (
          <>
            <div className="rounded-lg bg-yellow-200 w-96 h-80 ml-10 shadow-xl">
              <div className="grid grid-rows text-center">
                <span className="m-20" id={p._id}>
                  {p.quote}
                </span>
                <span className="ml-40" id={p._id + "_1"}>
                  {p.author}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Card;
