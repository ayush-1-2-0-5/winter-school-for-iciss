import React from 'react';
const buttons = [
  'Button 1',
  'Button 2',
  'Button 3',
  'Button 4',
  'Button 5',
  'Button 6',
];
const LearningPaths = () => {
  return (
    <div className="bg-black text-xl font-serif rounded-lg px-4 py-2 flex items-center gap-4 border border-[grey] border-solid">
      {buttons.map((buttonLabel, index) => (
        <button
          key={index} 
          className="bg-black rounded-md text-white py-2 px-4 font-medium focus:outline-none hover:bg-gray-800 hover:cursor-pointer"
        >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

export default LearningPaths;
