import { FaStar } from "react-icons/fa6";


function IconReview({rating, Stars})  {

    return(
        <div className="flex">
            {Array.from({length: rating}, (_, index) =>(
                <Stars key={index} />
            ))}
        </div>
    );

}

function StarIcon(){

    return (
        <span>
            <FaStar className="text-accent text-sm" />
        </span>
    )
}


export default function CustomerReview({review}){



    return(
        <div className="flex flex-col gap-3 ">
            <IconReview rating={review.rating} Stars={StarIcon} />
            <div className="bg-primary text-secondary p-2 rounded-2xl p-5 flex flex-col gap-3">
                <h3 className="font-bold">{review.username}</h3>
                <p className="italic">"{review.description}"</p>
            </div>
        </div>
    );
}