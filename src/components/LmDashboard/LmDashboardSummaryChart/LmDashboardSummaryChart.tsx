import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import style from './LmDashboardSummaryChart.module.scss'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReactECharts from 'echarts-for-react';
import { CustomButton } from '../../Shared';

const LmDashboardSummaryChart = () => {
  return (
    <Grid container spacing={4}>
      <Grid item md={6}>
        <Card className={style.summaryCard}>
          <CardContent>
            <Box className={style.summaryCardTitle}>
              <Box>
                <Typography className={style.main}>
                  Budget
                </Typography>
                <Typography className={style.sub}>
                  Rs.350,000/mo
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box>
                <CustomButton icon={<CalendarMonthIcon sx={{ fontSize: '20px', color: '#bfbfbf' }} />} bgColor='#323232' text='2023' marginRight='20px' onClick={() => { }} />
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
                  MAS Active - Linear intimo
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box>
                <Typography className={style.sub}>
                  Knitting Department
                </Typography>
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

export default LmDashboardSummaryChart
