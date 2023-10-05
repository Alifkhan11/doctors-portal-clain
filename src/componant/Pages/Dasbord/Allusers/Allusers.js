import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Allusers = () => {
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
<<<<<<< Updated upstream
      const res = await fetch(`http://localhost:5000/users`);
=======
      const res = await fetch(`https://doctors-portal-server-kohl-gamma.vercel.app/users`);
>>>>>>> Stashed changes
      const data = res.json();
      return data;
    },
  });
// console.log(localStorage.getItem("accessToken"));
  const hendelmakeadmin = (id) => {
<<<<<<< Updated upstream
    fetch(`http://localhost:5000/users/admin/${id}`, {
=======
    fetch(`https://doctors-portal-server-kohl-gamma.vercel.app/users/admin/${id}`, {
>>>>>>> Stashed changes
      method: "PUT",
      headers:{
        authorizition:`bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount>0){
            toast.success('Make Admine Successfully')
            refetch()
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admine</th>
              <th>Deleted</th>
              <th>Deleted</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                {user?.role? <p className="capitalize">{user.role}</p>: <>
                <button
                    onClick={() => hendelmakeadmin(user._id)}
                    className="btn btn-xs btn-primary"
                  >
                    Make Admine
                    
                  </button>
                </>}
                  
                </td>
                <td>
                  <button className="btn btn-xs btn-warning">Deleted</button>
                </td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
