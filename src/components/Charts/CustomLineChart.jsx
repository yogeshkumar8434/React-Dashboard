import dynamic from "next/dynamic";
import { ResponsiveContainer } from "recharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    id: "basic-bar",
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    type: "category",
    categories: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false, // want to show
    fontSize: "14", // fontsize
    position: "top", // position
    horizontalAlign: "right", // Horizontal Align
    fontWeight: 400,
    itemMargin: { horizontal: 20 },
    floating: true,
    markers: {
      radius: 12, // Radius of markers
    },
    labels: {
      colors: "black",
    },
  },
  tooltip: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    lineCap: "round",
    width: 3,
  },
  grid: {
    borderColor: "#EAEAEA",
    padding: {
      right: 0,
      left: 20,
    },
  },
};

const series = [
  {
    name: "Guest",
    data: [200, 390, 200, 300, 240, 450],
    color: "#E9A0A0",
  },
  {
    name: "Users",
    data: [100, 420, 150, 450, 80, 250],
    color: "#9BDD7C",
  },
];

const CustomLineChart = ({ width = "100%", height = "100%", ...rest }) => {
  return (
    <ResponsiveContainer width={width} height={height} {...rest}>
      {Chart && <Chart options={options} series={series} type="line" />}
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
