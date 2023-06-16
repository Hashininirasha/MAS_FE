import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import style from './LmRequestApprovalSummary.module.scss'
import { StyledStatusApproved, StyledStatusDraft, StyledStatusPending } from '../../../assets/theme/theme'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { CustomButton } from '../../Shared';

const LmRequestApprovalSummary = () => {
  return (
    <Grid container spacing={4}>
      <Grid item md={3} >
        <Card className={style.viewSummaryCard}>
          <CardContent>
            <Box className={style.viewSummaryCardDataRow}>
              <Box>
                <Typography className={style.data}>
                  Sewing Floor 1
                </Typography>
                <StyledStatusDraft>
                  Cost Center
                </StyledStatusDraft>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box>
                <CustomButton isShadow='none' icon={<KeyboardArrowDownOutlinedIcon sx={{ backgroundColor: 'transparent' }} />} onClick={() => { }} bgColor='transparent' />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={3} >
        <Card className={style.viewSummaryCard}>
          <CardContent>
            <Box className={style.viewSummaryCardDataRow}>
              <Box>
                <Typography className={style.data}>
                  300,000.00
                </Typography>
                <StyledStatusPending>
                  Allocated Budget
                </StyledStatusPending>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box>
                <CustomButton text='This Month' fontSize='10px' icon={<KeyboardArrowDownOutlinedIcon sx={{ fontSize: '15px' }} />} bgColor='#1e1e1e' onClick={() => { }} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={3} >
        <Card className={style.viewSummaryCard}>
          <CardContent>
            <Box className={style.viewSummaryCardDataRow}>
              <Box>
                <Typography className={style.data}>
                  158,654.45
                </Typography>
                <StyledStatusApproved>
                  Remaining Budget
                </StyledStatusApproved>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box>
                <CustomButton text='This Month' fontSize='10px' icon={<KeyboardArrowDownOutlinedIcon sx={{ fontSize: '15px' }} />} bgColor='#1e1e1e' onClick={() => { }} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={3} >
        <Card className={style.viewSummaryCard}>
          <CardContent>
            <Box className={style.viewSummaryCardDataRow}>
              <Box>
                <Typography className={style.data}>
                  00 LKR
                </Typography>
                <StyledStatusDraft>
                  Sum of Projected cost
                </StyledStatusDraft>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box>
                <CustomButton text='0' fontSize='10px' bgColor='#1e1e1e' onClick={() => { }} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  )
}

export default LmRequestApprovalSummary
