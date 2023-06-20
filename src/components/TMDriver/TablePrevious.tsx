import React from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import styles from './TableREcinci.module.scss'
import { useDispatch, useSelector } from 'react-redux';

export default function TablePrevious() {
  
const dispatch = useDispatch();
const previousWorksList = useSelector((state:any) => state.ReducerDriver.previousWorksList);

const columns: GridColDef[] = [
  
    {
      field: 'SBU',
      headerName: 'SBU',
      width: 600,
      renderHeader: () => <span className={styles.columnHeader}>SUB/Plant</span>,
      renderCell: (params: GridCellParams) => (
        <span className={styles.cell}>{params.value as React.ReactNode}</span>
      ),
    },

    {
      field: 'FromDate',
      headerName: 'FromDate',
      width: 200,
      renderHeader: () => <span className={styles.columnHeader}>From</span>,
      renderCell: (params: GridCellParams) => {
        const dateValue = new Date(params.value as string);
        const formattedDate = dateValue.toLocaleDateString(); 
    
        return <span className={styles.cell}>{formattedDate}</span>;
      },
    },
    {
        field: 'ToDate',
        headerName: 'ToDate',
        width: 150,
        renderHeader: () => <span className={styles.columnHeader}>To</span>,
        renderCell: (params: GridCellParams) => {
          const dateValue = new Date(params.value as string);
          const formattedDate = dateValue.toLocaleDateString(); 
      
          return <span className={styles.cell}>{formattedDate}</span>;
        },
      },
    
    
  ];
  




  return (


    <div className={styles.table}>
      <DataGrid
     getRowId={(row) => String(row.SBU)}
        rows={previousWorksList}
        
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