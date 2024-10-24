import { useQuery, useQueryClient } from "@tanstack/react-query";

const useServices = () => {
  const queryClient = useQueryClient();

  const { data: services = [], isLoading: loading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(
        "https://doc-house-server-side.vercel.app/appointmentOptions"
      );
      return res.json();
    },
  });

  const refetchServices = async () => {
    // Invalidate and refetch the "services" query
    await queryClient.invalidateQueries("services");
  };

  return { services, loading, refetchServices }; // Return an object with the services and refetchServices function
};

export default useServices;
