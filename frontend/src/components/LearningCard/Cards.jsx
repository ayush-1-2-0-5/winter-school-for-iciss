import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Cards = ({ searchTerm, buttonTag }) => {
  const [cardsData, setCardsData] = useState([]);
  const [searchTermTags, setSearchTermTags] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/cards");
        setCardsData(response.data);
      } catch (error) {
        console.error("Error fetching the cards data", error);
      }
    };
    fetchCards();
  }, []);

  useEffect(() => {
     console.log(buttonTag);
    if (buttonTag && !searchTerm) {
      setSearchTermTags(buttonTag);
      console.log(!buttonTag);

    } else if (!buttonTag && searchTermTags) { 
      console.log(!buttonTag)
      setSearchTermTags("");
    }
  }, [buttonTag, searchTerm]); 

  const filteredCards = cardsData.filter((card) => {
    if (searchTermTags) {
      return card.tags.some((tag) =>
        tag.toLowerCase().includes(searchTermTags.toLowerCase())
      );
    } else if (searchTerm) {
      return card.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return card;
    }
  });

  const handleSearchTags = (e) => {
    setSearchTermTags(e.target.value);
  };

  return (
    <div className="p-8">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search by tags..."
          value={searchTermTags}
          onChange={handleSearchTags}
          className="mb-4 p-2 placeholder-gray-100 text-[12px] bg-[#030712] text-white focus:outline-none focus:ring-2 focus:ring-gray-300 border border-[#2c2e73] border-solid rounded w-3/12"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
  {filteredCards.map((card, index) => (
    <Card key={index} card={card} />
  ))}
</div>
    </div>
  );
};

export default Cards;
