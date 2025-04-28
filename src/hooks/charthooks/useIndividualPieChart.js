import { useQuery } from "@tanstack/react-query";
import { individualChart } from "../../api/chartService";

const useIndividualPieChart = () => {
  const { data } = useQuery({
    queryKey: ["piechart"],
    queryFn: individualChart,
  });
  return { chartdata: data };
};

export default useIndividualPieChart;
