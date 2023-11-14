import React from 'react';

const AlphabeticalNav = ({ letters, onLetterClick }) => {
  return (
    <ul className="flex space-x-2 bg-slate-200">
      {letters.map((letter, index) => (
        <li key={index}>
          <button
            className="text-blue-500 hover:text-blue-700 focus:outline-none "
            onClick={() => onLetterClick(letter)}
          >
            {letter}
          </button>
        </li>
      ))}
    </ul>
   
  );
};

export default AlphabeticalNav;