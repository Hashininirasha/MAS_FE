import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import style from './ViewSummary.module.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { RequestSummaryCount } from '../../../utilities/models';
import { StyledStatusApproved, StyledStatusPending, StyledStatusRejected } from '../../../assets/theme/theme';
import { CustomButton } from '../../Shared';

const ViewSummary: React.FC<{
  summary: RequestSummaryCount
}> = (props) => {
  return (
    <section>
      <Grid container spacing={4}>
        <Grid item md={4} >
          <Card className={style.viewSummaryCard}>
            <CardContent>
              <Box className={style.viewSummaryCardDataRow}>
                <Box>
                  <Typography className={style.data}>
                    {props.summary.pending < 10 ? `0${props.summary.pending}` : props.summary.pending}
                  </Typography>
                  <StyledStatusPending>
                    Pending Requests
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

        <Grid item md={4} >
          <Card className={style.viewSummaryCard}>
            <CardContent>
              <Box className={style.viewSummaryCardDataRow}>
                <Box>
                  <Typography className={style.data}>
                    {props.summary.approved < 10 ? `0${props.summary.approved}` : props.summary.approved}
                  </Typography>
                  <StyledStatusApproved>
                    Approved Requests
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

        <Grid item md={4} >
          <Card className={style.viewSummaryCard}>
            <CardContent>
              <Box className={style.viewSummaryCardDataRow}>
                <Box>
                  <Typography className={style.data}>
                    {props.summary.reject < 10 ? `0${props.summary.reject}` : props.summary.reject}
                  </Typography>
                  <StyledStatusRejected>
                    Rejected Requests
                  </StyledStatusRejected>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                  <CustomButton text='This Month' fontSize='10px' icon={<KeyboardArrowDownOutlinedIcon sx={{ fontSize: '15px' }} />} bgColor='#1e1e1e' onClick={() => { }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  )
}

export default ViewSummary
