import React from "react";
import { getContrastYIQ } from "../helpers";

const Copied = ({ color }) => {
  return (
    <div
      className="copied"
      style={{
        "--bgColor": `#${color}`,
        "--textColor": `${getContrastYIQ(color)}`,
      }}
    >
      Copied #{color}
    </div>
  );
};

export default Copied;
