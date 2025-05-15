import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "expenses",
    color: "black",
    data: [
      { x: "Jan", y: 200 },
      { x: "Feb", y: 500 },
      { x: "Mar", y: 800 },
      { x: "Apr", y: 1000 },
      { x: "May", y: 1200 },
      { x: "Jun", y: 1500 },
      { x: "Jul", y: 1700 },
      { x: "Aug", y: 1300 },
      { x: "Sep", y: 1100 },
      { x: "Oct", y: 1400 },
      { x: "Nov", y: 1600 },
      { x: "Dec", y: 1800 },
    ],
  },
  {
    id: "profit",
    color: "blue",
    data: [
      { x: "Jan", y: 300 },
      { x: "Feb", y: 600 },
      { x: "Mar", y: 900 },
      { x: "Apr", y: 1100 },
      { x: "May", y: 1400 },
      { x: "Jun", y: 1600 },
      { x: "Jul", y: 1900 },
      { x: "Aug", y: 1500 },
      { x: "Sep", y: 1300 },
      { x: "Oct", y: 1700 },
      { x: "Nov", y: 1800 },
      { x: "Dec", y: 2000 },
    ],
  },
];

const Line = ({ isDahboard = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDahboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            ticks: {
              text: {
                fill: theme.palette.text.primary,
              },
            },
          },
        }}
        data={data}
        curve="monotoneX"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: 2000,
          stacked: false,
          reverse: false,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard ? null : "Months",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard ? null : "Amount",
          legendOffset: -40,
          legendPosition: "middle",
          format: v => `${v / 1000}k`,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
