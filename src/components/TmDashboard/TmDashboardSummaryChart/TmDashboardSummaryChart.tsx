import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import style from './TmDashboardSummaryChart.module.scss'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from 'react'
import { CustomButton } from '../../Shared';

const TmDashboardSummaryChart = () => {
  return (
    <Grid container spacing={4}>
      <Grid item md={6}>
        <Card className={style.summaryCard}>
          <CardContent>
            <Box className={style.summaryCardTitle}>
              <Box>
                <Typography className={style.main}>
                  Request Summary
                </Typography>
                <Typography className={style.sub}>
                  MAS Active - Linear Intimo
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6}>
        <Card className={style.summaryCard}>
          <CardContent>
            <Box className={style.summaryCardTitle}>
              <Box>
                <Typography className={style.main}>
                  Request Summary
                </Typography>
                <Typography className={style.sub}>
                  By department
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box>
              <CustomButton icon={<CalendarMonthIcon sx={{ fontSize: '20px', color: '#bfbfbf' }} />} bgColor='#323232' text='2023' marginRight='20px' onClick={() => { }} />
              </Box>
            </Box>
            {/* <>
            <ReactECharts option={option} style={{ height: '400px' }} />
            </> */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TmDashboardSummaryChart
