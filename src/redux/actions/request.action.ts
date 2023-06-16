import { COMMON_ACTION_TYPES, REQUEST_ACTION_TYPE } from "../../utilities/constants"

const getRequestsList = () => {
    return { type: REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST }
}
const getApprovalRequestsList = () => {
    return { type: REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST }
}

export const requestActions = {
    getRequestsList,
    getApprovalRequestsList
}