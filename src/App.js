import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }

    console.log(e.value);
  };

  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => {
    return value.length < 10;
  };
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello </h1>
      <input placeholder="name" {...name}></input>
    </div>
  );
};

export default App;
