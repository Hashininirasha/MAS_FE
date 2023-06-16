import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, REQUEST_ACTION_TYPE } from "../../utilities/constants";
import { RequestStateDto } from "../../utilities/models";

const INITIAL_STATE: RequestStateDto = {
  addRequest: {
    data: null,
    error: null,
    isLoading: false,
    status: null
  },
  editRequest: {
    data: null,
    error: null,
    isLoading: false,
    status: null
  },
  requestList: {
    data: [],
    error: null,
    isLoading: false,
    status: null
  },
  approvalRequestList: {
    data: [],
    error: null,
    isLoading: false,
    status: null
  }
}

const requestReducer = (state = INITIAL_STATE, action: any) => {
  switch ((action.type)) {
    case REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST:
      return {
        ...state,
        requestList: {
          ...state.requestList,
          isLoading: true,
          status: APP_ACTION_STATUS.LOADING,
          error: null,
          data: null
        }
      }
    case REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.SUCCESS:
      return {
        ...state,
        requestList: {
          ...state.requestList,
          isLoading: false,
          status: APP_ACTION_STATUS.SUCCESS,
          error: null,
          data: action.data
        }
      }
    case REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.ERROR:
      return {
        ...state,
        requestList: {
          ...state.requestList,
          isLoading: false,
          status: APP_ACTION_STATUS.ERROR,
          error: action.error,
          data: null
        }
      }
    case REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.CLEAR:
      return {
        ...state,
        requestList: {
          ...state.requestList,
          isLoading: false,
          status: APP_ACTION_STATUS.INITIAL,
          error: null,
          data: null
        }
      }
    case REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST:
      return {
        ...state,
        approvalRequestList: {
          ...state.approvalRequestList,
          isLoading: true,
          status: APP_ACTION_STATUS.LOADING,
          error: null,
          data: null
        }
      }
    case REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.SUCCESS:
      return {
        ...state,
        approvalRequestList: {
          ...state.approvalRequestList,
          isLoading: false,
          status: APP_ACTION_STATUS.SUCCESS,
          error: null,
          data: action.data
        }
      }
    case REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.ERROR:
      return {
        ...state,
        approvalRequestList: {
          ...state.approvalRequestList,
          isLoading: false,
          status: APP_ACTION_STATUS.ERROR,
          error: action.error,
          data: null
        }
      }
    case REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.CLEAR:
      return {
        ...state,
        approvalRequestList: {
          ...state.approvalRequestList,
          isLoading: false,
          status: APP_ACTION_STATUS.INITIAL,
          error: null,
          data: null
        }
      }
    default:
      return state
  }
}

export default requestReducer