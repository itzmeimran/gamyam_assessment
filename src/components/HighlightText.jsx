import React from "react";

const HighlightText = ({ str = "", subStr = "" }) => {
  const index = str.toLowerCase().indexOf(subStr.toLowerCase());
  console.log(str, subStr);
  if (!subStr || index === -1) return str;
  const before = str.substring(0, index);
  const match = str.substring(index, index + subStr.length);
  const after = str.substring(index + subStr.length);
  return (
    <div>
      <p>
        {before}
        <span className="border pt-1 pl-1 pb-1 rounded-sm text-white bg-black">
          {match}
        </span>
        {after}
      </p>
    </div>
  );
};

export default HighlightText;
