import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { FaTrash } from "react-icons/fa6";

export default function CheckoutPage() {
    const { cartItems, removeItemFromCart, clearCart, getTotal } = useCart();
    const navigate = useNavigate();

    function handleCheckout() {
        clearCart();
        navigate("/checkout-success");
    }

    function continueShopping() {
        navigate("/");
    }

    const total = getTotal();

    // Total savings
    const totalSavings = cartItems.reduce((savings, item) => {
        if (item.discountedPrice < item.price) {
            return savings + (item.price - item.discountedPrice) * item.quantity;
        }
        return savings;
    }, 0);

    return (
        <div className="flex flex-col gap-6 p-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center">Checkout</h1>

            {/* Cart Items */}
            <ul className="flex flex-col gap-4">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
                        >
                            <img
                                src={item.image.url}
                                alt={item.title}
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                                <h2 className="text-lg font-bold text-gray-700">{item.title}</h2>
                                {item.discountedPrice < item.price ? (
                                    <>
                                        <p className="text-gray-500">
                                            Original Price:{" "}
                                            <span className="line-through text-gray-400">
                                                ${item.price.toFixed(2)}
                                            </span>
                                        </p>
                                        <p className="text-gray-500">
                                            Discounted Price:{" "}
                                            <span className="font-medium text-green-600">
                                                ${item.discountedPrice.toFixed(2)}
                                            </span>
                                        </p>
                                        <p className="text-green-600 text-sm">
                                            You save: $
                                            {((item.price - item.discountedPrice) * item.quantity).toFixed(2)}
                                        </p>
                                    </>
                                ) : (
                                    <p className="text-gray-500">
                                        Price:{" "}
                                        <span className="font-medium">${item.price.toFixed(2)}</span>
                                    </p>
                                )}
                                <p className="text-gray-500">Quantity: {item.quantity}</p>
                            </div>
                            <button
                                onClick={() => removeItemFromCart(item.id)}
                                className="text-secondary hover:text-red-700 transition"
                            >
                                <FaTrash className="w-5 h-5" />
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500 italic">No items in cart</p>
                )}
            </ul>

            {/* Total and Actions */}
            {cartItems.length > 0 && (
                <div className="mt-4 bg-white p-4 rounded-lg shadow-md flex flex-col items-end">
                    <h2 className="text-xl font-bold text-gray-700">
                        Total: <span className="text-green-600">${total.toFixed(2)}</span>
                    </h2>
                    {totalSavings > 0 && (
                        <p className="text-sm text-green-600 font-medium mt-1">
                            You save a total of: ${totalSavings.toFixed(2)}
                        </p>
                    )}
                    <div className="flex justify-between gap-4 mt-4">
                        <button
                            onClick={continueShopping}
                            className="px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-gray-300 transition"
                        >
                            Continue Shopping
                        </button>
                        <button
                            onClick={handleCheckout}
                            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition"
                        >
                            Checkout!
                        </button>
                    </div>
                    <button
                        onClick={clearCart}
                        className="mt-4 px-4 py-2 text-warning font-bold text-sm"
                    >
                        X Clear Cart
                    </button>
                </div>
            )}

            {/* Empty Cart Message */}
            {cartItems.length === 0 && (
                <div className="text-center mt-10">
                    <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
                    <button
                        onClick={continueShopping}
                        className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition"
                    >
                        Back to Shopping
                    </button>
                </div>
            )}
        </div>
    );
}
