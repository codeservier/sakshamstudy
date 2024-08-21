import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../components/shared/Header";

// Define dummy data directly in the same file
const mockDataContacts = [
  {
    id: "1",
    registrarId: "R001",
    name: "John Doe",
    age: 30,
    phone: "(123) 456-7890",
    email: "john.doe@example.com",
    address: "123 Elm Street",
    city: "Somewhere",
    zipCode: "12345",
  },
  {
    id: "2",
    registrarId: "R002",
    name: "Jane Smith",
    age: 28,
    phone: "(987) 654-3210",
    email: "jane.smith@example.com",
    address: "456 Oak Avenue",
    city: "Anywhere",
    zipCode: "67890",
  },
  {
    id: "3",
    registrarId: "R003",
    name: "Alice Johnson",
    age: 35,
    phone: "(555) 123-4567",
    email: "alice.johnson@example.com",
    address: "789 Pine Road",
    city: "Everywhere",
    zipCode: "11223",
  },
  {
    id: "4",
    registrarId: "R004",
    name: "Bob Brown",
    age: 40,
    phone: "(444) 987-6543",
    email: "bob.brown@example.com",
    address: "101 Maple Lane",
    city: "Someplace",
    zipCode: "44556",
  },
  {
    id: "5",
    registrarId: "R005",
    name: "Carol White",
    age: 32,
    phone: "(333) 555-6666",
    email: "carol.white@example.com",
    address: "202 Birch Boulevard",
    city: "Anyplace",
    zipCode: "78901",
  },
];

const Branches = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
  
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "black", // default color or your preferred color
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f5f5f5", // default background color or your preferred color
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#ffffff", // default background color or your preferred color
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#f5f5f5", // default background color or your preferred color
          },
          "& .MuiCheckbox-root": {
            color: "#000000", // default color or your preferred color
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#000000", // default color or your preferred color
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Branches;
