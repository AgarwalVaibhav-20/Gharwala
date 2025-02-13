import { useState, useContext } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import data from "../../db/Shoes.json";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

function Shoes() {
  const { setSelectedProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.company} added to cart!`);
  };

  const toggleFavorite = (itemId) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter((id) => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate("/product-detail");
  };

  return (
    <div className="p-6 bg-[#fdfffc] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Featured Shoes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((shoe, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => handleProductClick(shoe)} // Navigate to product detail page
            >
              {/* Image Container */}
              <div className="relative">
                <div className="w-full h-[280px] overflow-hidden bg-white p-6 border rounded-sm">
                  <img
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    src={shoe.image}
                    alt={shoe.company}
                  />
                </div>
                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering navigation
                    toggleFavorite(index);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(index)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-1">
                    {shoe.company}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {shoe.discription.slice(0, 30)}
                  </p>
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        {shoe.price}
                      </span>
                      {shoe.percentage && (
                        <span className="px-2 py-1 text-xs font-bold text-red-600 bg-red-100 rounded-full">
                          {shoe.percentage}
                        </span>
                      )}
                    </div>
                    {shoe.prevprice && (
                      <span className="text-sm text-gray-500 line-through">
                        {shoe.prevprice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering navigation
                    addToCart(shoe);
                  }}
                  className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shoes;
