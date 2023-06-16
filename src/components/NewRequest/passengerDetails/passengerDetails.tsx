import { Box, Grid, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { CustomAutocomplete, CustomButton, CustomHeaderCell, Stepper } from '../..'
import { StyledTableCell, StyledTextField } from '../../../assets/theme/theme';
import style from './passengerDetails.module.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const passengerDetails: React.FC<{
  onSortHandle(col: string): void
}> = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState("");

  const requestTypes = [
    { label: 'AdHoc', value: 'AdHoc' },
    { label: 'Recurrent', value: 'Recurrent' }
  ];

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Stepper stepNumber={2} stepTitle={"Pessenger Details"}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <CustomAutocomplete
            label="Passenger name"
            placeholder='Select passenger'
            required
            options={requestTypes}
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <CustomAutocomplete
                label="SBU name"
                placeholder='Select SBU'
                required
                options={requestTypes}
                value={value}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomAutocomplete
                label="Plant name"
                placeholder='Select plant'
                required
                options={requestTypes}
                value={value}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomAutocomplete
                label="Dept name"
                placeholder='Select dept'
                required
                options={requestTypes}
                value={value}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Pickup location"
            placeholder='Enter location'
            required
            value={value}
            size='small'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Drop off location"
            placeholder='Enter location'
            required
            value={value}
            size='small'
            fullWidth
          />
        </Grid>
      </Grid>

      <section className={style.actions}>
        <CustomButton text='Add Multiple locations' border='0px solid #6e6e6e' bgColor='transparent' isShadow='none' textDecoration='underline' onClick={() => { }} />
        <CustomButton text='Clear' textColor='black' bgColor='#bfbfbf' onClick={() => { }} />
        <CustomButton text='Add Passenger' border='1px solid #6e6e6e' bgColor='#282828' onClick={() => { }} />
      </section>

      <section className={style.gridSection}>
        <TableContainer component={Paper} className={style.grid}>
          <Table className={style.table}>
            <TableHead>
              <TableRow>
                <CustomHeaderCell  id='passengerName' sortable onSort={props.onSortHandle} >Passenger Name</CustomHeaderCell>
                <CustomHeaderCell  id='dept' sortable onSort={props.onSortHandle} >Department/SBU</CustomHeaderCell>
                <CustomHeaderCell  id='pickup' sortable onSort={props.onSortHandle} >Pickup from</CustomHeaderCell>
                <CustomHeaderCell  id='drop' sortable onSort={props.onSortHandle} >Drop off at</CustomHeaderCell>
                <CustomHeaderCell width={150} id='actions' >Actions</CustomHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell >Janaka Kumara</StyledTableCell>
                <StyledTableCell >INT</StyledTableCell>
                <StyledTableCell >Biyagama</StyledTableCell>
                <StyledTableCell >Pallekale</StyledTableCell>
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
    </Stepper>
  )
}

export default passengerDetails
