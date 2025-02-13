import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MobileAccessories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Sample card data
  const dataProduct = [
    {
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721992677/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/308673_jxaozj.png",
      name: "Headset",
      company:
        "HP H300 99Y17AA Bluetooth Headset with Mic (Active Noise Cancellation, Over Ear, Black)",
      rate: "₹2,500.00",
    },
    {
      image:
        "https://www.nikkar.in/cdn/shop/files/Screenshot2024-07-13105326.png?v=1720848309&width=1100",
      name: "Selfie Stick",
      company:
        "Single-Axis Stabilizer Bracket MINI Selfie Stick Tripod - Portable Handheld Gimbal for Smartphones",
      rate: "₹800.00",
    },
    {
      image:
        "https://www.adcomhitech.com/resize.php?file=uploads/product/783747337135.png&width=800&height=&quality=90&action=resize",
      name: "Mobile Camera Lens",
      company:
        "Adcom 8x Pro Monocular Telephoto Zoom Mobile Phone Camera Lens - Compatible with All iPhone & Android Smartphones (Black)",
      rate: "₹4,999.00",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/video-glasses/t/9/p/mobile-screen-expanders-screen-magnifier-clear-fresnel-trx1160-original-imaghkrpdghsz6dg.jpeg?q=70&crop=false",
      name: "Screen Phone Expander",
      company:
        "JANGI 18 inch Screen Magnifier Phone HD Magnifing Enlarger for Movies Screen Expander Phone",
      rate: "₹474.00",
    },
    {
      image: "https://m.media-amazon.com/images/I/61kONYDgWpL._SX342_.jpg",
      name: "Micro USB Cables",
      company:
        "Maeline Micro USB Cable USB 2.0 A-Male to Micro B Cable Fast Charging Cord High Speed USB Durable Android Charger Cable (1 Pack, 3ft)",
      rate: "₹2739.00",
    },
    {
      image: "https://m.media-amazon.com/images/I/51XyeoWRAdL._SX522_.jpg",
      name: "Mobile Holder",
      company:
        "Portronics Clamp M Car Mobile Holder with 360° Rotational, Strong Suction Cup, One Click Release Button Compatible with 4 to 6 inch Devices(Black)",
      rate: "₹289.00",
    },
  ];

  const scroll = (direction) => {
    const container = document.getElementById("card-container");
    if (container) {
      const scrollAmount = 300;
      const newPosition =
        direction === "left"
          ? Math.max(scrollPosition - scrollAmount, 0)
          : Math.min(
              scrollPosition + scrollAmount,
              container.scrollWidth - container.clientWidth
            );

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="relative w-full max-w-full mx-auto p-4">
      <h1 className="text-5xl max-sm:text-2xl mt-5 mb-5 font-light">
        Mobile Accesories
      </h1>
      <div
        id="card-container"
        className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {dataProduct.map((item, index) => (
          <div
            key={index}
            className="w-[180px] sm:w-[220px] md:w-[250px] h-[400px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex-shrink-0"
          >
            <a href="#" className="block w-full h-[200px]">
              <img
                className="w-full h-full object-cover rounded-t-lg"
                src={item.image}
                alt={item.name}
              />
            </a>
            <div className="p-3 flex flex-col justify-between h-[200px]">
              <a href="#">
                <h5 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </a>
              <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm">
                {item.company.slice(0, 80)}...
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {item.rate}
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MobileAccessories;