import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function LaptopAccessories() {
    const LaptopData = [
        {
          image:
            "https://m.media-amazon.com/images/I/71keMYO9t4L._SX679_.jpg",
          name: "Keyboards for Laptops",
          company: "Cosmic Byte CB-GK-25 Pandora TKL Mechanical Keyboard Upgraded with Swappable Outemu Blue Switches and Rainbow LED (Black/Grey)",
          rate: "₹1,699.00",
        },
        {
          image:"https://m.media-amazon.com/images/I/61egMfcDWlL._SX679_.jpg",
          name:"Laptop Bags",
          company:"FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys Girls",
          rate:"₹599.00",
        },
        {
          image:"https://m.media-amazon.com/images/I/71CSXmgJsFL._SX425_.jpg",
          name:"Lapdesk",
          company:"Callas Multi-Purpose Laptop Table with | Cup Holder | Drawer | Mac Holder | Study Table/Bed Table/Breakfast Table/Foldable and Portable Wooden Table (CA-39-Black)",
          rate:"₹419.00",
        },
        {
          image:"https://m.media-amazon.com/images/I/71Zf9uUp+GL._SX522_.jpg",
          name:"Notebook Computer Stand",
          company:"STRIFF Adjustable Laptop Tabletop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand (Black)",
          rate:"₹249.00",
        },
        {
            image:"https://m.media-amazon.com/images/I/91g-AXM4tbL._SX522_.jpg",
            name:"Skin Sticker",
            company:"11 Strokes Set of 100 Motivational Stickers, Study Room Decoration Items Quotes Wall Sticker, Laptop Stickers Aesthetic Phone Stickers Positive Quotes Stickers, Motivational Stickers for Students",
            rate:"₹159.00"
        },{
            image:"https://m.media-amazon.com/images/I/71JnvmN34cL._SX679_.jpg",
            name:"Screen Filter",
            company:"PxIn 14 Inch Privacy Screen Filter - No Eye Strain | Anti Blue Light + Anti Glare | No Dry Eyes | Privacy Screen Protector | Eurofins Lab Tested",
            rate:"₹1,697.00"
        }
      ];

   const [scrollingPosition, setScrollingPosition] = useState(0);
     const scroll = (direction) => {
       const container = document.getElementById("card-container_2");
       if (container) {
         const scrollAmount = 300;
         const newPosition =
           direction === "left"
             ? Math.max(scrollingPosition - scrollAmount, 0)
             : Math.min(
                 scrollingPosition + scrollAmount,
                 container.scrollWidth - container.clientWidth
               );
   
         container.scrollTo({
           left: newPosition,
           behavior: "smooth",
         });
         setScrollingPosition(newPosition);
       }
     };
   
  return (
    <div className="relative w-full max-w-full mx-auto p-4">
        <h1 className="text-5xl max-sm:text-2xl mt-5 mb-5 font-light">
            Laptop Accessories
        </h1>
    <div
      id="card-container_2"
      className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {LaptopData.map((item, index) => (
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
              {item.company.slice(0, 48)}...
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
}

export default LaptopAccessories;
