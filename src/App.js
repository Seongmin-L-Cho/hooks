import React, { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const el1 = useFadeIn(1, 2);
  const el2 = useFadeIn(3, 5);
  return (
    <div className="App">
      <h1 {...el1}>hello</h1>
      <h1 {...el2}>gogogoogogogo</h1>
    </div>
  );
};

export default App;
