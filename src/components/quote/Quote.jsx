import React from "react";
import Card from "../card/card";

const Quote = ({ quote }) => {
  return (
    <>
      <div className="cardWrapper">
        {quote.map((p) => (
          <Card key={p._id} quote={p} />
        ))}
      </div>
    </>
  );
};

export default Quote;
