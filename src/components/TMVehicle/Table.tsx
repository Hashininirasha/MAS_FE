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


  const [orderBy, setOrderBy] = React.useState('');
  const [order, setOrder] = React.useState<'asc' | 'desc' | undefined>(undefined);
  // const [rows, setRows] = React.useState(incidentList);

  const handleSortRequest = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrderBy(property);
    setOrder(isAsc ? 'desc' : 'asc');
  };

  const sortedRows = React.useMemo(() => {
    const comparator = (a: any, b: any) => {
      if (order === 'asc') {
        return a[orderBy] > b[orderBy] ? 1 : -1;
      } else {
        return a[orderBy] < b[orderBy] ? 1 : -1;
      }
    };

    if (orderBy) {
      return [...incidentList].sort(comparator);
    }
    return incidentList;
  }, [orderBy, order, incidentList]);

  const [idCounter, setIdCounter] = React.useState(1);

  const handleIncrementId = () => {
    setIdCounter(prevCounter => prevCounter + 1);
  };

  return (
    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table" className={styles.table}>
        <TableHead >
          <TableRow className={styles.tableHeader}>

           
            <TableCell>
              <TableSortLabel 
                active={orderBy === 'incident'}
                direction={orderBy === 'incident' ? order : undefined}
                onClick={() => handleSortRequest('incident')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
                
              >
               Incident
              </TableSortLabel>
              </TableCell>
              <TableCell>
              <TableSortLabel
                active={orderBy === 'date'}
                direction={orderBy === 'date' ? order : undefined}
                onClick={() => handleSortRequest('date')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
              >
                Date
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'outcome'}
                direction={orderBy === 'outcome' ? order : undefined}
                onClick={() => handleSortRequest('outcome')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
              >
                Outcome
              </TableSortLabel>
            </TableCell>    
          </TableRow>
        </TableHead>
        <TableBody>
        
              { sortedRows.map && incidentList.map((item:any) => (
                <TableRow key={item.Id}>
                  <TableCell className={styles.table}>{item.Incident}</TableCell>
                  <TableCell className={styles.table}>{item.Date}</TableCell>
                  <TableCell className={styles.table}>{item.Outcome}</TableCell>
                </TableRow>
              ))}
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}