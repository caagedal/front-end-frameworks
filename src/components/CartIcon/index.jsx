import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

export default function CartIcon({ itemCount }) {
    const navigate = useNavigate();

    function handleCart() {
        navigate("/checkout");
    }

    return (
        <div className="relative cursor-pointer" onClick={handleCart}>
            {/* cartIcon */}
            <FaCartShopping className="w-6 h-6 text-gray-800 hover:text-accent transition duration-300" />

            {/* Item count */}
            {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold">
                    {itemCount}
                </span>
            )}
        </div>
    );
}
