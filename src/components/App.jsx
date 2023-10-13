import React, { useState } from "react";
import Result from "./Result.jsx";

function App() {
  const question = "Peter please answer to my question";
  const [answer, setAsnwer] = useState("");
  const [showQusetion, setShowQusetion] = useState("");
  const [count, setCount] = useState(0);
  const [isResultTime , setIsResultTime] = useState(true);


  function resultHandler(){
    setIsResultTime(false);
  }


  function requestHandler(event) {
    const value = event.nativeEvent.data;
    setAsnwer((prev)=>{ return prev + value });
    // console.log(answer);
    setCount(count+1);
    const val = question.substring(0,count);
    setShowQusetion(val);
  }

  return (
    <>{isResultTime ?
    (

      <div className="container">
      <h1>Thug</h1>
      <input
        type="text"
        placeholder="Question please"
      />
      <input
        value={showQusetion}
        onChange={requestHandler}
        type="text"
        placeholder="Request peter to answer"
      />
      <button
      onClick={resultHandler}
      >
        Submit
      </button>
    </div> 
  ):( 
    <Result answer={answer} />
  )}</>
  );
}

export default App;
