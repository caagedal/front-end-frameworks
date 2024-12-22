import { FaStar } from "react-icons/fa6";
import PropTypes from 'prop-types';

function IconReview({ rating, IconComponent, className }) {
    return (
        <div className="flex">
            {Array(rating)
                .fill(null)
                .map((_, index) => (
                    <IconComponent key={index} className={className} />
                ))}
        </div>
    );
}

IconReview.propTypes = {
    rating: PropTypes.number.isRequired,
    IconComponent: PropTypes.func.isRequired,
    className: PropTypes.string,
};

function StarIcon({ className = "text-accent text-sm" }) {
    return (
        <span>
            <FaStar className={className} />
        </span>
    );
}

StarIcon.propTypes = {
    className: PropTypes.string,
};

export default function CustomerReview({ review }) {
    return (
        <div className="flex flex-col gap-3">
            <IconReview rating={review.rating} IconComponent={StarIcon} />
            <div className="bg-primary text-secondary p-5 rounded-2xl flex flex-col gap-3">
                <h3 className="font-bold">{review.username}</h3>
                <p className="italic">"{review.description}"</p>
            </div>
        </div>
    );
}

CustomerReview.propTypes = {
    review: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};
