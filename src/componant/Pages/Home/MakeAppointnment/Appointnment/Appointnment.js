import React from "react";
import doctors from "../../../../assets/images/doctor.png";
import appointnment from "../../../../assets/images/appointment.png";
import Primarybutton from "../../../../Myminycomponent/Primarybutton/Primarybutton";

const Appointnment = () => {
  return (
    <section
      className="mt-32"
      style={{
        background: `url(${appointnment})`,
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctors} alt="" className="max-w-sm hidden md:block rounded-lg -mt-24 " />
          <div className="text-white mt-16 w-1/2">
            <h3 className="text-primary font-bold text-xl"> Appointment</h3>
            <h1 className=" font-semibold text-4xl">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Primarybutton>Get Started</Primarybutton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointnment;
