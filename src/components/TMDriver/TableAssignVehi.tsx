import React from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import styles from './TableAssign.module.scss'

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: '#',
    width: 130,
    renderHeader: () => <span className={styles.columnHeader} >#</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },
  {
    field: 'vehitype',
    headerName: 'VehicleType',
    width: 380,
    renderHeader: () => <span className={styles.columnHeader}>Vehicle Type</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },
  {
    field: 'vehinum',
    headerName: 'VehicleNumber',
    width: 300,
    renderHeader: () => <span className={styles.columnHeader}>Vehicle Number</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },
  
  {
    field: 'sbu',
    headerName: 'SBU/Plant',
    width: 250,
    renderHeader: () => <span className={styles.columnHeader}>SBU/Plant</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },
];

const rows = [
  { id: 1, vehinum: 'CAC 3526', vehitype: 'Car', sbu: 'MAS Kreeda' },
  { id: 2, vehinum: 'ABN 7822', vehitype: 'Van', sbu: 'MAS Intima' },
  { id: 3, vehinum: 'RTB 2596', vehitype: 'Car', sbu: 'MAS Intima' },
  { id: 4, vehinum: 'ERN 2598', vehitype: 'Van', sbu: 'MAS Kreeda' },
  { id: 5, vehinum: 'HNU 2598', vehitype: 'Van', sbu: 'MAS Kreeda' },
  { id: 6, vehinum: 'WVN 23987', vehitype: 'Van', sbu: 'MAS Intima' },
  { id: 7, vehinum: 'TYN 8502', vehitype: 'Van', sbu: 'MAS Intima' },
  { id: 8, vehinum: 'TNM 8532', vehitype: 'Van', sbu: 'MAS Kreeda' },
  { id: 9, vehinum: 'TNM 8502', vehitype: 'Car', sbu: 'MAS Intima' },
  { id: 10, vehinum: 'ACB 8502', vehitype: 'Car', sbu: 'MAS Kreeda' },
  { id: 11, vehinum: 'TNM 7823', vehitype: 'Car', sbu: 'MAS Intima' },
];



export default function DataTableassign() {
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