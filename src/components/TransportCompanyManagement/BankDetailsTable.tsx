import React, { useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import styles from './BankDetailsTable.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removePaymentMethodFromList } from '../../redux/reducers/transportcompany.reducer';

export default function DataTable() {
  const dispatch = useDispatch();
  const paymentMethods = useSelector((state:any) => state.transportCompany.paymentList);
  debugger
  const RemovePayment=(event:any)=> {
    dispatch(removePaymentMethodFromList(event));
  }

  const columns: GridColDef[] = [
  
    {
      field: 'PaymentMethod',
      headerName: 'Payment Method',
      width: 220,
      renderHeader: () => <span className={styles.columnHeader}>Payment Method</span>,
      renderCell: (params: GridCellParams) => (
        <span className={styles.cell} style={{paddingLeft: "10px"}}>{params.value as React.ReactNode}
        
        </span>
      ),
    },
    {
      field: 'Bank',
      headerName: 'Bank',
      width: 150,
      renderHeader: () => <span className={styles.columnHeader}>Bank</span>,
      renderCell: (params: GridCellParams) => (
          <span className={styles.cell}>{params.value as React.ReactNode}</span>
        ),
      },
    
    {
      field: 'BeneficiaryName',
      headerName: 'Beneficiary Name',
      width: 220,
      renderHeader: () => <span className={styles.columnHeader}>Beneficiary Name</span>,
      renderCell: (params: GridCellParams) => (
        <span className={styles.cell}>{params.value as React.ReactNode}</span>
      ),
    },
  
    {
      field: 'AccountNumber',
      headerName: 'Account Number',
      width: 230,
      renderHeader: () => <span className={styles.columnHeader} >Account Number</span>,
      renderCell: (params: GridCellParams) => (
        <span className={styles.cell}>{params.value as React.ReactNode}</span>
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderHeader: () => <span className={styles.columnHeader}>Action</span>,
      renderCell: (params) => (
          <span className={styles.cell} style={{ paddingLeft: '15px' }}>
            <DeleteIcon onClick={() => RemovePayment(params.row.Id)} className={styles.deleteIcon} />
          </span>
        ),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderHeader: () => <span className={styles.columnHeader}>Status</span>,
      renderCell: (params: GridCellParams) => (
        <span className={styles.cell}>
          <Switch defaultChecked checked={params.value as boolean} onChange={() => {}} />
        </span>
      ),
    },
  ];

  return (
   
    <div className={styles.table} style={{ height: 360, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.AccountNumber}
        rows={paymentMethods}
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


  

