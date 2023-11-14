import React from 'react'

const SectionList = ({ alphabet }) => {
  return (
    <div>
      {alphabet.split('').map((letter) => (
        <div key={letter} id={`section-${letter}`} className="py-4">
          <h2 className="text-2xl font-bold">{letter}</h2>
          {/* Add your section content here */}
        </div>
      ))}
    </div>
  )
}

export default SectionList