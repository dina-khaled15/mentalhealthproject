import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Stack,
  Dialog,
  DialogTitle,
  DialogActions,
  Alert,
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// تعريف الأعمدة
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'title', headerName: 'Title', width: 180 },
  { field: 'avatar', headerName: 'Avatar URL', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'contactPhone', headerName: 'Contact Phone', width: 150 },
  { field: 'contactEmail', headerName: 'Contact Email', width: 200 },
  { field: 'socialMedia', headerName: 'Social Media', width: 200 },
  { field: 'education', headerName: 'Education', width: 250 },
  { field: 'experience', headerName: 'Experience', width: 250 },
  { field: 'certificates', headerName: 'Certificates', width: 200 },
  { field: 'expertise', headerName: 'Expertise', width: 200 },
];

const Doctors = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // 🔁 جلب البيانات من الـ API
  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:4000/doctor');
      const formattedRows = response.data.map((doctor) => ({
        id: doctor._id,
        name: doctor.name,
        title: doctor.title,
        avatar: doctor.avatar,
        description: doctor.description,
        contactPhone: doctor.contact?.phone || '-', // ✅ تجنب undefined
        contactEmail: doctor.contact?.email || '-',
        socialMedia: Array.isArray(doctor.socialMedia)
          ? doctor.socialMedia.join(', ')
          : '-',
        education: Array.isArray(doctor.education)
          ? doctor.education
              .map((edu) => `${edu.degree} (${edu.year})`)
              .join(', ')
          : '-',
        experience: Array.isArray(doctor.experience)
          ? doctor.experience
              .map((exp) => `${exp.role} at ${exp.place} (${exp.year})`)
              .join(', ')
          : '-',
        certificates: Array.isArray(doctor.certificates)
          ? doctor.certificates.join(', ')
          : '-',
        expertise: Array.isArray(doctor.expertise)
          ? doctor.expertise.join(', ')
          : '-',
      }));
      setRows(formattedRows);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching doctors:', error.response?.data || error.message);
      setError('Failed to fetch doctors. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  // 🔍 البحث
  const handleSearch = (e) => setSearchText(e.target.value);

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  // 🗑️ حذف الأطباء المحددين
  const handleDelete = async () => {
    try {
      await Promise.all(
        selectedRows.map((id) =>
          axios.delete(`http://localhost:4000/doctor/${id}`)
        )
      );
      setRows(rows.filter((row) => !selectedRows.includes(row.id)));
      setSelectedRows([]);
      setOpenDialog(false);
    } catch (error) {
      console.error('Error deleting doctors:', error.response?.data || error.message);
      setError('Failed to delete doctors. Please try again.');
      setOpenDialog(false);
    }
  };

  return (
    <Box>
      <Header title="Doctors" subTitle={undefined} />

      {/* بحث وإضافة */}
      <Box sx={{ my: 2 }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <TextField
              label="Search"
              size="small"
              value={searchText}
              onChange={handleSearch}
            />
            <Button variant="contained" onClick={() => navigate('/add-doctor')}>
              Add New Doctor
            </Button>
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

      {/* رسالة الخطأ */}
      {error && (
        <Box sx={{ mb: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      {/* الجدول */}
      <Box sx={{ height: 750 }}>
        <DataGrid
          checkboxSelection
          slots={{ toolbar: GridToolbar }}
          rows={filteredRows}
          columns={columns}
          onRowSelectionModelChange={(ids) => setSelectedRows(ids)}
          rowSelectionModel={selectedRows}
          loading={loading}
        />
      </Box>

      {/* نافذة التأكيد عند الحذف */}
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

export default Doctors;
