import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { FaTrash } from "react-icons/fa6";

export default function CheckoutPage(){

    const {cartItems, removeItemFromCart, clearCart, getTotal} = useCart();

    console.log("cartItems:", cartItems);

    const navigate = useNavigate();

    function handleCheckout(){
        clearCart();
        navigate("/checkout-success");
    }

    function continueShoping(){
        navigate("/");
    }

    const total = getTotal();

    return(
        <div className="flex flex-col">
            <h1>Checkout</h1>
            
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <img src={item.image.url}
                        alt={item.title} className="w-32"/>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                        <p>${item.discountedPrice}</p>
                        <p>{item.quantity} </p>
                        <div onClick={() => removeItemFromCart(item.id)}>
                            <FaTrash />
                        </div>
                    </li>
                ))}
            </ul>

            <div>
                {total == 0 ? (
                                   
                <div>
                <p>No items in Cart</p>
                <button onClick={continueShoping}>Back to shopping</button>
                </div>
                ) : (
                    <div>                
                    <h2>Total: ${total.toFixed(2)}</h2>
                    <div>
                        <button onClick={continueShoping}>Continue shopping</button>
                        <button onClick={handleCheckout}>Checkout!</button>
                    </div>  
                    <button onClick = {clearCart}>Clear cart</button>
                </div> 
                )}                
            </div>

        </div>
    );
}