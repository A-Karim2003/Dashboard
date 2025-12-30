const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },

  watch: {
    label: "Watch",
    color: "var(--chart-5)",
  },
};

const chartData = [
  { month: "January", desktop: 186, mobile: 80, watch: 20 },
  { month: "February", desktop: 305, mobile: 200, watch: 28 },
  { month: "March", desktop: 237, mobile: 120, watch: 30 },
  { month: "April", desktop: 73, mobile: 190, watch: 80 },
  { month: "May", desktop: 209, mobile: 130, watch: 100 },
  { month: "June", desktop: 214, mobile: 140, watch: 120 },
];

export { chartConfig, chartData };
