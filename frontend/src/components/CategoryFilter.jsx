import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const getCategoryIcon = (name) => {
    const icons = {
      'Appetizers': '🥗',
      'Soups & Salads': '🥣',
      'Main Courses': '🍖',
      'Pasta & Pizza': '🍝',
      'Seafood': '🐟',
      'Asian Cuisine': '🥢',
      'Mexican': '🌮',
      'Desserts': '🍰',
      'Beverages': '🥤'
    };
    return icons[name] || '🍽️';
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Browse by Category</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategoryChange(null)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
            selectedCategory === null
              ? 'bg-orange-500 text-white shadow-lg transform scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span>🍽️</span>
          <span className="font-medium">All Items</span>
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{getCategoryIcon(category.name)}</span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
