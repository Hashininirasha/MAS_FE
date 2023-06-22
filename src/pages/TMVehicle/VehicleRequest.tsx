import React, { useEffect, useState } from 'react'
import AppLayout from '../../templates/AppLayout/AppLayout'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationStateDto, RequestListDto } from '../../utilities/models'
import { requestActions } from '../../redux/actions'
import TMVehicle from '../../components/TMVehicle/TMVehicle'

const VehicleRequest = () => {

  const dispatch = useDispatch()
  const [requestList, setRequestList] = useState<RequestListDto[]>([])

  const allRequests: RequestListDto[] = useSelector((state: ApplicationStateDto) => state.request.requestList.data)

  // useEffect(() => {
  //   getRequestList()
  // })

  useEffect(() => {
    setRequestList(allRequests)
    console.log("allRequests", allRequests)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allRequests])

  // const getRequestList = async () => {
 
  //   dispatch(requestActions.getRequestsList())
  // }

  return (
    <React.Fragment>
      <AppLayout componentTitle="vehiclerequest">
     <TMVehicle/>

      </AppLayout>
    </React.Fragment>
  )
}

export default VehicleRequest
