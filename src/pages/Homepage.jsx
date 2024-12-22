import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Home(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://v2.api.noroff.dev/online-shop");
            const data = await response.json();
            console.log("data ", data);
            setProducts(data.data);
        }
        getData();

    }, []);
    return (
        <div>
            <SearchBar products={products} />
            <div className="flex flex-wrap gap-5 justify-center">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}