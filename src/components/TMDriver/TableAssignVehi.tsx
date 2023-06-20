import React from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import styles from './TableAssign.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';

export default function DataTableassign() {

  const dispatch = useDispatch();
  const AssignVehicleList = useSelector((state:any) => state.ReducerDriver.AssignVehicleList);


const columns: GridColDef[] = [

  {
    field: 'Plant',
    headerName: 'Plant',
    width: 700,
    renderHeader: () => <span className={styles.columnHeader}>Plant</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{String(params.value)}</span>
    ),
  },
  
  {
    field: 'VehicleType',
    headerName: 'VehicleType',
    width: 150,
    renderHeader: () => <span className={styles.columnHeader}>VehicleType</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{String(params.value)}</span>
    ),
  },
  
  {
    field: 'VehicleNumber',
    headerName: 'VehicleNumber',
    width: 200,
    renderHeader: () => <span className={styles.columnHeader}>VehicleNumber</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },
  
];

// const rows = [
//   {Incident: 'Jon', Date: new Date('2023-07-22'),  Outcome: 'Driver' },

// ];



return (


    <div className={styles.table}>
      <DataGrid
     getRowId={(row) => String(row.Plant)}
        rows={AssignVehicleList}
        
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        className={styles.dataGrid} 
        
      />
    </div>
 );

}