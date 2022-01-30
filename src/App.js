import React, { useState, useEffect, useRef } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (onConfirm && typeof onConfirm !== "function") {
    return;
  }

  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("delete w");
  const confirmDelete = useConfirm("areyousure", deleteWorld);
  return (
    <div className="App">
      <button onClick={confirmDelete}> hi</button>
    </div>
  );
};

export default App;
