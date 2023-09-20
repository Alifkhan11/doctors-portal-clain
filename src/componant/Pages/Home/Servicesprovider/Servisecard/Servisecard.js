import React from "react";

const Servisecard = ({servise}) => {
    const {icon,discription,name} =servise
  return (
    <div>
      <div className="hero  bg-base-200 rounded-2xl">
        <div className="hero-content flex-col">
          <img
            src={icon} alt=""
            className="max-w-sm rounded-lg "
          />
          <div>
            <h1 className="text-xl font-bold text-center">{name}</h1>
            <p className="py-6 text-center">
              {discription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servisecard;
