import React from "react";

const Testimonialsecondarycard = ({ testimonial }) => {
  const { name, people, discription, location } = testimonial;
  return (
    <div className=" shadow-2xl px-7">
      <div>
        <p>{discription}</p>
      </div>
      <div className="mt-3 flex">
        <figure>
          <img src={people} alt="" />
        </figure>
        <div className="mt-5 ml-5">
          <h4 className="text-xl font-bold">{name}</h4>
          <h5>{location}</h5>
        </div>
      </div>
    </div>
  );
};

export default Testimonialsecondarycard;
