import { Link } from "react-router-dom";
import { BsFillPatchCheckFill } from "react-icons/bs";

export default function CheckoutSuccessPage() {
    return (
        <div className="flex flex-col items-center justify-center text-center my-10">
            {/* Success Icon */}
            <div className="mb-6 text-green-500">
                <BsFillPatchCheckFill className="w-16 h-16" />
            </div>
            
            {/* Success Message */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Success!</h1>
            <p className="text-lg text-gray-600 mb-6">
                Thank you for shopping with us! Your order has been successfully placed.
            </p>
            
            {/* Continue Shopping Link */}
            <Link
                to="/"
                className="px-6 py-3 bg-accent text-secondary rounded-lg hover:bg-accent-dark transition duration-300"
            >
                Continue Shopping
            </Link>
        </div>
    );
}
