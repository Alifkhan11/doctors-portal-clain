import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loding from "../../../../Myminycomponent/loding/Loding";
import Confarmmodel from "../../../share/confarmmodel/Confarmmodel";
import toast from "react-hot-toast";

const Managedoctors = () => {
  const [doctordeletmodel, setdoctordeletmodel] = useState(null);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["/doctors"],
    queryFn: async () => {
<<<<<<< HEAD
<<<<<<< Updated upstream
      const res = await fetch(`http://localhost:5000/doctors`);
=======
      const res = await fetch(`https://doctors-portal-server-kohl-gamma.vercel.app/doctors`);
>>>>>>> Stashed changes
=======
      const res = await fetch(`https://doctors-portal-server-vert-phi.vercel.app/doctors`);
>>>>>>> 1587ee4d5b30c8dcb0aadaa430c65229a54fa274
      const data = res.json();
      return data;
    },
  });
  const deleteddoctors = (doctor) => {
<<<<<<< Updated upstream
    console.log(doctor._id);
<<<<<<< HEAD
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
=======
    // console.log(doctor._id);
    fetch(`https://doctors-portal-server-kohl-gamma.vercel.app/doctors/${doctor._id}`, {
>>>>>>> Stashed changes
=======
    fetch(`https://doctors-portal-server-vert-phi.vercel.app/doctors/${doctor._id}`, {
>>>>>>> 1587ee4d5b30c8dcb0aadaa430c65229a54fa274
      method: "DELETE",
      headers: {
        authorizition: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount>0) {
          toast.success("Doctors deleted successfully");
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Loding></Loding>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold ml-12 my-10">Manage Doctors</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Photo</th>
              <th>Specialty</th>
              <th>E-mail</th>
              <th>Delet</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((doctor, i) => (
              <tr key={doctor._id} className="bg-base-200">
                <th>{i + 1}</th>
                <td>{doctor.name}</td>
                <td>
                  {" "}
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        alt=""
                        src={doctor.img || "https://ibb.co/K6dM7rD"}
                      />
                    </div>
                  </div>
                </td>
                <td>{doctor.specialty}</td>
                <td>{doctor.email}</td>
                <td>
                  <label
                    onClick={() => setdoctordeletmodel(doctor)}
                    htmlFor="confarmmodal"
                    className="btn btn-sm btn-error"
                  >
                    Delet
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {doctordeletmodel && (
        <Confarmmodel
          titel={`Are yoku shour delted`}
          message={`Deleted ${doctordeletmodel.name}`}
          data={doctordeletmodel}
          deleteddoctors={deleteddoctors}
        ></Confarmmodel>
      )}
    </div>
  );
};

export default Managedoctors;
