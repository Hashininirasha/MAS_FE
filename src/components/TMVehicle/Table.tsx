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
import styles from './Table.module.scss'
import { useDispatch, useSelector } from 'react-redux';

function createData(
  id: number,
  incident: string,
  date: Date,
  outcome: string,
  
 
) {
  return { id, incident, date, outcome,  };
}

const initialRows = [
  createData(1, "Cited for speeding",new Date('2023-07-22'), "Driver Suspended"),
 
];




export default function DataTable() {

  const dispatch = useDispatch();
  const incidentMethods = useSelector((state:any) => state.ReducerVehicle.incidentList);

 

  const [orderBy, setOrderBy] = React.useState('');
  const [order, setOrder] = React.useState<'asc' | 'desc' | undefined>(undefined);
  const [rows, setRows] = React.useState(initialRows);

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
      return [...rows].sort(comparator);
    }
    return rows;
  }, [orderBy, order, rows]);


  

  return (

    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table" className={styles.table}>
        <TableHead >
          <TableRow className={styles.tableHeader}>

          <TableCell>
            <TableSortLabel
                active={orderBy === 'id'}
                direction={orderBy === 'id' ? order : undefined}
                onClick={() => handleSortRequest('id')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
              >
                #
              </TableSortLabel>
            </TableCell>
           
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
          {sortedRows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                 <TableCell component="th" scope="row" className={styles.table}>
                {/* {row.id} */}
                rows={incidentMethods.id}
              </TableCell>





          <TableCell className={styles.table}>{row.incident}</TableCell>
              <TableCell className={styles.table}>{row.date.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}</TableCell>

              <TableCell className={styles.table}>{row.outcome}</TableCell>
           
      
                
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
