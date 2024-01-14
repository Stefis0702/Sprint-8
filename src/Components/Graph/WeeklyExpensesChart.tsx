import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import TodayExpense from "../TodayExpense/TodayExpense";
import { useTranslation } from 'react-i18next';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
interface GraphDataPoint {
  day: string;
  value: number;
}

const GraphComponent = () => {
  const { t } = useTranslation();
  const balancesByWeek = useSelector(
    (state: RootState) => state.balance.balancesByWeek
  );
  const firstWeekData =
    balancesByWeek && balancesByWeek.length > 0 ? balancesByWeek[0] : {};

  const graphData: GraphDataPoint[] = useMemo(() => {
    const daysOfWeek = Object.keys(firstWeekData);

    const processedData = daysOfWeek.map((day) => ({
      day,
      value: firstWeekData[day],
    }));

    return processedData;
  }, [balancesByWeek]);

  const daysOfWeek = ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"];

  const labelsTranslate = daysOfWeek.map(day => t(`main.Week-days.${day}`));
  
  console.log(labelsTranslate);

  const data = {
    labels: labelsTranslate,
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
        ticks: {
          maxTicksLimit: 4, 
        },
      },
    },
    
  };

  return (
    <div className="flex justify-center items-center m-8">
      <div className="card w-full max-w-2xl bg-white text-neutral-content p-3">
        <h2 className="text-3xl text-center  font-bold text-black">{t('main.Tittle')}</h2>
        <Bar data={data} options={options} />
        <TodayExpense />
      </div>
    </div>
  );
};

export default GraphComponent;
