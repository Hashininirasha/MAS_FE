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
debugger
  const paymentMethods = useSelector((state:any) => state.transportCompany.paymentList);


  

  const RemovePayment=(event:any)=> {
    dispatch(removePaymentMethodFromList(event));
  }
  // {params.value as React.ReactNode}
  const currancyTypearray = [{id:1,name:"LKR"},{id:2,name:"USD"}]
  const PaymentMethodArray = [{id:"1",name:"Cash Check"},{id:"2",name:"Bank Trasfer"}]
  const Banks = [{id:"1",name:"Bank Of Ceylon"},{id:"2",name:"Peoples Bank"} ,{id:"3",name:"Commercial Bank"}]

  const Branch = [{id:"1",name:"Bambalapitiya"},{id:"2",name:"Ratnapura"} ,{id:"3",name:"Moratuwa"}]








  const columns: GridColDef[] = [

    {
      field: 'CurrancyType',
      headerName: 'CurrancyType',
      width: 220,
      renderHeader: () => <span className={styles.columnHeader}>CurrancyType</span>,
      renderCell: (params: GridCellParams) => (

        <span className={styles.cell} style={{paddingLeft: "10px"}}>{currancyTypearray.find((item:any) => item.id === (params.value as React.ReactNode) )?.name}</span>
      ),
    },
  
    {
      field: 'PaymentMethod',
      headerName: 'Payment Method',
      width: 220,
      renderHeader: () => <span className={styles.columnHeader}>Payment Method</span>,
      renderCell: (params: GridCellParams) => (
     
        <span className={styles.cell} style={{paddingLeft: "10px"}}>{PaymentMethodArray.find((item:any) => item.id === (params.value as React.ReactNode) )?.name}</span>
      ),
    },
    {
      field: 'Bank',
      headerName: 'Bank',
      width: 150,
      renderHeader: () => <span className={styles.columnHeader}>Bank</span>,
      renderCell: (params: GridCellParams) => (
          <span className={styles.cell}>{Banks.find((item:any) => item.id === (params.value as React.ReactNode) )?.name}</span>
        ),
      },

      {
        field: 'Bankcode',
        headerName: 'Bankcode',
        width: 150,
        renderHeader: () => <span className={styles.columnHeader}>Bank code</span>,
        renderCell: (params: GridCellParams) => (
            <span className={styles.cell}>{params.value as React.ReactNode}</span>
          ),
        },
      
        {
          field: 'Branch',
          headerName: 'Branch',
          width: 150,
          renderHeader: () => <span className={styles.columnHeader}>Branch</span>,
          renderCell: (params: GridCellParams) => (
              <span className={styles.cell}>{Branch.find((item:any) => item.id === (params.value as React.ReactNode) )?.name}</span>
            ),
          },
    
          {
            field: 'Branchcode',
            headerName: 'Branchcode',
            width: 150,
            renderHeader: () => <span className={styles.columnHeader}>Branch code</span>,
            renderCell: (params: GridCellParams) => (
                <span className={styles.cell}>{params.value as React.ReactNode}</span>
              ),
            },        
    
    {
      field: 'beneficiaryName',
      headerName: 'Beneficiary Name',
      width: 220,
      renderHeader: () => <span className={styles.columnHeader}>Beneficiary Name</span>,
      renderCell: (params: GridCellParams) => (
        <span className={styles.cell}>{params.value as React.ReactNode}</span>
      ),
    },
  
    {
      field: 'accountNumber',
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
debugger
  return (
   
    <div className={styles.table} style={{ height: 360, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.accountNumber}
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


  

