import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Bar} from "react-chartjs-2";
import { useMemo } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);
interface GraphDataPoint {
  day: string;
  value: number;
}

const GraphComponent = () => {
 
  const balancesByWeek = useSelector(
    (state: RootState) => state.balance.balancesByWeek
  );
  const firstWeekData = balancesByWeek&&balancesByWeek.length > 0 ? balancesByWeek[0] : {};

  const graphData: GraphDataPoint[] = useMemo(() => {
    const daysOfWeek = Object.keys(firstWeekData);

    const processedData = daysOfWeek.map((day) => ({
      day,
      value: firstWeekData[day],
    }));

    return processedData;
  }, [balancesByWeek]);

  const data = {
    labels: graphData.map((dataPoint) => dataPoint.day),
    datasets: [
      {
        label: "Balance Diario",
        data: graphData.map((dataPoint) => dataPoint.value),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(234, 88, 12)",
        hoverBackgroundColor: "rgba(63, 127, 191)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  
    
  
  }

  return (
    <div className="flex justify-center items-center m-5">
    <div className="card w-full max-w-2xl bg-white text-neutral-content p-3">
     <Bar data={data} options={options} />
    </div>
    </div>

  );
};

export default GraphComponent;
