import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../components/CartContext";
import CustomerReview from "../components/ReviewCard";

export default function ProductPage(){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);
    let {id} = useParams(); 

    const {addToCart} = useCart();

    useEffect(() => {
        async function getData(url){
            try{
                setError(false);
                setIsLoading(true);
                const response = await fetch(url);
                const json = await response.json();

                setData(json);
            }catch(error){
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        getData(`https://v2.api.noroff.dev/online-shop/${id}`);
    }, [id]);

    if (isLoading || !data){
        return <div>Loading...</div>
    }

    if (isError) {
        return <p className="text-warning font-bold">Error loading product!</p>
    }

    const discountSave = data.discountedPrice && data.price ? (data.price-data.discountedPrice).toFixed(2) : null;
    

    return(
        <div className="flex flex-col gap-10 py-10">
            <div className="flex flex-col gap-4 row-y-8 md:flex-row md:w-2/3 lg:w-1/2 mx-auto">
                <div className="max-w-96">
                    <img src={data.data.image.url} alt={data.title}/>
                </div>
                <div>
                    <h1> {data.data.title} </h1>
                    <div>
                        
                    </div>
                    <p>{data.data.description}</p>
                    {data.data.discountedPrice && data.data.discountedPrice < data.data.price ? (
                    
                        <>
                            <p>${data.data.discountedPrice}</p>
                            <div>
                                <p> ${data.data.price} </p>
                                <p className="text-success"> Save ${discountSave} </p>
                            </div>
                        </>
                            
                    ): (
                        <p>{data.data.price}</p>
                    )}                 
                    <button onClick={() => addToCart(data.data)}>Add to cart!</button>
                </div>
            </div>
            {data.data.reviews && data.data.reviews.lenght > 0 ? (
                <p className="text-lg text-center">No reviews yet!</p>
            ) : (
                <h2 className="text-lg text-center font-bold">Customer reviews</h2>
        )}
        <div className="md:w-2/3 lg:w-1/2 mx-auto flex flex-col gap-4">
            {data.data.reviews?.map((review) => (
            <CustomerReview review={review} key={review.id}/>
        ))}
        </div>
            
        </div>
    );

}

// `https://v2.api.noroff.dev/online-shop/${id}`