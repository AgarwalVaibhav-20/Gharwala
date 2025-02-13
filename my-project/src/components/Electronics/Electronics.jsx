import LaptopAccessories from "./Accessories/LaptopAccessories/LaptopAccessories"
import MobileAccessories from "./Accessories/MobilleAccessories/MobileAccessories"
import Laptop from "./Laptops/Laptop"
import Mobile from "./Mobile/Mobile"

function Electronics() {
  return (
    <div>
        <Laptop/>
        <LaptopAccessories/>
        <Mobile/>
        <MobileAccessories/>

    </div>
  )
}

export default Electronics
