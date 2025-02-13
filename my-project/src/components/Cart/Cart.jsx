import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product Name",
      description: "Short description",
      price: 49.99,
      quantity: 1,
      image: "https://i.pcmag.com/imagery/roundups/02wkkhUM4TbL4UyW7EfdF0E-60.fit_lim.size_1050x.jpg",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const shipping = 10.0;
  const subtotal = calculateSubtotal();
  const total = subtotal + shipping;

  return (
    <div className="w-full ">
      <section className="flex justify-center items-center">
        <div className="container mx-auto p-5">
          <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Cart Items Section */}
            <div className="w-full lg:w-3/5 p-6 border">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Shopping Cart
              </h2>
              <div className="space-y-4">
                {cartItems.length === 0 ? (
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-center text-gray-500">
                        Your cart is empty
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  cartItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 rounded-lg bg-cover bg-center object-cover"
                          />
                          <div className="ml-4 flex-1">
                            <h3 className="text-lg font-semibold">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-lg font-semibold text-gray-800">
                                ${item.price.toFixed(2)}
                              </span>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(
                                    item.id,
                                    parseInt(e.target.value)
                                  )
                                }
                                className="w-16 p-2 border rounded-md text-center"
                              />
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-4 p-2 text-red-500 hover:text-white hover:bg-red-500 rounded-md transition-colors duration-200 flex items-center gap-2"
                          >
                            <Trash2 size={20} />
                            <span className="hidden sm:inline">Remove</span>
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>

            {/* Cart Summary Section */}
            <div className="w-full lg:w-2/5 p-6 bg-gray-50 border-l">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Cart Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Items:</span>
                      <span>
                        {cartItems.reduce(
                          (sum, item) => sum + item.quantity,
                          0
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <hr className="my-4 border-gray-200" />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    className="w-full mt-6 bg-[#14213d] text-white font-bold py-3 rounded-lg shadow hover:bg-[#2e5197] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
