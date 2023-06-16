import React, { useEffect } from 'react'
import style from './NewRequest.module.scss'
import { AppLayout } from '../../templates'
import { Box, Typography } from '@mui/material'
import { CustomButton } from '../../components/Shared'
import { GeneralInformation, PackageDetails, PessengerDetails, Suggestions } from '../../components'
import { StyledSwitch } from '../../assets/theme/theme'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationStateDto } from '../../utilities/models'
import { vehicleActions } from '../../redux/actions'

const NewRequest = () => {
  
  const dispatch = useDispatch()

  const vehicleTypes = useSelector((state: ApplicationStateDto) => state.vehicle.getVehicleTypes.data)

  useEffect(() => {
    getInitialData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getInitialData = async () => {
    dispatch(vehicleActions.getVehicleTypes())
  }
  const onSortHandle = (col: string) => {
    // const sorted = filteredList.sort((_prev: any, _next: any) => {
    //   const _prevItem = _prev[col];
    //   const _nextItem = _next[col];

    //   const prev =
    //     typeof _prevItem === "string" ? _prevItem.toUpperCase() : _prevItem;
    //   const next =
    //     typeof _nextItem === "string" ? _nextItem.toUpperCase() : _nextItem;

    //   if (prev < next) {
    //     return -1;
    //   }

    //   if (prev > next) {
    //     return 1;
    //   }

    //   return 0;
    // });

    // if (sortMeta.asc) {
    //   sorted.reverse();
    // }

    // setSortMeta((_sort) => ({ field: col, asc: !_sort.asc }));
    // setFilteredList(sorted);
  };

  return (
    <React.Fragment>
      <AppLayout componentTitle="New Request Creation">
        <section className='page-root'>
          <section className={style.sectionCard}>

            <section className={style.sectionCardHeader}>
              <Typography noWrap component="div" className={style.title}>
                <h3>Transport Requests</h3>
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <div className='layout-row'>
                <CustomButton text='Select seved templates' border='1px solid #6e6e6e' bgColor='#282828' onClick={() => { }} />
              </div>
            </section>

            <section className={style.sectionCardBody}>
              <section className={style.stepperRoot}>
                <GeneralInformation vehicleTypes={vehicleTypes || []} />
                <PessengerDetails onSortHandle={onSortHandle} />
                <PackageDetails onSortHandle={onSortHandle} />
                <Suggestions />
              </section>

              <section className={style.saveAs}>
                <div className={style.switchField}>
                  <Typography className={style.label}>Save as template</Typography>
                  <StyledSwitch />
                </div>
              </section>

              <section className={style.sectionCardFooter}>
                <CustomButton text='Close' textColor='black' bgColor='#bfbfbf' onClick={() => { }} />
                <CustomButton text='Clear' border='1px solid #6e6e6e' bgColor='#282828' onClick={() => { }} />
                <CustomButton text='Save draft' border='1px solid #6e6e6e' bgColor='#282828' onClick={() => { }} />
                <CustomButton text='Send request' onClick={() => { }} />
              </section>
            </section>

          </section>
        </section>
      </AppLayout>
    </React.Fragment>
  )
}

export default NewRequest
