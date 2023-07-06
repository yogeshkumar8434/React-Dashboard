import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const CustomPieChart = () => {
  const data = [
    { name: "Custom Short Pants", value: 31 },
    { name: "Basic Tees", value: 55 },
    { name: "Super Hoodies", value: 14 },
  ];

  const COLORS = ["#F6DC7D", "#98D89E", "#EE8484"];

  return (
    <ResponsiveContainer className="h-[100px] w-[100px] md:h-[180px] md:w-[180px]">
      <PieChart width={"100%"} height={"100%"}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
          cx={"50%"}
          cy={"50%"}
          fill="#8884d8"
          label={false}
          strokeWidth={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
