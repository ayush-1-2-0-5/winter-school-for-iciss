import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import LearningPaths from "../LearningPath";

const Cards = ({ searchTerm, buttonTag }) => {
  const [cardsData, setCardsData] = useState([]);
  const [searchTermTags, setSearchTermTags] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/cards`, {
          params: {
            searchTerm,
            buttonTag,
            page: currentPage,
            limit: itemsPerPage,
          }
        });
        if (response.data && response.data.cards) {
          setCardsData(response.data.cards);
          setTotalPages(Math.ceil(response.data.totalCount / itemsPerPage));
        } else {
          setCardsData([]);
        }
      } catch (error) {
        console.error("Error fetching the cards data", error);
      }
    };
    fetchCards();
  }, [searchTerm, buttonTag, currentPage]);

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

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
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
        return true;
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
          className="mb-4 p-2 placeholder-gray-100 drop-shadow-[0_0_2.4px_#5C2E00] text-[12px] bg-[#030712] text-white focus:outline-none focus:ring-2 focus:ring-gray-300 border border-[#2c2e73] border-solid rounded w-3/12"
        />
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="ml-4 mb-4 cursor-pointer text-center text-[12px] drop-shadow-[0_0_2.4px_#5C2E00] p-2 bg-[#030712] text-white focus:outline-none focus:ring-2 focus:ring-gray-300 border border-[#2c2e73] border-solid rounded"
        >
          <option className="p-1 text-[12px] mb-2" value="default">Sort</option>
          <option value="createdAt">Latest</option>
        </select>
      </div>
      <div className="grid grid-cols-2  min-h-[600px] md:grid-cols-1 gap-8">
        {Array.isArray(filteredCards) && filteredCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <div className="pagination-controls flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 mx-1 ${currentPage === 1 ? 'text-white border border-solid cursor-not-allowed  bg-gray-200' : 'text-white border border-solid bg-black cursor-pointer'}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 ${index + 1 === currentPage ? 'bg-blue-300 drop-shadow-[0_0_2.4px_#5C2E00] text-gray-100 border border-solid ' : 'bg-gray-200 text-black'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 mx-1 ${currentPage === totalPages ? 'text-white border border-solid cursor-not-allowed  bg-gray-200' : 'text-white border border-solid bg-black cursor-pointer'}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;
