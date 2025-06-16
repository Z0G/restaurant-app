import MenuItem from './MenuItem';

const MenuSection = ({ title, items }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
