const MenuItem = ({ item }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
        <span className="text-lg font-bold text-green-600">${item.price}</span>
      </div>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
};

export default MenuItem;
