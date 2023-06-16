import { Button, Typography } from '@mui/material'
import React from 'react'

const CustomButton: React.FC<{
  onClick:() => void
  icon?: React.ReactNode;
  text?: string,
  border?: string,
  bgColor?: string,
  isShadow?: string,
  marginRight?: string,
  textDecoration?: string,
  fontSize?: string,
  textColor?: string,
}> = (props) => {
  return (
    <Button style={{ marginLeft: '10px', border: props.border, backgroundColor: props.bgColor, boxShadow: props.isShadow}} variant="contained" onClick={props.onClick}>
      <div className='layout-row'>
        {props.icon && <div style={{ display: 'flex', marginRight: props.marginRight ?? '5px' }} className='icon'>{props.icon}</div>}
        {props.text && <Typography sx={{ color: props.textColor ?? 'white', textTransform: 'none', fontSize: props.fontSize ?? '15px', textDecoration: props.textDecoration ?? "" }}>{props.text}</Typography>}
      </div>
    </Button>
  )
}

export default CustomButton
