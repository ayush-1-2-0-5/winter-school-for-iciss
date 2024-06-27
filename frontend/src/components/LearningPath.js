import React, { useState, useEffect } from 'react';

const buttons = [
  'Crypto',
  'Blockchain',
  'CSS',
  'Web Development',
  'React',
  'Button 6',
];

const LearningPaths = ({onSearchTagChange}) => {
  const [selectedButton, setSelectedButton] = useState('');
  const hoverColor = 'bg-gray-800'; 

  useEffect(() => {
  }, [selectedButton]);

  const handleClick = (buttonLabel) => {
    setSelectedButton(buttonLabel === selectedButton ? '' : buttonLabel);
    onSearchTagChange(buttonLabel);
  };

  return (
    <div className="bg-[#030712] text-xl font-serif rounded-lg px-4 py-2 flex items-center gap-4 border border-gray-300 border-solid">
      {buttons.map((buttonLabel, index) => (
        <button
          key={index}
          className={`bg-[#030712] rounded-lg text-gray-100 py-2 px-4 font-medium focus:outline-none hover:${hoverColor} cursor-pointer ${
            selectedButton === buttonLabel ? hoverColor : ''
          }`} 
          onClick={() => handleClick(buttonLabel)}
        >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

export default LearningPaths;
