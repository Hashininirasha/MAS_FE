import React, { useEffect, useState } from 'react'
import AppLayout from '../../templates/AppLayout/AppLayout'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationStateDto, RequestListDto } from '../../utilities/models'
import { requestActions } from '../../redux/actions'
import NewUser from '../../components/UserProfile/NewUser'

const UserProfile = () => {

  const dispatch = useDispatch()
  const [requestList, setRequestList] = useState<RequestListDto[]>([])

  const allRequests: RequestListDto[] = useSelector((state: ApplicationStateDto) => state.request.requestList.data)

  useEffect(() => {
    getRequestList()
  })

  useEffect(() => {
    setRequestList(allRequests)
    console.log("allRequests", allRequests)
  }, [allRequests])

  const getRequestList = async () => {
 
    dispatch(requestActions.getRequestsList())
  }

  return (
    <React.Fragment>
      <AppLayout componentTitle="UserProfile">
     <NewUser/>

      </AppLayout>
    </React.Fragment>
  )
}

export default UserProfile;
