// CategoryContext.js
import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export function useCategory() {
    return useContext(CategoryContext);
}

export const CategoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};
