import React, { useState, useEffect } from "react";
import axios from "axios";

const WriteForm = () => {
  const [newQuote, setNewQuote] = useState({
    author: "",
    quote: "",
  });

  // useEffect({}, []);

  const submitHandler = async () => {
    const res = await axios.post("quotes/write", newQuote);
    console.log(res);

    // return res.data;
  };

  const authorHandler = async (e) => {
    e.preventDefault();
    setNewQuote({ author: e.target.value });

    // axios.post("/write");
  };

  const quoteHandler = async (e) => {
    e.preventDefault();
    setNewQuote({ ...newQuote, quote: e.target.value });
    // axios.post("/write");
  };

  return (
    <div>
      <form action="" className="grid grid-rows m-10" onSubmit={submitHandler}>
        <p>Author:</p>
        <input
          type="text"
          className="bg-slate-300 w-60"
          onChange={authorHandler}
          value={newQuote.author}
        />
        <p>Quotes:</p>
        <input
          type="text"
          className="bg-slate-300 h-80"
          onChange={quoteHandler}
          value={newQuote.quote}
        />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
};

export default WriteForm;
