import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Header from "../../components/Header";
import {Box,Grid,Card,CardContent,Button,} from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "#F4F2ED", color: "#000" }}>
            <CardContent>
              <Header isDashboard title="Hello, Malak!"
                subTitle="Welcome to your dashboard. Here's a quick look at your clinic's schedule today."/>
             
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Row1 />
        </Grid>
      </Grid>

      <Box mt={4}>
        <Row2 />
        <Row3 />
      </Box>
    </Box>
  );
};

export default Dashboard;
