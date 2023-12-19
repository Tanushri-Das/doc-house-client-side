import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyReviews = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosSecure.get(`/users/email/${user.email}`);
        setReviews(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [axiosSecure, user.email]);

  return (
    <div className="my-10 overflow-x-auto">
      <div className="font-bold uppercase flex justify-center items-center">
        <h3 className="text-3xl">My Reviews</h3>
      </div>
      <div className="mt-10">
        {loading ? (
          <p>Loading Review data...</p>
        ) : reviews ? (
          <table className="min-w-full divide-y divide-gray-200 responsive-table">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xl font-medium"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xl font-medium"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xl font-medium"
                >
                  Rate
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xl font-medium"
                >
                  Review
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  {reviews.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  {reviews.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  {reviews.rateus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  {reviews.review}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>No reviews found for the user.</p>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
