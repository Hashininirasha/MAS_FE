import React from 'react'
import { BootstrapDialog, BootstrapDialogActions, BootstrapDialogContent, BootstrapDialogTitle } from '../../../assets/theme/theme'
import styles from './ShowStatusPopup.module.scss'
import { Box, Step, StepLabel, Stepper } from '@mui/material'
import { SelectedStatusDto } from '../../../utilities/models'
import { CustomButton } from '../../Shared'


const ShowStatusPopup: React.FC<{
  selectedStatus: SelectedStatusDto
  isStatusDialogOpen: boolean
  showStatusPopup(con: boolean): void
}> = (props) => {
  const steps = [
    'Pending',
    'Approved by LM',
    'Approved by TM',
    'Allocated by TM',
    'Redirected by TM'
  ];
  return (
    <BootstrapDialog
      className={styles.dialogCard}
      aria-labelledby="customized-dialog-title"
      open={props.isStatusDialogOpen}
    >
      <BootstrapDialogTitle id="customized-dialog-title"
        onClose={() => props.showStatusPopup(false)}
      >
        {props.selectedStatus.id}
      </BootstrapDialogTitle>
      <BootstrapDialogContent>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </BootstrapDialogContent>
      <BootstrapDialogActions>
        <CustomButton text='Cancel' border='1px solid #6e6e6e' bgColor='#282828' onClick={() => props.showStatusPopup(false)} />
      </BootstrapDialogActions>
    </BootstrapDialog>
  )
}

export default ShowStatusPopup
