import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you want to delete this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
          }
        });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((data) => {
        console.log("make admin response:", data);
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User has been made an admin",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error making user admin:", error);
      });
  };
  return (
    <div className="my-12">
      {users.length > 0 ? (
        <>
          <h1 className="text-2xl sm:text-4xl font-bold flex justify-center items-center">
            Total users : {users.length}
          </h1>
          <div className="mt-8">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <table className="min-w-full font-light">
                <thead className="bg-gray-700 text-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="text-lg text-center px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="text-lg text-center px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="text-lg text-center px-6 py-3">
                      Role
                    </th>
                    <th scope="col" className="text-lg text-center px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-center">
                  {Array.isArray(users) &&
                    users.map((user, index) => (
                      <tr key={user._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {user.role === "admin" ? (
                            "Admin"
                          ) : user.role === "doctor" ? (
                            "Doctor"
                          ) : (
                            <button
                              onClick={() => handleMakeAdmin(user)}
                              className=""
                            >
                              <FaUserShield className="text-lg" />
                            </button>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          <button
                            onClick={() => handleDelete(user)}
                            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                          >
                            <FaTrashAlt className="text-lg" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center mt-8">
          <p className="text-xl text-black font-semibold">No user Found</p>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
