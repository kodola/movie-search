import React from "react";
import StarRatingComponent from 'react-star-rating-component';


const Rating = (props) => {
        return (
                <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span>★</span>}
                    starCount={10}
                    value={Math.round(props.chosenMovie.vote_average)}
                />
        );
};

export default Rating;