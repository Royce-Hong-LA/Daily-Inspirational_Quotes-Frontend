import React, { useState, useEffect } from "react";
import axios from "axios";

const WriteForm = () => {
  const [newQuote, setNewQuote] = useState({
    author: "",
    quote: "",
  });

  // useEffect({}, []);

  const submitHandler = async () => {
    await axios.post("quotes/write", newQuote);
    // console.log(res);

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
      <form
        action=""
        className="grid grid-rows justify-center w-"
        onSubmit={submitHandler}
      >
        <p className=" m-5">Author</p>
        <input
          type="text"
          className="bg-slate-300 w-80 h-10 rounded-md"
          onChange={authorHandler}
          value={newQuote.author}
        />
        <p className=" m-5">Quotes</p>
        <input
          type="text"
          className="bg-slate-300 w-96 h-80 rounded-md"
          onChange={quoteHandler}
          value={newQuote.quote}
        />
        <button
          className=" mt-10 h-20 w-80 bg-slate-400 rounded-md hover:bg-slate-500 text-2xl text-white"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default WriteForm;
