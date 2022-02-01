import React, { useState, useEffect, useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFullScreen = () => {
    console.log(callback);
    console.log(typeof callback);
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFullscreen = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };

  return { element, triggerFullScreen, exitFullscreen };
};

const App = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "full" : "notfull");
  };
  const { element, triggerFullScreen, exitFullscreen } =
    useFullScreen(onFullScreen);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="http://image.chosun.com/sitedata/image/201808/10/2018081001569_0.jpg" />
      </div>
      <button onClick={triggerFullScreen}>Make fullscreen</button>
      <button onClick={exitFullscreen}>exit fullscreen</button>
    </div>
  );
};

export default App;
