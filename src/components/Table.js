import React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
   
  ];
  
  const rows = [
    { id: 1, lastName: 'dorqi', firstName: 'mohmad', age: 35 },
    { id: 2, lastName: 'saide', firstName: 'maryam', age: 42 },
    { id: 3, lastName: 'akbare', firstName: 'ali', age: 45 },
    { id: 4, lastName: 'sofi', firstName: 'ashkan', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
const Table = () => {
    return (
        <div style={{ height: 400, width: '100%',margin:"50px" }}>
          
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );
};

export default Table;