import React from "react";

type CardProps = {
  purpose: string;
  toLocation: string;
  fromLocation: string;
};

const Card: React.FC<CardProps> = ({ purpose, toLocation, fromLocation }) => {
  return (
    <div className="card">
      {/* <img src={imageUrl} alt={title} /> */}
      <h3>{purpose}</h3>
      <p>{fromLocation}</p>
      <p>{toLocation}</p>
    </div>
  );
};

export default Card;
