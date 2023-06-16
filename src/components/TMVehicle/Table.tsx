import React, { useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import styles from './Table.module.scss';
import {removeIncidentFromList} from "../../redux/reducers/vehicleadd.reducer";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';




export default function DataTable() {

  const dispatch = useDispatch();
  const incidentMethods = useSelector((state:any) => state.ReducerVehicle.incidentList);

 

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
      width: 150,
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
      width: 200,
      renderHeader: () => <span className={styles.columnHeader}>Outcome</span>,
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
       getRowId={(row) => String(row.Incident)}
          rows={incidentMethods}
          
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
