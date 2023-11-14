import React, { useRef } from 'react';

const AlphabeticalNav = ({ alphabet, scrollToLetter }) => {
  const scrollContainerRef = useRef(null);

  const handleClick = (letter) => {
    if (scrollToLetter) {
      scrollToLetter(letter);
    }
  };

  return (
    <div className="flex bg-green-300 max-w-sm justify-center text-left px-1 rounded-lg py-1">
      <div className="">
        {alphabet.split('').map((letter) => (
          <button
            key={letter}
            onClick={() => handleClick(letter)}
            className="px-1 py-0 m-1 bg-gray-200 hover:bg-gray-100 rounded text-sm"
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};
export default AlphabeticalNav;

