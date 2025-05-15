import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";

const data = [
  { day: "Sunday", Children: 15, Teens: 30, Adults: 45 },
  { day: "Monday", Children: 10, Teens: 20, Adults: 40 },
  { day: "Tuesday", Children: 20, Teens: 35, Adults: 50 },
  { day: "Wednesday", Children: 25, Teens: 30, Adults: 55 },
  { day: "Thursday", Children: 30, Teens: 40, Adults: 60 },
  { day: "Friday", Children: 20, Teens: 25, Adults: 35 },
  { day: "Saturday", Children: 10, Teens: 15, Adults: 20 },
];

const Bar = ({ isDashbord = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashbord ? "300px" : "75vh" }}>
     <ResponsiveBar
  data={data}
  keys={["Children", "Teens", "Adults"]}
  indexBy="day"
  colors={({ id }) => {
    if (id === "Children") return "#66bb6a";
    if (id === "Teens") return "#9c27b0";
    if (id === "Adults") return "#2196f3";
    return "#ccc";
  }}
  margin={{ top: 50, right: 130, bottom: 70, left: 60 }}
  padding={0.3}
  indexScale={{ type: "band", round: true, }}
  valueScale={{ type: "linear" }}
  theme={{
    textColor: theme.palette.text.primary,
    fontSize: 11,
    axis: {
      domain: { line: { stroke: theme.palette.divider } },
      legend: { text: { fontSize: 12, fill: theme.palette.text.primary } },
      ticks: {
        line: { stroke: theme.palette.divider },
        text: { fill: theme.palette.text.secondary },
      },
    },
  }}
  borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
  axisBottom={{
    tickRotation: 45,
    legend: isDashbord ? null : "Day of the Week",
    legendPosition: "middle",
    legendOffset: 35,
  }}
  axisLeft={{
    legend: isDashbord ? null : "Minutes",
    legendPosition: "middle",
    legendOffset: -55,
    tickValues: [0, 15, 30, 45, 60],
  }}
  labelSkipWidth={12}
  labelSkipHeight={12}
  labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
  legends={[
    {
      dataFrom: "keys",
      anchor: "top",
      direction: "row",
      translateX: 190,
      translateY: -50,
      itemWidth: 80,
      itemHeight: 20,
      symbolSize: 20,
      effects: [
        {
          on: "hover",
          style: { itemOpacity: 1 },
        },
      ],
    },
  ]}
  role="application"
  ariaLabel="Nivo bar chart"
  barAriaLabel={(e) => `${e.id}: ${e.formattedValue} minutes on ${e.indexValue}`}
/>

    </Box>
  );
};

export default Bar;
