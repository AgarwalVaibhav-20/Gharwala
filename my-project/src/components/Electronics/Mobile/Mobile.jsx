import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
function Mobile() {
    const data=[
        {
            image:"https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
            name:"Mobiles",
            company:"Apple iPhone 15 (Blue, 128 GB)",
            rate:"₹64,999.00"
        },
        {
            image:"https://m.media-amazon.com/images/I/71oWrfCTiqL._SX522_.jpg",
            name:"Mobiles",
            company:"iPhone 16 128 Plus GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Ultrmarine",
            rate:"₹83,400.00"
        },
        {
            image:"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX522_.jpg",
            name:"Mobiles",
            company:"Apple iPhone 14 (128 GB) - Blue",
            rate:"₹54,900.00"
        },
        {
            image:"https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg",
            name:"Mobiles",
            company:"Apple iPhone 15 (128 GB) - Black",
            rate:"₹61,490.00"
        },
        {
            image:"https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
            name:"Mobiles",
            company:"Apple iPhone 13 (256GB) - Blue",
            rate:"₹54,999.00"
        },
        {
            image:"https://m.media-amazon.com/images/I/71nvkHnPpZL._SX679_.jpg",
            name:"Mobiles",
            company:"Apple iPhone 15 (128 GB) - Green",
            rate:"₹61,999.00"
        },
    ]

    const [scrollingPosition, setScrollingPosition] = useState(0);
    const scroll = (direction) => {
      const container = document.getElementById("card-container2");
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
    <div>
      <div className="relative w-full max-w-full mx-auto p-4">
      <h1 className="text-5xl mt-5 mb-5  max-sm:text-2xl font-light">Mobiles</h1>
       <div
         id="card-container2"
         className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar"
         style={{
           scrollbarWidth: "none",
           msOverflowStyle: "none",
         }}
       >
         {data.map((item, index) => (
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
                 {item.company.slice(0, 28)}...
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
    </div>
  )
}

export default Mobile
