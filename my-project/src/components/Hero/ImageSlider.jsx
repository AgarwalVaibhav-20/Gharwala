import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/images/pexels-minervastudio-2897883.jpg";
import img2 from '../assets/images/Electronics.jpg';
import img3 from '../assets/images/Watches.jpg'
const images = [
  { id: 1, src: img1, alt: "Sale on Electronics"  , data:"Latest Fashion Trends"},
  { id: 2, src: img2, alt: "Latest Fashion Trends"  , data:"Sale on Electronics Accesories"},
  { id: 3, src: img3, alt: "New Collection of Watches" ,data:"The latest collection of Watches"},
];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden"
    >
      {images.map((image) => (
        <SwiperSlide key={image.id} className="relative">
          {/* Text Overlay */}
          <h2 className="absolute top-5 sm:text-center sm:-py-4 left-5 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg text-3xl md:text-2xl">
          {image.data}
          </h2>

          {/* Image */}
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
