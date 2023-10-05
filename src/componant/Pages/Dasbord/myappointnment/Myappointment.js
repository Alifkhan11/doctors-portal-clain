import React, { useContext } from "react";
import { AuthContex } from "../../../contex/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Myappointment = () => {
  const { user } = useContext(AuthContex);
  // console.log(localStorage.getItem('accessToken'));
<<<<<<< HEAD
<<<<<<< Updated upstream
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
=======
  const url = `https://doctors-portal-server-kohl-gamma.vercel.app/bookings?email=${user?.email}`;
>>>>>>> Stashed changes
=======
  const url = `https://doctors-portal-server-vert-phi.vercel.app/bookings?email=${user?.email}`;
>>>>>>> 1587ee4d5b30c8dcb0aadaa430c65229a54fa274
  // console.log(url);
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorizition: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Tretment</th>
              <th>Dath</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.pasenname}</td>
                <td>{booking.tretnmentname}</td>
                <td>{booking.appointmentdate}</td>
                <td>{booking.time}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dasbord/payment/${booking._id}`}>
                    <button className="btn btn-primary">pay</button>
                    </Link>
                  )}
                
                  {booking.price && booking.paid && (
                    <span className="text-primary text-xl font-bold">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myappointment;
