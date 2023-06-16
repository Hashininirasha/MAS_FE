import { Box, Grid, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import style from './PackageDetails.module.scss'
import React from 'react'
import { CustomButton, CustomHeaderCell, Stepper } from '../..'
import { StyledTableCell } from '../../../assets/theme/theme'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const PackageDetails: React.FC<{
  onSortHandle(col: string): void
}> = (props) => {
  return (
    <Stepper stepNumber={3} stepTitle={"Package Details"}>
      <section className={style.action}>
        <CustomButton text='Add Package' border='1px solid #6e6e6e' bgColor='#282828' onClick={() => { }} />
      </section>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <section className={style.gridSection}>
            <TableContainer component={Paper} className={style.grid}>
              <Table className={style.table}>
                <TableHead>
                  <TableRow>
                    <CustomHeaderCell width={200} id='passengerName' sortable onSort={props.onSortHandle} >Serial Number</CustomHeaderCell>
                    <CustomHeaderCell width={150} id='dept' >Package Type</CustomHeaderCell>
                    <CustomHeaderCell width={150} id='pickup' >Pickup location</CustomHeaderCell>
                    <CustomHeaderCell width={180} id='drop' >Drop off location</CustomHeaderCell>
                    <CustomHeaderCell width={150} id='drop' >Recipient</CustomHeaderCell>
                    <CustomHeaderCell width={180} id='drop' >Recipient Contact</CustomHeaderCell>
                    <CustomHeaderCell width={150} id='drop' >Instructions</CustomHeaderCell>
                    <CustomHeaderCell width={150} id='drop' >Item Description</CustomHeaderCell>
                    <CustomHeaderCell width={150} id='drop' sortable onSort={props.onSortHandle} >CBM (m)</CustomHeaderCell>
                    <CustomHeaderCell width={150} id='drop' sortable onSort={props.onSortHandle} >Weight</CustomHeaderCell>
                    <CustomHeaderCell width={100} id='actions' >Actions</CustomHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <StyledTableCell >492942</StyledTableCell>
                    <StyledTableCell >Fabric</StyledTableCell>
                    <StyledTableCell >Maharagama</StyledTableCell>
                    <StyledTableCell >Biyagama</StyledTableCell>
                    <StyledTableCell >Janaka Kumara</StyledTableCell>
                    <StyledTableCell >0712345678</StyledTableCell>
                    <StyledTableCell >-</StyledTableCell>
                    <StyledTableCell >Fabric</StyledTableCell>
                    <StyledTableCell >1</StyledTableCell>
                    <StyledTableCell >5 kg</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#282828' }}>
                      <Box className='layout-row'>
                        <Box>
                          <IconButton size='small'>
                            <Tooltip title="Delete">
                              <DeleteOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                            </Tooltip>
                          </IconButton>
                        </Box>
                      </Box>
                    </StyledTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </section>
        </Grid>
      </Grid>
    </Stepper>
  )
}

export default PackageDetails
