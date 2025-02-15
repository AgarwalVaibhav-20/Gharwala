import { useContext, useState } from "react";
import {
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Star,
  StarHalf,
} from "lucide-react";
import { ProductContext } from "../../context/ProductContext";

const ProductPage = () => {
  const defaultImage = "/images/placeholder.jpg";
  const { selectedProduct } = useContext(ProductContext);

  // Product Data with Safe Optional Chaining
  const product = {
    title: selectedProduct?.discription || "No Title Available",
    brand: selectedProduct?.company || "Unknown Brand",
    price: selectedProduct?.price || "N/A",
    originalPrice: selectedProduct?.prevprice || "N/A",
    length: selectedProduct?.productDimensions?.length || "N/A",
    width: selectedProduct?.productDimensions?.width || "N/A",
    height: selectedProduct?.productDimensions?.height || "N/A",
    unit: selectedProduct?.productDimensions?.unit || "",
    value: selectedProduct?.weight?.value || "N/A",
    unit1: selectedProduct?.weight?.unit1 || "",
    dateFirstAvailable: selectedProduct?.dateFirstAvailable || "N/A",
    reviewData: selectedProduct?.reviewData || [],
    totalReview: selectedProduct?.reviewData?.totalReviews || 0,
    averageRating: selectedProduct?.averageRating || 0,
    images: [
      selectedProduct?.image,
      selectedProduct?.image2,
      selectedProduct?.image3,
      selectedProduct?.image4,
    ].map((img) => img || defaultImage),
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  // Render Star Rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <StarHalf key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        );
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="w-full mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative aspect-square">
              <img
                src={product.images[currentImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-lg hover:bg-white">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-lg hover:bg-white">
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
                  <img
                    src={product.images[index]}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-blue-600 hover:underline cursor-pointer">by {product.brand}</p>

            {/* Ratings */}
            <div className="flex items-center">
              {renderStars(product.averageRating)}
              <p className="ml-2 text-gray-600">{product.averageRating} out of 5</p>
            </div>
            <p className="text-gray-500">{product.totalReview} global ratings</p>

            {/* Price Section */}
            <div className="text-3xl font-bold">{product.price}</div>
            {product.originalPrice !== "N/A" && (
              <span className="text-gray-500 line-through">{product.originalPrice}</span>
            )}

                        {/* Product Details */}
                        <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Product Details:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li className="font-normal">
                  <span className="font-bold">Product Dimensions : </span>{" "}
                  {product.length} x {product.width} x {product.height} x{" "}
                  {product.unit} ; {product.value} {product.unit1}
                </li>
                <li>
                  <span className="font-bold">Date First Available :</span>{" "}
                  {product.dateFirstAvailable}
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Manufacturer :</span>{" "}
                </li>
                <li>
                  <span className="font-bold">ASIN :</span>
                </li>
                <li>
                  <span className="font-bold">Item model number :</span>
                </li>
                <li>
                  <span className="font-bold">Country of Origin :</span>{" "}
                </li>
                <li>
                  <span className="font-bold">Department :</span>
                </li>
                <li>
                  <span className="font-bold">Packer :</span>
                </li>
                <li>
                  <span className="font-bold">Importer :</span>
                </li>
                <li>
                  <span className="font-bold">Item Weigth :</span>
                </li>
                <li>
                  <span className="font-bold">Item Dimensions LxWxH :</span>
                </li>
                <li>
                  <span className="font-bold">Generic Name :</span>
                </li>
              </ul>
            </div>
            {/* Add to Cart / Wishlist */}
            <div className="flex flex-col gap-2">
              <button className="w-full py-3 px-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg flex items-center justify-center font-medium transition-colors">
                <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
              </button>
              <button className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-black rounded-lg flex items-center justify-center font-medium transition-colors" onClick={() => setIsWishlisted(!isWishlisted)}>
                <Heart className={`w-5 h-5 mr-2 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                {isWishlisted ? "Wishlisted" : "Add to Wish List"}
              </button>
            </div>
          </div>
        </div>
        <section>
        hello
      </section>
      </div>
      
    </div>
  );
};

export default ProductPage;
