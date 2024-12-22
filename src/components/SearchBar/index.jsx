import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({products}){
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const input = e.target.value
        setSearchTerm(input);

        if (input.trim() === "") {
            setFilteredProducts([]);
            return;
        }

        const searchFilter = products.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase()),
        );
        setFilteredProducts(searchFilter);
    };

    function handleRedirect(productID){
        navigate(`/product/${productID}`);
    }

    return (
        <div className="relative flex flex-row-reverse px-2 py-8">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="w-full p-3 rounded-xl border-2 border-primary"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
                id="search"
            />
            {filteredProducts.length > 0 && (
                <ul className="absolute top-full inset-x-0 bg-white border-[1px] z-10 p-0 m-0">
                    {filteredProducts.map((product) => (
                        <li
                            className="p-2.5 cursor-pointer border-b-[1px] botder-contrast flex gap-3 items-end hover:bg-primary"
                            key={product.id}
                            onClick={() => handleRedirect(product.id)}
                        >
                            <img
                                src={product.image.url}
                                alt={product.image.alt}
                                className="size-20 object-cover"
                            />
                            <span>{product.title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

}