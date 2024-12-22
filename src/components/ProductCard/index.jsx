import { Link } from "react-router-dom";

export function ProductCard({product}){

    const hasDiscount = product.discountedPrice && product.discountedPrice < product.price;

    return (
        <Link to={`/products/${product.id}`} className="relative w-60 flex flex-col border rounded-2xl hover:shadow-lg">
            {hasDiscount && (
                <span className="absolute top-2 left-2 bg-accent text-secondary text-xs px-2" >Sale</span>
            )}
            <div>
                <img 
                src={product.image.url}
                alt = {product.title}
                className="w-full h-full object-cover aspect-square rounded-t-2xl"/>
            </div>
            <div className="p-2">
                <h2 className="text-xl"> {product.title} </h2>
                <div className="flex gap-2">
                    {hasDiscount ? (
                        <>
                            <p className="font-bold text-lg text-success">${product.discountedPrice} </p>
                            <p className="line-through">${product.price}</p>
                        </>
                    ) : (
                        <p className="font-bold text-lg">${product.price}</p>
                    )}
                </div>
                {/* <Link to={`/products/${product.id}`} className="bg-accent text-secondary p-2 rounded-xl">View Product</Link>  */}
            </div>
        </Link>
    );

}