import axios from "axios";
import { useState, useEffect } from "react";

const MensProduct = () => {
  const [men, setMen] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiForMens = "/api/forMens"; // Replace with actual API URL

  useEffect(() => {
    const fetchMensProducts = async () => {
      try {
        const response = await axios.get(apiForMens);
        setMen(response.data);
      } catch (error) {
        console.error("Error fetching men's products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMensProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Men's Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {men.length > 0 ? (
            men.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4"
              >
                <img
                  src={product.images?.image1 || "/placeholder.jpg"}
                  alt={product.company}
                  className="w-full object-cover rounded-lg"
                />
                <h2 className="text-lg font-semibold mt-4">{product.company}</h2>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description?.slice(0, 50)}...
                </p>
                <div className="space-x-3">
                  <span>₹{product.price}</span>
                  <span className="line-through text-xs text-gray-500">{product.prePrice}</span>
                  <span className="text-red-600">{product.discount}%</span>
                </div>
                <div className="mt-2 text-gray-500">
                  Original Price: ₹{product.PrePrice}
                </div>
                <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MensProduct;
