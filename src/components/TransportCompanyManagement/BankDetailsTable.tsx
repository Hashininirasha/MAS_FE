import React, { useEffect } from 'react';
import styles from './BankDetailsTable.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';
import { useSelector, useDispatch } from 'react-redux';
import { removePaymentMethodFromList } from '../../redux/reducers/transportcompany.reducer';
import { getBank } from '../../services/transportcompany.service';
import store from '../../redux/store';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';

export default function DataTable() {
  const dispatch = useDispatch();

  const paymentMethods = useSelector((state: any) => state.transportCompany.paymentList);

  const RemovePayment = (event: any) => {
    dispatch(removePaymentMethodFromList(event));
  };

  const currancyTypeArray = [{ id: 'LKR'}, { id: 'USD'}];
  console.log('currancyTypeArray', currancyTypeArray);

  const paymentMethodArray = [{ id: 1, name: 'Cash Check' }, { id: 2, name: 'Bank Transfer' }];

  const bankList = useSelector((state: any) => state.transportCompany.BankList);
  const bankArray = bankList.map((bank: any) => bank);
  console.log('bankArray', bankArray);

  const branchList = useSelector((state: any) => state.transportCompany.BranchList);
  const branchArray = branchList.map((branch: any) => branch);
  console.log('branchArray', branchArray);

  useEffect(() => {
    store.dispatch(getBank());
  }, []);

  return (
    <div className={styles.table}>
      <Paper elevation={0} className={styles.tableWrapper}>
        <Table aria-label="simple table" className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Currency Type</th>
              <th className={styles.tableHeader}>Payment Method</th>
              <th className={styles.tableHeader}>Bank</th>
              <th className={styles.tableHeader}>Bank Code</th>
              <th className={styles.tableHeader}>Branch</th>
              <th className={styles.tableHeader}>Branch Code</th>
              <th className={styles.tableHeader}>Beneficiary Name</th>
              <th className={styles.tableHeader}>Account Number</th>
              <th className={styles.tableHeader}>Action</th>
              <th className={styles.tableHeader}>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentMethods.map((method: any) => (
              <tr key={method.accountNumber}>
                <td className={styles.cell}>{currancyTypeArray.find((item: any) => item.id === method.currency)?.id}</td>
                <td className={styles.cell}>{paymentMethodArray.find((item: any) => item.id === method.paymentMethod)?.name}</td>
                <td className={styles.cell}>{bankArray.find((item: any) => item.id === method.bank)?.bankName}</td>
                <td className={styles.cell}>{bankArray.find((item: any) => item.id === method.bank)?.code}</td>
                <td className={styles.cell}>{branchArray.find((item: any) => item.id === method.branch)?.name}</td>
                <td className={styles.cell}>{branchArray.find((item: any) => item.id === method.branch)?.code}</td>
                <td className={styles.cell}>{method.beneficiaryName}</td>
                <td className={styles.cell}>{method.accountNumber}</td>
                <td className={styles.cell}>
                  <DeleteIcon onClick={() => RemovePayment(method.accountNumber)} className={styles.deleteIcon} />
                </td>
                <td className={styles.cell}>
                  <Switch defaultChecked checked={method.status} onChange={() => {}} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </div>
  );
}
