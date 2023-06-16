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
      field: 'sub',
      headerName: 'SUB/Plant',
      width: 600,
      renderHeader: () => <span className={styles.columnHeader}>SUB/Plant</span>,
      renderCell: (params: GridCellParams) => (
        <span className={styles.cell}>{params.value as React.ReactNode}</span>
      ),
    },

    {
      field: 'from',
      headerName: 'From',
      width: 200,
      renderHeader: () => <span className={styles.columnHeader}>From</span>,
      renderCell: (params: GridCellParams) => {
        const dateValue = new Date(params.value as string);
        const formattedDate = dateValue.toLocaleDateString(); 
    
        return <span className={styles.cell}>{formattedDate}</span>;
      },
    },
    {
        field: 'to',
        headerName: 'To',
        width: 150,
        renderHeader: () => <span className={styles.columnHeader}>To</span>,
        renderCell: (params: GridCellParams) => {
          const dateValue = new Date(params.value as string);
          const formattedDate = dateValue.toLocaleDateString(); 
      
          return <span className={styles.cell}>{formattedDate}</span>;
        },
      },
    
    
  ];
  
  const rows = [
    { id: 1, from: new Date('2023-07-22'), sub: "MAS Kreeda",to: new Date('2023-07-22')},
    { id: 2, from: new Date('2021-04-08'), sub: "MAS Intima", to: new Date('2021-04-08') },
    { id: 3, from: new Date('2021-04-10'), sub: "MAS Kreeda", to: new Date('2021-04-10')},
    { id: 4, from: new Date('2020-10-08'), sub: "MAS Intima", to: new Date('2020-10-08') },
    { id: 5, from: new Date('2021-06-18'), sub: "MAS Intima", to: new Date('2021-06-18')},
    { id: 6, from: new Date('2020-12-30'), sub: "MAS Kreeda", to: new Date('2020-12-30')},
    { id: 7, from: new Date('2021-05-10'), sub: "MAS Kreeda", to: new Date('2021-05-10')},
    { id: 8, from: new Date('2020-01-08'), sub: "MAS Kreeda", to: new Date('2020-01-08')},
    { id: 9, from: new Date('2020-11-26'), sub: "MAS Intima", to: new Date('2020-11-26') },
    { id: 10, from: new Date('2021-02-08'), sub: "MAS Kreeda", to: new Date('2021-02-08') },
    { id: 11, from: new Date('2021-05-18'), sub: "MAS Intima", to: new Date('2021-05-18') },
  ];
  


export default function TablePrevious() {
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