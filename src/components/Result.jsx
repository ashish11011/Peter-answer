import React, { useState } from "react";

function Result({answer}) {
  return (
    <div className="container">
      <h1>{answer}</h1>
    </div>
  );
}

export default Result;
