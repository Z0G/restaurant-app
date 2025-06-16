const RestaurantCard = ({ restaurant, onSelect }) => {
  return (
    <div 
      onClick={onSelect}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
    >
      <img 
        src={restaurant.image} 
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {restaurant.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{restaurant.cuisine}</p>
        <p className="text-gray-700 mb-4">{restaurant.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm text-gray-600">{restaurant.rating}</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
