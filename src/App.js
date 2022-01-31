import React, { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    } else {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }
  }, []);
};

const App = () => {
  const begForLife = () => console.log("check");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

export default App;
