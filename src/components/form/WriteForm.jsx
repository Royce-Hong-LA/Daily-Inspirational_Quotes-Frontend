import React, { useState, useEffect } from "react";
import axios from "axios";

const WriteForm = () => {
  const [newQuote, setNewQuote] = useState({
    author: "",
    quote: "",
  });
  const [koreans, setKoreans] = useState(false);

//  useEffect(()=>{
//    const fetchData = async()=>{
//       const res = 
//    }
//  }
//  , []);

  const submitHandler = async () => {
    ( !koreans?
      (await axios.post("quotes/write", newQuote)):
      (await axios.post("korean/write", newQuote)))

    console.log("inside--->",koreans);

    // return res.data;
  };

  const authorHandler = async (e) => {
    e.preventDefault();
    console.log("author--->",koreans);
    setNewQuote({ author: e.target.value });

    // axios.post("/write");
  };

  const quoteHandler = async (e) => {
    e.preventDefault();
    setNewQuote({ ...newQuote, quote: e.target.value });
    // axios.post("/write");
  };

  const languageChange = (e)=>{
    e.preventDefault();
    setKoreans(!koreans)
    console.log(koreans)
  }

  return (

      <form
        action=""
        className="grid grid-rows justify-center w-"
        onSubmit={submitHandler}
      >
        <div className="flex">
          {!koreans?<p className="m-5">Author</p>:<p>작가</p>}
          <button
            onClick={languageChange}
            className=" m-5 ml-80 h-10 w-20 bg-slate-400 rounded-md hover:bg-slate-500 text-2xl text-white"
            type="submit"
          >
            korean
          </button>
        </div>
        <input
          type="text"
          className="bg-slate-300 w-80 h-10 rounded-md"
          onChange={authorHandler}
          value={newQuote.author}
        />
           {!koreans?<p className="m-5">Quote</p>:<p>명언</p>}
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

  );
};

export default WriteForm;
