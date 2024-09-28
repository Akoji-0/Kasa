import React, { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="collapse-item">
      <div
        className={`collapse-header ${isOpen ? "open" : ""}`} 
        onClick={toggleCollapse}
      >
        {title}
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children} {}
      </div>
    </div>
  );
};

export default Collapse;
