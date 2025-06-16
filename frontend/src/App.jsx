import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MenuCard from './components/MenuCard';
import CategoryFilter from './components/CategoryFilter';
import RecipeModal from './components/RecipeModal';
import { menuItems, categories, restaurants, recipes } from './data/mockData';
import './App.css'

function App() {
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    filterItems();
  }, [selectedCategory, selectedRestaurant, searchTerm]);

  const filterItems = () => {
    let filtered = menuItems;

    if (selectedCategory) {
      filtered = filtered.filter(item => item.category_id === selectedCategory);
    }

    if (selectedRestaurant) {
      filtered = filtered.filter(item => item.restaurant_id === selectedRestaurant);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  };

  const handleViewRecipe = (item) => {
    if (item.recipe_id) {
      const recipe = recipes.find(r => r.id === item.recipe_id);
      if (recipe) {
        setSelectedRecipe(recipe);
        setIsRecipeModalOpen(true);
      } else {
        alert('Recipe not available yet - coming soon!');
      }
    } else {
      alert('Recipe not available for this item yet - coming soon!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-orange-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600">Loading delicious menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Navigation */}
      <Navbar 
        onSearchChange={setSearchTerm}
        searchTerm={searchTerm}
      />

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Recipe Hub</h1>
          <p className="text-xl mb-8">Discover restaurant recipes and learn to cook your favorite dishes at home</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Browse Recipes
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="restaurants" className="max-w-7xl mx-auto px-4 py-8">
        {/* Restaurant Filter */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Browse by Restaurant</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedRestaurant(null)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                selectedRestaurant === null
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>🏪</span>
              <span className="font-medium">All Restaurants</span>
            </button>
            
            {restaurants.map((restaurant) => (
              <button
                key={restaurant.id}
                onClick={() => setSelectedRestaurant(restaurant.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedRestaurant === restaurant.id
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{restaurant.icon}</span>
                <span className="font-medium">{restaurant.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {filteredItems.length} recipes available
              </p>
              {(selectedCategory || selectedRestaurant) && (
                <p className="text-orange-600 font-medium">
                  {selectedRestaurant && `from ${restaurants.find(r => r.id === selectedRestaurant)?.name}`}
                  {selectedCategory && selectedRestaurant && ' in '}
                  {selectedCategory && `${categories.find(c => c.id === selectedCategory)?.name}`}
                </p>
              )}
            </div>
            <div className="text-2xl">📖</div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onViewRecipe={handleViewRecipe}
              restaurantName={item.restaurant_name}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <span className="text-8xl">🔍</span>
            <h3 className="text-2xl font-bold text-gray-700 mt-6">No recipes found</h3>
            <p className="text-gray-500 mt-2 text-lg">
              {searchTerm ? `No results for "${searchTerm}"` : 'Try selecting a different category or restaurant'}
            </p>
            {(searchTerm || selectedCategory || selectedRestaurant) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                  setSelectedRestaurant(null);
                }}
                className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </main>

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isRecipeModalOpen}
        onClose={() => setIsRecipeModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">📖 Recipe Hub - Learn to cook restaurant-quality dishes at home</p>
          <p className="text-gray-400 mt-2">Bringing restaurant recipes to your kitchen</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
