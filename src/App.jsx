import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import { ContactPage } from "./pages/ContactPage";

export default function App(){

    return(
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element= {<Home />}/>
                    <Route path="/products/:id" element={<ProductPage/>} />
                    <Route path="/checkout" element={<CheckoutPage/>} />
                    <Route path="/checkout-success" element={<CheckoutSuccessPage/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                </Route>
            </Routes>
        </div>
    );
}







