import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import LearningPaths from "../LearningPath";

const Cards = ({ searchTerm, buttonTag }) => {
  const [cardsData, setCardsData] = useState([]);
  const [searchTermTags, setSearchTermTags] = useState("");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/cards`);
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
      console.log(!buttonTag);
      setSearchTermTags("");
    }
  }, [buttonTag, searchTerm]);

  const handleSearchTags = (e) => {
    setSearchTermTags(e.target.value);
  };

  const handleSearchTagChange = (searchTag) => {
    setSearchTermTags(searchTag);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const getSortedCards = (cards) => {
    if (sortOption === "createdAt") {
      return cards.slice().sort((a, b) => {
        if (!a.createdAt) return 1;
        if (!b.createdAt) return -1;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    }
    return cards;
  };

  const filteredCards = getSortedCards(
    cardsData.filter((card) => {
      if (searchTermTags) {
        return card.tags.some((tag) =>
          tag.toLowerCase().includes(searchTermTags.toLowerCase())
        );
      } else if (searchTerm) {
        return card.title.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return card;
      }
    })
  );

  return (
    <div className="p-8">
      <div className="text-center mb-2 font-bold">Top Tags</div>
      <div className="flex justify-center">
        <LearningPaths onSearchTagChange={handleSearchTagChange} cards={cardsData} />
      </div>
      <div className="flex mt-4 justify-center">
        <input
          type="text"
          placeholder="Search by tags..."
          value={searchTermTags}
          onChange={handleSearchTags}
          className="mb-4 p-2 placeholder-gray-100 text-[12px] bg-[#030712] text-white focus:outline-none focus:ring-2 focus:ring-gray-300 border border-[#2c2e73] border-solid rounded w-3/12"
        />
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="ml-4 mb-4 cursor-pointer text-center text-[12px] p-2 bg-[#030712] text-white focus:outline-none focus:ring-2 focus:ring-gray-300 border border-[#2c2e73] border-solid rounded"
        >
          <option className="p-1 text-[12x] mb-2" value="default">Sort</option>
          <option value="createdAt">Latest</option>
        </select>
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
