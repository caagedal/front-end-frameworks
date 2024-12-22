import { Link } from "react-router-dom";
import { BsFillPatchCheckFill } from "react-icons/bs";

export default function CheckoutSuccessPage(){

    return(
        <div>
            <BsFillPatchCheckFill />
            <h1>Success!</h1>
            <p>Thank you for shopping with us!</p>
            <Link to="/">Continue shopping</Link>
        </div>
    );
}