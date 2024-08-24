import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Branches = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'registration'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRows(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'userId', headerName: 'User ID', flex: 0.5 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'district', headerName: 'District', flex: 1 },
    { field: 'pinCode', headerName: 'Pin Code', flex: 1 },
    { field: 'state', headerName: 'State', flex: 1 },
    {
      field: 'selectedHall',
      headerName: 'Selected Hall',
      flex: 1,
      renderCell: (params) => Array.isArray(params.value) ? params.value.join(", ") : params.value,
    },
    {
      field: 'selectedSlots',
      headerName: 'Selected Slots',
      flex: 1,
      renderCell: (params) => Array.isArray(params.value) ? params.value.join(", ") : params.value,
    },
  ];
  

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': { border: 'none' },
          '& .MuiDataGrid-cell': { borderBottom: 'none' },
          '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f5f5f5', borderBottom: 'none' },
          '& .MuiDataGrid-virtualScroller': { backgroundColor: '#ffffff' },
          '& .MuiDataGrid-footerContainer': { borderTop: 'none', backgroundColor: '#f5f5f5' },
          '& .MuiCheckbox-root': { color: '#000000' },
        }}
      >
        {loading ? <p>Loading...</p> : <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} />}
      </Box>
    </Box>
  );
};

export default Branches;
