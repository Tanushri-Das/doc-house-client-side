import { useQuery, useQueryClient } from "@tanstack/react-query";

const useDoctors = () => {
  const queryClient = useQueryClient();

  // const { data: doctors = [], isLoading: loading } = useQuery({
  //   queryKey: ["doctors"],
  //   queryFn: async () => {
  //     const res = await fetch("https://doc-house-server-side-hoqxfra72-tanushri-das.vercel.app/doctorsInfo");
  //     return res.json();
  //   },
  // });
  const { data: doctors = [], isLoading: loading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const response = await fetch("https://doc-house-server-side.vercel.app/doctorsInfo", {
          method: "GET",
          headers: {
            // If you have any headers, add them here
            // For example, if you need to include an authorization token:
            // "Authorization": "Bearer YOUR_ACCESS_TOKEN"
          },
        });

        if (!response.ok) {
          throw new Error(`Error fetching reviews: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error;
      }
    },
  });
  const refetchDoctors = async () => {
    // Invalidate and refetch the "services" query
    await queryClient.invalidateQueries("doctors");
  };

  return { doctors, loading, refetchDoctors }; // Return an object with the services and refetchServices function
};

export default useDoctors;