import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

export default function CartIcon({itemCount}) {

    const navigate = useNavigate();

    function handleCart(){
        navigate("/checkout");
    }

    return (
        <div className="cursor-pointer relative" onClick = {handleCart}>
            <FaCartShopping className="cart-icon" />
            {itemCount > 0 && (
                <span className="absolute bottom-2 left-3 rounded-full bg-warning text-white text-sm justify-center items-center px-2">
                    {itemCount}
                </span>
            )}
        </div>
    );
}