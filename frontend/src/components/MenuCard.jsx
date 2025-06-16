import React from 'react';

const MenuCard = ({ item, onViewRecipe, restaurantName }) => {
  const getCategoryIcon = (categoryId) => {
    const icons = {
      1: '🥗', // Appetizers
      2: '🥣', // Soups & Salads
      3: '🍖', // Main Courses
      4: '🍝', // Pasta & Pizza
      5: '🐟', // Seafood
      6: '🥢', // Asian Cuisine
      7: '🌮', // Mexican
      8: '🍰', // Desserts
      9: '🥤'  // Beverages
    };
    return icons[categoryId] || '🍽️';
  };

  const getDifficultyColor = (difficulty = 'Medium') => {
    const colors = {
      'Easy': 'bg-green-100 text-green-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Hard': 'bg-red-100 text-red-800'
    };
    return colors[difficulty] || colors['Medium'];
  };

  const getRating = () => {
    return (Math.random() * 1 + 4).toFixed(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="h-48 relative overflow-hidden">
        {item.image_url ? (
          <img 
            src={item.image_url} 
            alt={item.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        
        {/* Fallback with icon */}
        <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center" style={{display: item.image_url ? 'none' : 'flex'}}>
          <span className="text-6xl">{getCategoryIcon(item.category_id)}</span>
        </div>
        
        {/* Overlay badges */}
        <div className="absolute top-3 right-3">
          <span className="bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-600">
            {item.category_name}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.recipe_id ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
            {item.recipe_id ? 'Recipe Available' : 'Coming Soon'}
          </span>
        </div>
        {restaurantName && (
          <div className="absolute top-3 left-3">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              {restaurantName}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold text-green-600">${item.price}</span>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm text-gray-600">{getRating()}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => onViewRecipe && onViewRecipe(item)}
            disabled={!item.recipe_id}
            className={`flex-1 px-4 py-2 text-sm rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors ${
              item.recipe_id 
                ? 'bg-orange-500 text-white hover:bg-orange-600' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>📖</span>
            <span>{item.recipe_id ? 'View Recipe' : 'Recipe Soon'}</span>
          </button>
        </div>
        
        {/* Recipe Info */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>⏱️ 30 min</span>
          <span>👥 4 servings</span>
          <span>📊 Medium</span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
