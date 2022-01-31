import React, { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = () => {
    console.log("leaving");
  };

  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    } else {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }
  }, []);

  return;
};

const beforeLeave = () => {
  const begForLife = () => console.log("check");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

export default beforeLeave;
