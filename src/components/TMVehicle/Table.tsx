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

interface RowData {
  id: number;
  incident: string;
  date: Date;
  outcome: string;
}

function createData(
  id: number,
  incident: string,
  date: Date,
  outcome: string,
): RowData {
  return { id, incident, date, outcome };
}



export default function DataTable() {
  const dispatch = useDispatch();

  // debugger
  // const incidentList = useSelector((state: any) => state.ReducerVehicle.incidentList);
  const incidentList: any[] = [
    useSelector((state: any) => state.ReducerVehicle.incidentList)
  ];

  const listArray: RowData[] = [];


  // const [rows, setRows] = React.useState<RowData[]>(listArray);


  // React.useEffect(() => {
  //   if (incidentList) {
  
  //     const formattedData = incidentList.map((item: any) => {
  //       const formattedDate = new Date(item.date);
  //       return createData(item.id, item.incident, formattedDate, item.outcome);
  //     });

  //     // const listArray: RowData[] = [...formattedData];
  //     // setRows(listArray);
  //   }
  // }, [incidentList]);

  

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Incident</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Outcome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidentList.map((item:any) => (
            <TableRow key={item.Id}>
              <TableCell>{item.Id}</TableCell>
              <TableCell>{item.Incident}</TableCell>
              <TableCell>{item.Date}</TableCell>
              <TableCell>{item.Outcome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
