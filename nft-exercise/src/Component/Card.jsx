import React from "react";

const Card = ({ title, description, image, price, onClick }) => {
    return (
        <div className="card">
        <div className="card-image">
            <img src={image} alt={title} />
        </div>
        <div className="card-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
        </div>
        <div className="card-action">
            <button onClick={onClick}>Buy</button>
        </div>
        </div>
    );
    }

export default Card;

