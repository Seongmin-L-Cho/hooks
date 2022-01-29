import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  console.log(onClick);
  useEffect(() => {
    console.log("useEffect");
    if (element.current) {
      console.log(element.current);
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        console.log("fuck");
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  console.log(typeof onClick);
  console.log(element);
  return element;
};

const App = () => {
  const sayHello = () => console.log("hahahah");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <div ref={title}> hi</div>
    </div>
  );
};

export default App;
