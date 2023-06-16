import React from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import styles from './TableREcinci.module.scss'

const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '#',
      width: 120,
      renderHeader: () => <span className={styles.columnHeader} >#</span>,
      renderCell: (params: GridCellParams) => (
        <span className={styles.cell}>{params.value as React.ReactNode}</span>
      ),
    },
    {
      field: 'incident',
      headerName: 'Incident',
      width: 280,
      renderHeader: () => <span className={styles.columnHeader}>Incident</span>,
      renderCell: (params: GridCellParams) => (
        <span className={styles.cell}>{params.value as React.ReactNode}</span>
      ),
    },
    {
      field: 'vehinum',
      headerName: 'Vehicle Number',
      width: 300,
      renderHeader: () => <span className={styles.columnHeader}>Vehicle Number</span>,
      renderCell: (params: GridCellParams) => (
        <span className={styles.cell}>{params.value as React.ReactNode}</span>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
      renderHeader: () => <span className={styles.columnHeader}>Date</span>,
      renderCell: (params: GridCellParams) => {
        const dateValue = new Date(params.value as string);
        const formattedDate = dateValue.toLocaleDateString(); 
    
        return <span className={styles.cell}>{formattedDate}</span>;
      },
    },
    
    {
      field: 'outcome',
      headerName: 'Outcome',
      width: 200,
      renderHeader: () => <span className={styles.columnHeader}>Outcome</span>,
      renderCell: (params: GridCellParams) => (
        <span className={styles.cell}>{params.value as React.ReactNode}</span>
      ),
    },
  ];
  
  const rows = [
    { id: 1, date: new Date('2023-07-22'), vehinum: "ABC 1285", incident: 'Jon', outcome: 'Driver' },
    { id: 2, date: new Date('2021-04-08'), vehinum: "GHN 5236", incident: 'Cersei', outcome: 'Driver Suspended' },
    { id: 3, date: new Date('2021-04-10'), vehinum: "YHN 8523", incident: 'Jaime', outcome: 'Driver Allocated' },
    { id: 4, date: new Date('2020-10-08'), vehinum: "ABC 1285", incident: 'Arya', outcome: 'Driver Suspended' },
    { id: 5, date: new Date('2021-06-18'), vehinum: "ABC 1285", incident: 'Daenerys', outcome: 'Driver Allocated' },
    { id: 6, date: new Date('2020-12-30'), vehinum: "ABC 1285", incident: 'Arya', outcome: 'Driver' },
    { id: 7, date: new Date('2021-05-10'), vehinum: "ABC 1285", incident: 'Ferrara', outcome: 'Driver Suspended' },
    { id: 8, date: new Date('2020-01-08'), vehinum: "ABC 1285", incident: 'Rossini', outcome: 'Driver Suspended' },
    { id: 9, date: new Date('2020-11-26'), vehinum: "ABC 1285", incident: 'Charvey', outcome: 'Driver' },
    { id: 10, date: new Date('2021-02-08'), vehinum: "ABC 1285", incident: 'Bharvey', outcome: 'Driver Suspended' },
    { id: 11, date: new Date('2021-05-18'), vehinum: "ABC 1285", incident: 'Aharvey', outcome: 'Driver' },
  ];
  


export default function Recincident() {
    return (
        <div className={styles.table} style={{ height: 370, width: '100%' }}>
          <DataGrid
            rows={rows}
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