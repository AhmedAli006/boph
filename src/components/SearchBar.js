// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, placeholder }) => {
    return (
        <div className="flex flex-row items-center justify-center w-full p-2 shadow-xs">
            <span style={{ width: "460px" }} className="flex h-10 text-sm rounded-full cursor-pointer ">
                <input
                    type="search"
                    name="search"
                    placeholder={placeholder}
                    className="flex-grow px-4 text-sm rounded-l-full border border-gray-500 rounded-r-full focus:outline-none"
                    value={searchQuery} // Bind the input value to searchQuery
                    onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                />
            </span>
        </div>
    );
};

export default SearchBar;