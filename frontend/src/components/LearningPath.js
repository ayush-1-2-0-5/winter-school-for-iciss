import React, { useState, useEffect } from 'react';

const LearningPaths = ({ onSearchTagChange, cards }) => {
  const [selectedButton, setSelectedButton] = useState('');
  const [topTags, setTopTags] = useState([]);
  const hoverColor = 'bg-gray-800'; 

  useEffect(() => {
    const tagFrequency = {};
    cards.forEach(card => {
      card.tags.forEach(tag => {
        if (tagFrequency[tag]) {
          tagFrequency[tag]++;
        } else {
          tagFrequency[tag] = 1;
        }
      });
    });

    const sortedTags = Object.keys(tagFrequency).sort((a, b) => tagFrequency[b] - tagFrequency[a]);
    setTopTags(sortedTags.slice(0, 6));
  }, [cards]);

  const handleClick = (buttonLabel) => {
    setSelectedButton(buttonLabel === selectedButton ? '' : buttonLabel);
    onSearchTagChange(buttonLabel);
  };

  return (
    <div className="bg-[#030712] text-xl font-serif rounded-lg px-4 py-2 flex items-center gap-4 border drop-shadow-[0_0_2.4px_#5C2E00] border-[#2c2e73] border-solid">
      {topTags.map((tag, index) => (
        <button
          key={index}
          className={`bg-[#030712] rounded-lg text-gray-100  py-2 px-4 font-medium focus:outline-none hover:${hoverColor} cursor-pointer ${
            selectedButton === tag ? hoverColor : ''
          }`} 
          onClick={() => handleClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default LearningPaths;
