import React from "react";
import peapol1 from "../../../../../assets/images/people1.png";
import Testimonialsecondarycard from "../Testimonialsecondarycard/Testimonialsecondarycard";

const Testimonialmaincard = () => {
  const testimonialdata = [
    {
      id: 1,
      name: "Winson Herry",
      discription:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      people: peapol1,
    },
    {
      id: 2,
      name: "Winson Herry",
      discription:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      people: peapol1,
    },
    {
      id: 3,
      name: "Winson Herry",
      discription:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      people: peapol1,
    }
  ];
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
      {
        testimonialdata.map(testimonial=><Testimonialsecondarycard
        key={testimonial.id}
        testimonial={testimonial}
        >

        </Testimonialsecondarycard>)
      }
    </div>
  );
};

export default Testimonialmaincard;
