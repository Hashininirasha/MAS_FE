import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, REQUEST_ACTION_TYPE } from "../../utilities/constants";
import { CompanyStateDto} from "../../utilities/models";

const INITIAL_STATE: CompanyStateDto = {
    addCompany: {
    data: null,
    error: null,
    isLoading: false,
    status: null
  },
  editCompany: {
    data: null,
    error: null,
    isLoading: false,
    status: null
  },
  CompanyList: {
    data: [],
    error: null,
    isLoading: false,
    status: null
  },
  approvalCompanyList: {
    data: [],
    error: null,
    isLoading: false,
    status: null
  }
}



const companyReducer = (state = INITIAL_STATE, action: any) => {
  switch ((action.type)) {
    case REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST:
      return {
        ...state,
        requestList: {
          ...state.CompanyList,
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
          ...state.CompanyList,
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
          ...state.CompanyList,
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
          ...state.CompanyList,
          isLoading: false,
          status: APP_ACTION_STATUS.INITIAL,
          error: null,
          data: null
        }
      }
    case REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST:
      return {
        ...state,
        approvalCompanyList: {
          ...state.approvalCompanyList,
          isLoading: true,
          status: APP_ACTION_STATUS.LOADING,
          error: null,
          data: null
        }
      }
    case REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.SUCCESS:
      return {
        ...state,
        approvalCompanyList: {
          ...state.approvalCompanyList,
          isLoading: false,
          status: APP_ACTION_STATUS.SUCCESS,
          error: null,
          data: action.data
        }
      }
    case REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.ERROR:
      return {
        ...state,
        approvalCompanyList: {
          ...state.approvalCompanyList,
          isLoading: false,
          status: APP_ACTION_STATUS.ERROR,
          error: action.error,
          data: null
        }
      }
    case REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.CLEAR:
      return {
        ...state,
        approvalCompanyList: {
          ...state.approvalCompanyList,
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

export default companyReducer