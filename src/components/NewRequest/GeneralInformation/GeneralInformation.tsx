import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomDatePicker, CustomTimePicker, Stepper, CustomAutocomplete } from '../..'
import { StyledSwitch, StyledTextField } from '../../../assets/theme/theme'
import style from './GeneralInformation.module.scss'
import { VehicleTypesDto } from '../../../utilities/models'

const GeneralInformation: React.FC<{
  vehicleTypes: VehicleTypesDto[]
}> = (props) => {
  const [value, setValue] = useState("");

  const requestTypes = [
    { label: 'AdHoc', value: 'AdHoc' },
    { label: 'Recurrent', value: 'Recurrent' }
  ];

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Stepper stepNumber={1} stepTitle={"General Information"}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CustomAutocomplete
            label="Request Type"
            placeholder='Select request type'
            required
            options={requestTypes}
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomDatePicker
                value={""}
                label="Departure date"
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTimePicker
                value={""}
                label="Departure at"
                required
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomAutocomplete
            label="Exclude days"
            placeholder='Select dates to exclude'
            required
            options={requestTypes}
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="I want to travel from"
            placeholder='Enter location'
            required
            value={value}
            size='small'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="I want to travel to"
            placeholder='Enter location'
            required
            value={value}
            size='small'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className={style.switchField}>
                <Typography className={style.label}>Return same day</Typography>
                <StyledSwitch />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={style.switchField}>
                <Typography className={style.label}>VIP Trip</Typography>
                <StyledSwitch />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomDatePicker
                value={""}
                label="Return date"
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTimePicker
                value={""}
                label="Return at"
                required
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}/>
        <Grid item xs={12} md={6}>
          <CustomAutocomplete
            label="Approver's department"
            placeholder='Select department'
            required
            options={requestTypes}
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomAutocomplete
            label="Approver"
            placeholder='Select approver'
            required
            options={requestTypes}
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomAutocomplete
            label="Preferred vehicle type"
            placeholder='Select preferred vehicle type'
            required
            options={props.vehicleTypes && props.vehicleTypes.map((v: VehicleTypesDto) => {
              return {label: v.description, value: v.id}
            })}
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}/>
        <Grid item xs={12}>
          <StyledTextField
            label="Purpose"
            placeholder='Enter purpose'
            required
            value={value}
            size='small'
            fullWidth
          />
        </Grid>
      </Grid>
    </Stepper>
  )
}

export default GeneralInformation
