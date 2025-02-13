import { useContext, useState } from "react";
import { Star, Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import data from "../../db/Shoes.json";
import { ProductContext } from "../../context/ProductContext";

const ProductPage = () => {
  const defaultImage = "/images/placeholder.jpg";
  const { selectedProduct } = useContext(ProductContext);

  const product = {
    title: selectedProduct?.discription || "No Title Available",
    brand: selectedProduct?.company || "Unknown Brand",
    price: selectedProduct?.price || "N/A",
    originalPrice: selectedProduct?.prevprice || "N/A",
    images: [
      selectedProduct?.image || defaultImage,
      selectedProduct?.image2 || defaultImage,
      selectedProduct?.image3 || defaultImage,
      selectedProduct?.image4 || defaultImage,
    ].filter(Boolean),
  };

  const [currentImageIndex, setCurrentImageIndex] = useState([0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // console.log("Product Data:", data , "length : ", product.images.length / product.images.length);
  // console.log("Current Image Path:", product.images[currentImageIndex]);
 
  

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-full bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="relative aspect-square">
              <img
                src={product.images[currentImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-lg hover:bg-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-lg hover:bg-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="flex mt-4 gap-2 justify-center">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-16 border-2 rounded ${
                    currentImageIndex === index ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <img src={product.images[index]} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-blue-600 hover:underline cursor-pointer">by {product.brand}</p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
              ))}
              <span className="text-blue-600 hover:underline cursor-pointer">{data.prevprice} ratings</span>
            </div>
            <div className="border-t border-b py-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{product.price}</span>
                <span className="text-gray-500 line-through">{product.originalPrice}</span>
              </div>
              <span className="inline-block mt-2 px-2 py-1 text-sm font-bold">Inclusive of all taxes</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">About this item:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>High-quality material</li>
                <li>Durable and stylish</li>
                <li>Comfortable fit</li>
              </ul>
            </div>

            <section className="border">
              <div className="space-y-3">
                <button className="w-full py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded flex items-center justify-center font-medium">
                  <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                </button>
                <button
                  className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-black rounded flex items-center justify-center font-medium"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} /> Add to Wish List
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
