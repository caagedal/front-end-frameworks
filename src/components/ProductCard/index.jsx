import { Link } from "react-router-dom";

export function ProductCard({ product }) {
    const hasDiscount = product.discountedPrice && product.discountedPrice < product.price;

    return (
        <Link
            to={`/products/${product.id}`}
            className="relative w-60 flex flex-col border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-300"
        >
            {/* SaleTag */}
            {hasDiscount && (
                <span className="absolute top-2 left-2 bg-accent text-white text-xs px-2 py-1 rounded-md shadow">
                    Sale
                </span>
            )}

            {/* Product Image */}
            <div className="bg-gray-100 rounded-t-2xl overflow-hidden">
                <img
                    src={product.image.url}
                    alt={product.title}
                    className="w-full h-full object-cover aspect-square"
                />
            </div>

            {/* Productdetails */}
            <div className="p-4 bg-white rounded-b-2xl">
                <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>
                <div className="flex items-center gap-2 mt-2">
                    {hasDiscount ? (
                        <>
                            <p className="text-lg font-bold text-green-600">
                                ${product.discountedPrice}
                            </p>
                            <p className="line-through text-gray-500">${product.price}</p>
                        </>
                    ) : (
                        <p className="text-lg font-bold text-gray-800">${product.price}</p>
                    )}
                </div>
            </div>
        </Link>
    );
}
