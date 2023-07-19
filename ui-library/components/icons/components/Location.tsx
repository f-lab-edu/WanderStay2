import * as React from "react";
const SvgLocation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      d="M8 8.953a2.08 2.08 0 1 0 0-4.16 2.08 2.08 0 0 0 0 4.16Z"
    />
    <path
      stroke="currentColor"
      d="M2.413 5.66c1.314-5.773 9.867-5.767 11.174.007.766 3.386-1.34 6.253-3.187 8.026a3.462 3.462 0 0 1-4.807 0c-1.84-1.773-3.946-4.646-3.18-8.033Z"
    />
  </svg>
);
export default SvgLocation;
