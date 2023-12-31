import React from "react";

const CurvedUpArrow = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        imageRendering="optimizeQuality"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 512 500.38"
        class="fill-gray-800"
        {...props}
      >
        <path
          fillRule="nonzero"
          d="m249.85 218.7-101.34 15.51c-3.8.57-7.81-.46-10.93-3.18-5.65-4.93-6.25-13.51-1.33-19.16L316.77 4.64l1.6-1.53c5.76-4.77 14.32-3.96 19.09 1.8l171.46 207.23c2.41 2.99 3.59 6.96 2.87 11.04-1.32 7.34-8.36 12.23-15.7 10.92l-85.89-15.46c-2.1 17.98-6.57 37.62-13.36 57.81-17.7 52.69-51.45 110.06-100.41 153.45-49.45 43.82-114.31 73.5-193.78 70.24-28.94-1.18-59.77-6.77-92.41-17.65C4.96 481.15.78 476.67.1 470.92c-.88-7.43 4.44-14.19 11.88-15.07 100.17-11.93 158.25-50.57 191.95-98.33 30.13-42.67 41.39-93.26 45.92-138.82z"
        />
      </svg>
    </>
  );
};

export default CurvedUpArrow;
