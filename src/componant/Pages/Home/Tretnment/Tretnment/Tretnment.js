import React from "react";
import tretnment from '../../../../assets/images/treatment.png'
import Primarybutton from "../../../../Myminycomponent/Primarybutton/Primarybutton";

const Tretnment = () => {
  return (
    <div>
      <div className="hero px-2 lg:px-24">
        <div className="hero-content  flex-col lg:flex-row">
          <img
            src={tretnment}
            className="max-w-sm sm:px-2 rounded-xl shadow-2xl" alt=""
          />
          <div className="px-12">
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <Primarybutton>Get started</Primarybutton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tretnment;
