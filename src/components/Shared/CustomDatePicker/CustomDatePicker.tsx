import { Stack } from '@mui/material'
import React from 'react'
import { StyledDatePickerInput, StyledTextField } from '../../../assets/theme/theme'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const CustomDatePicker: React.FC<{
  label: string,
  placeholder?: string,
  required: boolean,
  value: string,
  onChange: any,
}> = ({ label, placeholder, required, value, onChange, ...rest }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <StyledDatePickerInput
          value={value}
          onChange={onChange}
          renderInput={(params) =>
            <StyledTextField
              {...params}
              size='small'
              label={label}
              placeholder={placeholder}
            // required={props.planStandardChartForm.date.isRequired}
            />} />
      </Stack>
    </LocalizationProvider>
  )
}

export default CustomDatePicker
