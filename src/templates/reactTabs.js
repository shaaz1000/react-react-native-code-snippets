import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="tab-list">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={tab.label === activeTab ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => {
          if (tab.label === activeTab) {
            return <div key={tab.label}>{tab.content}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Tabs;
