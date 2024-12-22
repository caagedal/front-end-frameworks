import CartIcon from "../CartIcon";
import { useCart } from "../CartContext";
import { NavLink } from "react-router-dom";

export function Header() {
    const {cartItems} = useCart();

    const itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);

    return (
        <header className="bg-primary text-secondary">
            <nav className="px-2">
                <NavLink to = "/"><p className="logo text-3xl">The Nest</p></NavLink>
                <div className="nav-items">
                    <NavLink to = "/contact">Contact</NavLink>
                    <CartIcon itemCount={itemCount}/>
                </div>
            </nav>            
        </header>
    );
}