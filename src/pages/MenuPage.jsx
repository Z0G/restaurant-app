import React, { useState, useEffect } from 'react';
import MenuCard from '../components/MenuCard';
import CategoryFilter from '../components/CategoryFilter';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenuItems();
    fetchCategories();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('/api/menu');
      if (!response.ok) throw new Error('Failed to fetch menu items');
      const data = await response.json();
      setMenuItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      // Extract unique categories from menu items
      const response = await fetch('/api/menu');
      const data = await response.json();
      const uniqueCategories = data.reduce((acc, item) => {
        if (item.category_id && !acc.find(cat => cat.id === item.category_id)) {
          acc.push({
            id: item.category_id,
            name: item.category_name || 'Uncategorized'
          });
        }
        return acc;
      }, []);
      setCategories(uniqueCategories);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  const filteredItems = selectedCategory
    ? menuItems.filter(item => item.category_id === selectedCategory)
    : menuItems;

  const handleViewRecipe = (itemId) => {
    // Navigate to recipe page or show recipe modal
    console.log('View recipe for item:', itemId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading delicious menu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Our Menu</h1>
          <p className="text-gray-600 mt-2">Discover our carefully crafted dishes</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Stats */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredItems.length} of {menuItems.length} items
            {selectedCategory && (
              <span className="ml-2 text-orange-600 font-medium">
                in {categories.find(c => c.id === selectedCategory)?.name}
              </span>
            )}
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onViewRecipe={handleViewRecipe}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl">🍽️</span>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">No items found</h3>
            <p className="text-gray-500 mt-2">Try selecting a different category</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MenuPage;
