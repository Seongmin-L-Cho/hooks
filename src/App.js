import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "section 1111",
  },
  {
    tab: "Section 2",
    content: "section 22222",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setcurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setcurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, idx) => (
        <div>
          <button onClick={() => changeItem(idx)}>{section.tab}</button>
        </div>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
