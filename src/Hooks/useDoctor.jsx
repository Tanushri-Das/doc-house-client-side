import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDoctor = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isDoctor, isLoading: isDoctorLoading } = useQuery({
    queryKey: ["isDoctor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/doctor/${user?.email}`);
      console.log("is Doctor response", res.data);
      return res.data.doctor;
    },
  });
  return [isDoctor, isDoctorLoading];
};
export default useDoctor;
