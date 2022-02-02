import React, { useState, useEffect, useRef } from "react";

const useNotification = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNoti = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };

  return fireNoti;
};

const App = () => {
  const triggerNoti = useNotification("hahahah", { body: "Do I know you?" });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNoti}>NotiButton</button>
    </div>
  );
};

export default App;
