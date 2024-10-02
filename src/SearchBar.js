import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResults.css';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResults({ productsData }) {
    const query = useQuery();
    const searchTerm = query.get('query') ? query.get('query').toLowerCase() : '';

    // Filter products based on the search term
    const filteredProducts = productsData.filter(product =>
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <h1>Search Results for: "{searchTerm}"</h1>
            {filteredProducts.length > 0 ? (
                <div className="search-results">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.images[0]} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p><strong>Price:</strong> ${product.price}</p>
                                <p><strong>Category:</strong> {product.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found for "{searchTerm}"</p>
            )}
        </div>
    );
}

export default SearchResults;
