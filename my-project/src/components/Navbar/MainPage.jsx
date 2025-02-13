import watch from "../assets/images/watch.png";
import mobile from "../assets/images/mobile.png";
import tv from "../assets/images/TV.png";
import washingMachine from "../assets/images/washingmachine.png";
import laptop from "../assets/images/laptop.png";
import water from "../assets/images/pureit.png";
import elephant from "../assets/images/elephant.jpg";
import face from "../assets/images/faces.jpg";
import lamp from "../assets/images/lamp.jpg";
import phptoframe from "../assets/images/wall.jpg";
import lamp2 from "../assets/images/lapm2.jpg";
import deer from "../assets/images/deer.jpg";
import bat from "../assets/images/Bat.jpg";
import bat2 from "../assets/images/bat2.jpg";
import wicket from "../assets/images/wicket.jpg";
import ball from "../assets/images/ball.jpg";
import ball2 from "../assets/images/ball2.jpg";
import helemt from '../assets/images/helmet.jpg'
import fashion1 from '../assets/images/fashion1.png'
import fashion2 from '../assets/images/fashion2.jpg'
import fashion3 from '../assets/images/fashion3.avif'
import fashion4 from '../assets/images/fashion4.jpg'
import fashion5 from '../assets/images/fashion5.jpg'
import fashion6 from '../assets/images/fashion6.jpg';


const products = [
  { src: watch, alt: "Smart Watch" },
  { src: mobile, alt: "Mobile Phone" },
  { src: tv, alt: "Smart TV" },
  { src: washingMachine, alt: "Washing Machine" },
  { src: laptop, alt: "Laptop" },
  { src: water, alt: "Water Purifier" },
];

const product2 = [
  { src: face, alt: "home decor" },
  { src: elephant, alt: "home docor" },
  { src: lamp, alt: "home docor" },
  { src: lamp2, alt: "home docor" },
  { src: phptoframe, alt: "home docor" },
  { src: deer, alt: "Water Purifier" },
];

const product3 = [
  { src: bat, alt: "bat" },
  { src: bat2, alt: "bat" },
  { src: wicket, alt: "wicket" },
  { src: ball, alt: "ball" },
  { src: ball2, alt: "ball" },
  {src:helemt , alt:"helmet"}
];

const products4 = [
  {src:fashion1 , alt:'Men cloths'},
  {src:fashion2 , alt:'Men cloths'},
  {src:fashion3 , alt:'Men cloths'},
  {src:fashion4 , alt:'Men cloths'},
  {src:fashion5 , alt:'Men cloths'},
  {src:fashion6 , alt:'Men'}
]
function MainPage() {
  return (
    <>
      <div className="p-5">
        <section>
          <h1 className="text-[30px]  mb-5 max-sm:text-center">Electronics</h1>
          <div className="flex flex-wrap justify-center items-center gap-7">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex justify-center items-center border p-5 rounded-lg shadow-lg"
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="h-[200px] w-[180px] object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="p-5">
        <section>
          <h1 className="text-[30px]  mb-5 max-sm:text-center">
            Home Decor & Furnishings
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-7">
            {product2.map((product, index) => (
              <div
                key={index}
                className="flex justify-center items-center border p-5 rounded-lg shadow-lg"
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="h-[200px] w-[180px] object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* {Sports} */}
      <div className="p-5">
        <section>
          <h1 className="text-[30px]  mb-5 max-sm:text-center">Sports</h1>
          <div className="flex flex-wrap justify-center items-center gap-7">
            {product3.map((product, index) => (
              <div
                key={index}
                className="flex justify-center items-center border p-5 rounded-lg shadow-lg"
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="h-[200px] w-[180px] object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
{/* {"Cloths"} */}

<div className="p-5">
        <section>
          <h1 className="text-[30px]  mb-5 max-sm:text-center">Electronics</h1>
          <div className="flex flex-wrap justify-center items-center gap-7">
            {products4.map((product, index) => (
              <div
                key={index}
                className="flex justify-center items-center border p-5 rounded-lg shadow-lg"
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="h-[200px] w-[180px] object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default MainPage;
