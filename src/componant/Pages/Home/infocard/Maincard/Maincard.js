import React from "react";
import img1 from "../../../../assets/icons/clock.svg";
import img2 from "../../../../assets/icons/marker.svg";
import img3 from "../../../../assets/icons/phone.svg";
import Subcard from "../Subcard/Subcard";

const Maincard = () => {
  const carddata = [
    {
      id: 1,
      name: "Opening Hours",
      discription: "daily 9.00 am to 4.00 pm",
      icon: img1,
      bgcolor:'bg-gradient-to-r from-primary to-secondary'
    },
    {
      id: 2,
      name: "Visite out location",
      discription: "Brooklyn, NY 10036, United States",
      icon: img2,
      bgcolor:'bg-accent'
    },
    {
      id: 3,
      name: "Contact US:",
      discription: "01700000000 , 01900000000",
      icon: img3,
      bgcolor:'bg-gradient-to-r from-primary to-secondary'
    },
  ];

  return (
    <div className="grid my-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        carddata.map(card=><Subcard
        key={card.id}
        card={card}
        >

        </Subcard>)
      }
    </div>
  );
};

export default Maincard;
