import React from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import styles from './TableREcinci.module.scss';
import { useDispatch, useSelector } from 'react-redux';

export default function Recincident() {

  const dispatch = useDispatch();
  const incidentsList = useSelector((state:any) => state.ReducerDriver.incidentsList);

const columns: GridColDef[] = [
    
  {
    field: 'Incident',
    headerName: 'Incident',
    width: 800,
    renderHeader: () => <span className={styles.columnHeader}>Incident</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{String(params.value)}</span>
    ),
  },
  {
    field: 'Date',
    headerName: 'Date',
    width: 200,
    renderHeader: () => <span className={styles.columnHeader}>Date</span>,
    renderCell: (params: GridCellParams) => {
      const dateValue = new Date(params.value as string);
      const formattedDate = dateValue.toLocaleDateString(); 
  
      return <span className={styles.cell}>{formattedDate}</span>;
    },
  },
  
  {
    field: 'Outcome',
    headerName: 'Outcome',
    width: 150,
    renderHeader: () => <span className={styles.columnHeader}>Outcome</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{String(params.value)}</span>
    ),
  },
  
  {
    field: 'VehiNumber',
    headerName: 'VehiNumber',
    width: 200,
    renderHeader: () => <span className={styles.columnHeader}>Vehicle Number</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },
  ];




    return (
        <div className={styles.table} style={{ height: 370, width: '100%' }}>
          <DataGrid
     getRowId={(row) => row.Incident}
     rows={incidentsList}
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