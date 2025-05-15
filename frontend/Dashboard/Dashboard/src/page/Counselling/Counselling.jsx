import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  Box,
  Button,
  TextField,
  Stack,
  Dialog,
  DialogTitle,
  DialogActions,
  Alert,
  Typography,
} from "@mui/material";
import { SecurityOutlined } from "@mui/icons-material";
import Header from "../../components/Header";
import axios from "axios";

const Counselling = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch counselling data from backend
  const fetchCounsellingData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/Booking");
      // Map _id to id for DataGrid compatibility
      const formattedRows = response.data.map((appointment) => ({
        id: appointment._id,
        fullName: appointment.fullName,
        email: appointment.email,
        phoneNumber: appointment.phoneNumber,
        doctor: appointment.doctor,
        service: appointment.service,
        session: appointment.session,
        status: appointment.status,
      }));
      setRows(formattedRows);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching counselling data:", error.response?.data || error.message);
      setError("Failed to fetch counselling data. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCounsellingData();
  }, []);

  // Delete selected appointments
  const handleDelete = async () => {
    try {
      await Promise.all(
        selectedRows.map((id) =>
          axios.delete(`http://localhost:4000/Booking/${id}`)
        )
      );
      setRows(rows.filter((row) => !selectedRows.includes(row.id)));
      setSelectedRows([]);
      setOpenDialog(false);
    } catch (error) {
      console.error("Error deleting appointments:", error.response?.data || error.message);
      setError("Failed to delete appointments. Please try again.");
      setOpenDialog(false);
    }
  };

  const columns = [
    { field: "fullName", headerName: "Full Name", width: 200, align: "center", headerAlign: "center" },
    { field: "email", headerName: "Email", width: 200, align: "center", headerAlign: "center" },
    { field: "phoneNumber", headerName: "Phone Number", width: 150, align: "center", headerAlign: "center" },
    { field: "doctor", headerName: "Doctor", width: 200, align: "center", headerAlign: "center" },
    { field: "service", headerName: "Service", width: 200, align: "center", headerAlign: "center" },
    { field: "session", headerName: "Session", width: 200, align: "center", headerAlign: "center" },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        const colorMap = {
          Cancelled: "rgba(255, 0, 0, 0.8)",
          Confirmed: "rgb(50, 205, 50)",
          Ongoing: "rgb(100, 149, 237)",
          Pending: "rgba(255, 255, 0, 0.8)",
        };

        return (
          <Box
            sx={{
              p: "5px",
              width: "100%",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colorMap[row.status] || "gray",
            }}
          >
            <SecurityOutlined sx={{ fontSize: 16, color: "#000", mr: 1 }} />
            <Typography sx={{ fontSize: 13, color: "#000" }}>{row.status}</Typography>
          </Box>
        );
      },
    },
  ];

  // Filter rows based on search input
  const filteredRows = rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );
    // xs: "16px", // موبايل
    //     sm: "18px", // تابلت صغير
    //     md: "20px", // تابلت كبير
    //      lg: "24px", // لابتوب

  return (
    <Box >
      <Header title="Counselling List" subTitle={undefined} />
      <Box sx={{ my: 2 ,xs: "16 px" ,sm :"18 px",md:"20 px ", lg :"24 px"}}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <TextField
              label="Search"
              size="small"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Stack>
          {selectedRows.length > 0 && (
            <Button
              variant="outlined"
              color="error"
              onClick={() => setOpenDialog(true)}
            >
              Delete Selected
            </Button>
          )}
        </Stack>
      </Box>
      {error && (
        <Box sx={{ mb: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
      <Box sx={{ height: 750, mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{ toolbar: GridToolbar }}
          rows={filteredRows}
          // @ts-ignore
          columns={columns}
          onRowSelectionModelChange={(ids) => setSelectedRows(ids)}
          rowSelectionModel={selectedRows}
          loading={loading}
        />
      </Box>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Are you sure you want to delete selected rows?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Counselling;




