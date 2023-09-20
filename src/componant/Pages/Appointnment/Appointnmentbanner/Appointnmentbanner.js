import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const Appointnmentbanner = ({ setSelecteddate, selecteddate }) => {
  return (
    <section>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="ml-5">
            <img
              src={chair}
              alt=""
              className="max-w-md w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="mr-5 max-w-md">
            <DayPicker
              mode="single"
              selected={selecteddate}
              onSelect={setSelecteddate}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointnmentbanner;
