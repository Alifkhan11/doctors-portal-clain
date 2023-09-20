import React from "react";

const Subcard = ({ card }) => {
  const { name, discription, icon, bgcolor } = card;
  return (
    <div>
      <div className={`card card-side shadow-xl  ${bgcolor} p-6`}>
        <figure>
          <img src={icon} alt="Movie" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{name}</h2>
          <p>{discription}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcard;
