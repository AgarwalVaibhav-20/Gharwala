import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { IoLogInOutline } from "react-icons/io5";
import logo from "../assets/images/Perfect.png";
import { Link } from "react-router-dom";
import { User, Package, Heart, ArrowLeft } from "lucide-react";
function Navbar() {
  // const [openDropdown, setOpenDropdown] = useState(null);
  const [showCategories, setShowCategories] = useState(false);
  // const toggleDropdown = (category) => {
  //   setOpenDropdown(openDropdown === category ? null : category);
  // };

  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState({ city: "", country: "" });

  async function requestUserLocation() {
    const apiUrl =
      "https://ipgeolocation.abstractapi.com/v1/?api_key=8bb5fcec8b2549f5a4e5be0dbc3881af"; // Replace with your actual API key

    try {
      // Fetch location from Abstract API
      const apiResponse = await fetch(apiUrl);
      const apiData = await apiResponse.json();
      console.log("IP-based Location:", apiData);

      // Set location from API as a fallback
      setLocation({
        city: apiData.city,
        country: apiData.country,
        region: apiData.region,
      });

      // Check if Geolocation is supported/enabled
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          // Success callback
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(
              `Your Location:\nLatitude: ${latitude}\nLongitude: ${longitude}`
            );
          },
          // Error callback
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.log(
                  "Permission denied. Using IP-based geolocation instead."
                );
                break;
              case error.POSITION_UNAVAILABLE:
              case error.TIMEOUT:
              default:
                console.log(
                  "Unable to retrieve precise location. Using IP-based geolocation instead."
                );
                break;
            }
          }
        );
      } else {
        alert(
          "Geolocation is not supported by your browser. Using IP-based geolocation."
        );
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      alert("Unable to retrieve location data.");
    }
  }

  // Toggle Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="border w-full bg-white">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="">
              {" "}
              <img className="h-[50px]" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            <input
              autoFocus
              type="text"
              className="border w-full sm:w-[300px] lg:w-[500px] px-4 py-2 outline-none rounded-l-lg"
              placeholder="Search here..."
            />
            <button className="bg-[#003566] text-white px-3 py-2 rounded-r-lg">
              <IoSearch size={27} />
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <FaRegUser size={25} />
            <Link to="/cart" className="cursor-pointer">
              {" "}
              <LuShoppingBag size={29} />
            </Link>
            <div
              className="cursor-pointer flex space-x-1"
              onClick={requestUserLocation}
            >
              <SlLocationPin size={27} className="font-extrabold" />
              <span>{location.city || "Your Location"}</span>
              <span>,</span>
              <span>{location.region}</span>
            </div>
            <Link
              to="/signin"
              className="border py-2 px-4 rounded-lg bg-gray-800 text-white"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden cursor-pointer">
            {!menuOpen ? (
              <RiMenu3Fill size={34} onClick={toggleMenu} />
            ) : (
              <RiCloseLine size={34} onClick={toggleMenu} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white w-full border-t relative z-10">
            <ul className="flex flex-col items-start outline-none bg-white w-full absolute">
              <li className="flex space-x-2 items-center w-full py-4 px-3 border-b">
                <User size={28} /> <span>Hello User</span>
              </li>
              <div className="w-full">
                {showCategories ? (
                  // Category List
                  <ul className="w-full bg-white border shadow-md rounded-lg">
                    <li
                      className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100"
                      onClick={() => setShowCategories(false)}
                    >
                      <div className="flex space-x-1">
                        <ArrowLeft />
                        <span>Back</span>
                      </div>
                    </li>
                    <li className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
                      <Link to="/electronics">
                        {" "}
                        Mobiles , Computers , Tablets , Audio etc..
                      </Link>
                    </li>
                    <li className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
                      {" "}
                      TV's , Appliances , Electronics
                    </li>
                    <li className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
                      Mens's Fashion
                    </li>
                    <li className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
                      Women's Fashon
                    </li>
                    <hr />
                    <li className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
                      Home , Kitchen{" "}
                    </li>
                    <li className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
                      Beauty , Health
                    </li>
                    <li className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
                      Sports . Fitness , Bags , Luggage
                    </li>
                    <li className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
                      Books
                    </li>
                  </ul>
                ) : (
                  // Main Category Item
                  <li
                    className="flex items-center w-full py-4 px-3 border-b cursor-pointer"
                    onClick={() => setShowCategories(true)}
                  >
                    <div className="space-x-2 flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="-rotate-90 transition-transform duration-300"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <span>Category</span>
                    </div>
                  </li>
                )}
              </div>
              <li className="flex items-center w-full border-b py-4 px-3  hover:bg-red-400">
                <FaRegUser size={25} className="mr-2" />
                <span>Profile</span>
              </li>
              <li className="flex items-center w-full py-4 px-3 border-b">
                <Link
                  to="/cart"
                  className="cursor-pointer flex items-center space-x-2"
                  onClick={toggleMenu}
                >
                  {" "}
                  <LuShoppingBag size={29} /> <span>Cart</span>
                </Link>
              </li>
              <li className="flex space-x-2 items-center w-full py-4 px-3 border-b">
                {" "}
                <Package size={27} />
                <span>My Orders</span>{" "}
              </li>

              <li className="flex space-x-2 items-center w-full py-4 px-3 border-b">
                {" "}
                <Heart size={27} /> <span>Whislist</span>
              </li>

              <li className="w-full py-4 px-3 text-lg border-b-[1px]">
                <Link
                  to="/signin"
                  className="flex items-center space-x-2 "
                  onClick={toggleMenu}
                >
                  <IoLogInOutline size={26} />
                  <span>Login</span>
                </Link>
              </li>
              <li className="w-full py-4 px-3 text-lg border-b-[1px]">
                <Link
                  to=""
                  className="flex items-center space-x-2 "
                  onClick={toggleMenu}
                >
                  <IoLogInOutline size={26} />
                  <span>Logout</span>
                </Link>
              </li>
              <li className="w-full py-4 px-3 text-lg border-b-[1px]">
                <Link
                  to="/signup"
                  className="flex items-center space-x-2 "
                  onClick={toggleMenu}
                >
                  Signup
                </Link>
              </li>

              <li className="flex space-x-2 items-center w-full py-4 px-3 border-b">
                <span>Help Center</span>
              </li>
              <li className="flex space-x-2 items-center w-full py-4 px-3 border-b">
                Legal Policies
              </li>

              <li className="flex items-center w-full py-4 px-3 border-b">
                <button
                  className="cursor-pointer flex space-x-1 items-center"
                  onClick={requestUserLocation}
                >
                  <SlLocationPin size={26} className="font-extrabold" />
                  <span>{location?.city || "Your Location"}</span>
                  {location?.region && <span>, {location.region}</span>}
                </button>
              </li>
            </ul>
          </div>
        )}
        {/** Second navbar*/}
        <div className="flex justify-center items-center w-full">
          <header className="flex justify-center items-center w-full max-lg:hidden">
            <section className="flex p-4 justify-center items-center border w-full">
              <ul className="flex space-x-10 relative">
                <li className="text-xl relative">
                  <Link to="/electronics" className="focus:outline-none">
                    Electronics
                  </Link>
                </li>
                <li className="text-xl">
                  <Link href="#">Sports</Link>
                </li>
                <li className="text-xl">
                  <Link href="#">Fashion</Link>
                </li>
                <li className="text-xl">
                  <Link to="/shoes">Shoes</Link>
                </li>
                <li className="text-xl">
                  <Link to="/headset">Headset</Link>
                </li>
              </ul>
            </section>
          </header>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

{
  /**
  {openDropdown === "electronics" && (
                    <ul className="absolute left-[-80px] mt-4 max-sm:left-[-30px] bg-white shadow-lg border rounded w-60 text-sm cursor-pointer">
                      <li className="p-2 hover:bg-gray-200">Fridge</li>
                      <li className="p-2 hover:bg-gray-200">Accessories</li>
                      <li className="p-2 hover:bg-gray-200">
                        Cameras & Photography
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        Mobiles & Accessories
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        Telephones & Accessories
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        Home Theater, TV & Video
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        Electronic Equipment Warranties
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        eBook Readers & Accessories
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        Wearable Technology
                      </li>
                      <li className="p-2 hover:bg-gray-200">Tablets</li>
                      <li className="p-2 hover:bg-gray-200">
                        Radio Communication
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        Portable Media Players
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        Car & Vehicle Electronics
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        Computers & Accessories
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        GPS & Accessories
                      </li>
                      <li className="p-2 hover:bg-gray-200">Home Audio</li>
                      <li className="p-2 hover:bg-gray-200">
                        Headphones, Earbuds & Accessories
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        General Purpose Batteries & Battery Chargers
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        Power Accessories
                      </li>
                    </ul>
                  )} */
}
