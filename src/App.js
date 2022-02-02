import React, { useState, useEffect, useRef } from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "temp",
  });

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data ? data.status : "nodata"}</h1>
      <h2>{loading ? "loading" : "notloading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;
