import { Link } from "react-router-dom";

const categories = [
  {
    name: "Men",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    name: "Women",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  },
  {
    name: "Kids",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
  },
  {
    name: "Ethnic",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    name: "Winter",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
  },
];

const CategoryUser = () => {
  return (
    <div className="bg-white py-4">
      <div className="max-w-7x mx-auto px-4 flex justify-around gap-4">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {categories.map((cat, index) => (
            <Link
              to={`/products/${cat.name.toLowerCase()}`}
              key={index}
              className="flex flex-col items-center min-w-[80px] hover:scale-105 transition"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-pink-500">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 text-center">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryUser;