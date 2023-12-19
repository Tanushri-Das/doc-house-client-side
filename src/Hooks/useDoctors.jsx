import { useQuery, useQueryClient } from "@tanstack/react-query";

const useDoctors = () => {
  const queryClient = useQueryClient();

  const { data: doctors = [], isLoading: loading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctorsInfo");
      return res.json();
    },
  });
  const refetchDoctors = async () => {
    // Invalidate and refetch the "services" query
    await queryClient.invalidateQueries("doctors");
  };

  return { doctors, loading, refetchDoctors }; // Return an object with the services and refetchServices function
};

export default useDoctors;