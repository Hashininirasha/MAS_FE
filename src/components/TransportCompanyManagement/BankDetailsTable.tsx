import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import styles from './Table.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removePaymentMethodFromList } from '../../redux/reducers/transportcompany.reducer';



interface RowData {
  id: number;
  PaymentMethod: string;
  bank: string;
  BeneficiaryName: string;
  AccountNumber: string;
}

function createData(
  id: number,
  PaymentMethod: string,
  bank: string,
  BeneficiaryName: string,
  AccountNumber: string,
): RowData {
  return { id, PaymentMethod, bank, BeneficiaryName, AccountNumber };
}


export default function DataTable() {
  const dispatch = useDispatch();
 
  const RemovePayment=(event:any)=> {
    dispatch(removePaymentMethodFromList(event));
  }

  const paymentList: any[] = [
    useSelector((state: any) => state.transportCompany.paymentList)
  ];

  

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>bank</TableCell>
            <TableCell>Beneficiary Name</TableCell>
            <TableCell>Account Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentList.map((item:any) => (
            <TableRow key={item.Id}>
              <TableCell>{item.Id}</TableCell>
              <TableCell>{item.PaymentMethod}</TableCell>
              <TableCell>{item.Bank}</TableCell>
              <TableCell>{item.BeneficiaryName}</TableCell>
              <TableCell>{item.AccountNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}