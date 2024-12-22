import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../components/CartContext";
import CustomerReview from "../components/ReviewCard";

export default function ProductPage() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);
    const { id } = useParams();

    const { addToCart } = useCart();

    useEffect(() => {
        async function getData(url) {
            try {
                setError(false);
                setIsLoading(true);
                const response = await fetch(url);
                const json = await response.json();

                setData(json);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getData(`https://v2.api.noroff.dev/online-shop/${id}`);
    }, [id]);

    if (isLoading || !data) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg text-gray-500 animate-pulse">Loading...</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-warning font-bold text-lg">Error loading product!</p>
            </div>
        );
    }

    const discountSave =
        data.data.discountedPrice && data.data.price
            ? (data.data.price - data.data.discountedPrice).toFixed(2)
            : null;

    return (
        <div className="flex flex-col gap-10 py-10">
            <div className="flex flex-col gap-4 md:flex-row md:w-2/3 lg:w-1/2 mx-auto">
                {/* ProductImage */}
                <div className="max-w-96 bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src={data.data.image.url}
                        alt={data.data.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Productdetails */}
                <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-gray-800">{data.data.title}</h1>
                    <p className="text-gray-600">{data.data.description}</p>
                    {data.data.discountedPrice && data.data.discountedPrice < data.data.price ? (
                        <>
                            <p className="text-xl font-bold text-green-600">
                                ${data.data.discountedPrice}
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="line-through text-gray-500">${data.data.price}</p>
                                <p className="text-sm text-success">Save ${discountSave}</p>
                            </div>
                        </>
                    ) : (
                        <p className="text-xl font-bold text-gray-800">${data.data.price}</p>
                    )}
                    <button
                        onClick={() => addToCart(data.data)}
                        className="mt-4 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition"
                    >
                        Add to cart!
                    </button>
                </div>
            </div>

            {/* Reviews */}
            {data.data.reviews?.length > 0 ? (
                <>
                    <h2 className="text-lg text-center font-bold">Customer reviews</h2>
                    <div className="md:w-2/3 lg:w-1/2 mx-auto flex flex-col gap-4">
                        {data.data.reviews.map((review) => (
                            <CustomerReview review={review} key={review.id} />
                        ))}
                    </div>
                </>
            ) : (
                <p className="text-lg text-center text-gray-500 italic">
                    No reviews yet!
                </p>
            )}
        </div>
    );
}
