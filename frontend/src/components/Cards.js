import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Cards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredCards = cardsData.filter((card) =>
    card.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-8">
      <div className="flex justify-center"> 
        <input
          type="text"
          placeholder="Search by tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2   bg-[#030712] text-white  focus:outline-none focus:ring-2  focus:ring-gray-300 border border-gray-300 border-solid rounded w-3/12"
        />
      </div>
      <div className={`grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8`}>
        {filteredCards.map((card, index) => (
          <div key={index}>
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
