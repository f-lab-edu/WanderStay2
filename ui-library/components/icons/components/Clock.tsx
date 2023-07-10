import * as React from "react";
const SvgClock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#0C0507"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.333 10c0 4.6-3.733 8.333-8.333 8.333A8.336 8.336 0 0 1 1.667 10C1.667 5.4 5.4 1.667 10 1.667S18.333 5.4 18.333 10Z"
    />
    <path
      stroke="#0C0507"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.092 12.65-2.583-1.542c-.45-.266-.817-.908-.817-1.433V6.258"
    />
  </svg>
);
export default SvgClock;
