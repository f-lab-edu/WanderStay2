import * as React from "react";
const SvgProfileCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.1 11.275H9.958c-1.891-.058-3.308-1.533-3.308-3.35a3.364 3.364 0 0 1 3.358-3.358 3.364 3.364 0 0 1 3.359 3.358 3.345 3.345 0 0 1-3.242 3.35H10.1ZM10 5.808a2.11 2.11 0 0 0-2.108 2.109 2.1 2.1 0 0 0 2.025 2.108.702.702 0 0 1 .191 0 2.113 2.113 0 0 0 2-2.108A2.11 2.11 0 0 0 10 5.808ZM10 18.958a8.925 8.925 0 0 1-6.042-2.35.629.629 0 0 1-.2-.525c.109-.991.725-1.916 1.75-2.6 2.484-1.65 6.509-1.65 8.984 0 1.025.692 1.641 1.609 1.75 2.6.025.2-.05.392-.2.525A8.925 8.925 0 0 1 10 18.958Zm-4.933-3.041A7.674 7.674 0 0 0 10 17.708c1.808 0 3.55-.633 4.933-1.791-.15-.509-.55-1-1.141-1.4-2.05-1.367-5.525-1.367-7.592 0-.592.4-.983.891-1.133 1.4Z"
    />
    <path
      fill="currentColor"
      d="M10 18.958c-4.942 0-8.958-4.016-8.958-8.958S5.058 1.042 10 1.042c4.941 0 8.958 4.016 8.958 8.958S14.942 18.958 10 18.958Zm0-16.666C5.75 2.292 2.292 5.75 2.292 10S5.75 17.708 10 17.708 17.708 14.25 17.708 10 14.25 2.292 10 2.292Z"
    />
  </svg>
);
export default SvgProfileCircle;
