import React from "react";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import Servisecard from "../Servisecard/Servisecard";

const Servisemain = () => {
  const servisedata = [
    {
      id: 1,
      name: "Fluoride Treatment",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptas.",
      icon: fluoride,
      bgcolor: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Cavity Filling",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptas.",
      icon: cavity,
      bgcolor: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 3,
      name: "Teeth whitening",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptas.",
      icon: whitening,
      bgcolor: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="my-20">
      <div className="text-center">
        <h5 className="text-primary text-xl font-bold">Our Servises</h5>
        <h2 className="text-4xl">Servise We Provide</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {servisedata.map((servise) => (
          <Servisecard key={servise.id} servise={servise}></Servisecard>
        ))}
      </div>
    </div>
  );
};

export default Servisemain;
