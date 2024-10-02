import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    const query = useQuery();
    const searchTerm = query.get('query');

    // You would normally make an API call here to fetch search results
    // Example: Fetch products that match the search term

    return (
        <div>
            <h1>Search Results for: {searchTerm}</h1>
            {/* Render search results here */}
            <p>Here will be the list of products matching "{searchTerm}".</p>
        </div>
    );
}

export default SearchResults;
