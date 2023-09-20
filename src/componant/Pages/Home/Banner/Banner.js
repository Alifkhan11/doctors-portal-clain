import React from "react";
import img from '../../../assets/images/chair.png'
import Primarybutton from "../../../Myminycomponent/Primarybutton/Primarybutton";

const Banner = () => {
  return (
    <div>
      <div className="hero p-4 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img} alt=""
            className="w-full lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
           <Primarybutton>Get started</Primarybutton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
