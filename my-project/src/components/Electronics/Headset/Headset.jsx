import { HeadSetData } from "./HeadsetData";

function Headset() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-100 cursor-pointer  ">
      {HeadSetData.map((headset, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 "
        >
          {/* Product Image */}
          <div className="w-full h-[250px] flex justify-center items-center bg-white p-4 rounded-2xl">
            <img
              className="max-h-full max-w-full object-contain"
              src={headset.image}
              alt={headset.company}
            />
          </div>

          {/* Product Details */}
          <div className="p-4 border-t ">
            <h5 className="text-base font-semibold text-gray-900 w-full line-clamp-none">
              {headset.company.slice(0, 50)}...
            </h5>

            <div className="flex items-center space-x-2 mt-2">
              <p className="text-xl font-bold text-black">₹{headset.price}</p>
              {headset.percentage && (
                <p className="text-sm text-red-600 font-medium">
                  {headset.percentage} OFF
                </p>
              )}
            </div>
            <p className="text-sm text-gray-500 line-through">
              ₹{headset.preprice}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Headset;
