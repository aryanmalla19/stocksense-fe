import { useQuery } from "@tanstack/react-query";
import { pieChart } from "../../api/chartService";

const usePieChart = () => {
  const { data } = useQuery({
    queryKey: ["piechart"],
    queryFn: pieChart,
  });
  return { chartdata: data };
};

export default usePieChart;
