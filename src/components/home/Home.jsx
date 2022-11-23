import React, { useEffect, useState } from "react";
import Quote from "../quote/Quote";
import axios from "axios";

const Home = () => {
  const [quote, setQuote] = useState([]);
  const [korean, setKorean] = useState(false); 
  console.log("from home",korean)

  useEffect(() => {
    const fetchData = async () => {

      const res = (korean?
        (await axios.get("korean")):
        (await axios.get("quotes")));

      setQuote(res.data);
    };
    fetchData();
  }, [korean]);

  const onLangChange = ()=>{
    setKorean(!korean);
    console.log("onchange",korean);
  };



  return (
    <>
      <div className="justify-center">
          {!korean?<p className="text-2xl m-20 text-center">
            Today's Daily Inspiring Quotation
          </p>:<p className="text-2xl m-20 text-center">
            당신에게 힘이 될 오늘의 명언 입니다
          </p>}
          <Quote className="justify-center" quote={quote} />
        </div>

        <div className="flex justify-center text-white">
            {korean?
              <button 
                  className="justify-center h-20 w-20 bg-slate-500 m-20 rounded-md hover:bg-slate-300" 
                  onClick={onLangChange}>
                    English
              </button>:
              <button 
                  className="justify-center h-20 w-20 bg-slate-500 m-20 rounded-md hover:bg-slate-300" 
                  onClick={onLangChange}>
                    Korean
              </button>}
          </div>
    </>
  );
};

export default Home;
