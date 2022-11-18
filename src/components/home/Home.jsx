import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";

const Home = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("quotes");
      //   console.log(res.data);
      setQuote(res.data);
      //   console.log("home---> " + quote);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="justify-center">
        <p className="text-2xl m-20 text-center">
          Welcome to Daily Inspiring Quotations
        </p>
        <Card quote={quote} />
      </div>
    </>
  );
};

export default Home;
