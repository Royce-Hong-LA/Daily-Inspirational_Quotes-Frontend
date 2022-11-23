import React, { useEffect, useState } from "react";
import Quote from "../quote/Quote";
import axios from "axios";

const Home = () => {
  const [quote, setQuote] = useState([]);
  const [korean, setKorean] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      const res = (korean?(await axios.get("korean")):(await axios.get("quotes")));
      setQuote(res.data);
    };
    fetchData();
  }, [korean]);

  const onLangChange = (e)=>{
    e.preventDefault();
    setKorean(!korean);
    console.log(korean);

  }



  return (
    <>
      <div className="justify-center">
        {!korean?<p className="text-2xl m-20 text-center">
          Welcome to Daily Inspiring Quotations
        </p>:<p className="text-2xl m-20 text-center">
          오늘의 명언 입니다
        </p>}
        <Quote className="justify-center" quote={quote} />
        <div className="buttons text-white">
          {korean?
            <button 
                className="h-20 w-20 bg-slate-500 m-20 rounded-md hover:bg-slate-300" 
                onClick={onLangChange}>
                  English
            </button>:
            <button 
                className="h-20 w-20 bg-slate-500 m-20 rounded-md hover:bg-slate-300" 
                onClick={onLangChange}>
                  Korean
            </button>}
        </div>

      </div>
    </>
  );
};

export default Home;
