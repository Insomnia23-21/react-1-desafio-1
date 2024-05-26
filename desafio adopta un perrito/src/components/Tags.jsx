import React from "react";

const Tags = ({ text, bgColor }) => {
  return (
    <span className="badge" style={{ backgroundColor: bgColor }}>
      {text}
    </span>
  );
};

export default Tags;
