import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Stack } from '@mui/material';
import { StyledTextField } from '../../../assets/theme/theme';

const CustomTimePicker: React.FC<{
  label: string,
  placeholder?: string,
  required: boolean,
  value: string,
  onChange: any,
}> = ({ label, placeholder, required, value, onChange, ...rest }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <TimePicker
          value={value}
          onChange={onChange}
          renderInput={(params) =>
            <StyledTextField
              {...params}
              size='small'
              label={label}
              placeholder={placeholder}
              required={required}
            />} />
      </Stack>
    </LocalizationProvider>
  )
}

export default CustomTimePicker
