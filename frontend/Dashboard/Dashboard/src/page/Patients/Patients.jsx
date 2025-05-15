import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../components/Header";

const Patients = () => {
  return (
  <Box>
    <
// @ts-ignore
    Header title="Patients" />
    <Box sx={{ height: 750,   mx: "auto" }}>
      <DataGrid checkboxSelection slots={{toolbar: GridToolbar,}}
      rows={rows}
      // @ts-ignore
      columns={columns}
      />
  </Box>
  </Box>
  );
};

export default Patients;
