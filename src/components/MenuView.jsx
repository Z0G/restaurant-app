import MenuSection from './MenuSection';

const MenuView = ({ restaurant }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-lg text-gray-600 mb-2">{restaurant.cuisine} Cuisine</p>
        <p className="text-gray-700 max-w-2xl mx-auto">{restaurant.description}</p>
        <div className="flex items-center justify-center mt-4">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="ml-2 text-lg text-gray-600">{restaurant.rating} Rating</span>
        </div>
      </div>

      <div className="space-y-8">
        <MenuSection title="Appetizers" items={restaurant.menu.appetizers} />
        <MenuSection title="Main Courses" items={restaurant.menu.mains} />
        <MenuSection title="Desserts" items={restaurant.menu.desserts} />
      </div>
    </div>
  );
};

export default MenuView;
