import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, VEHICLE_ACTION_TYPE } from "../../utilities/constants";
import { VehicleStateDto } from "../../utilities/models";

const INITIAL_STATE: VehicleStateDto = {
  getVehicleTypes: {
    data: null,
    error: null,
    isLoading: false,
    status: null
  }
}

const vehicleReducer = (state = INITIAL_STATE, action: any) => {
  switch ((action.type)) {
    case VEHICLE_ACTION_TYPE.GET_VEHICLE_TYPES + COMMON_ACTION_TYPES.REQUEST:
      return {
        ...state,
        getVehicleTypes: {
          ...state.getVehicleTypes,
          isLoading: true,
          status: APP_ACTION_STATUS.LOADING,
          error: null,
          data: null
        }
      }
    case VEHICLE_ACTION_TYPE.GET_VEHICLE_TYPES + COMMON_ACTION_TYPES.SUCCESS:
      return {
        ...state,
        getVehicleTypes: {
          ...state.getVehicleTypes,
          isLoading: false,
          status: APP_ACTION_STATUS.SUCCESS,
          error: null,
          data: action.data
        }
      }
    case VEHICLE_ACTION_TYPE.GET_VEHICLE_TYPES + COMMON_ACTION_TYPES.ERROR:
      return {
        ...state,
        getVehicleTypes: {
          ...state.getVehicleTypes,
          isLoading: false,
          status: APP_ACTION_STATUS.ERROR,
          error: action.error,
          data: null
        }
      }
    case VEHICLE_ACTION_TYPE.GET_VEHICLE_TYPES + COMMON_ACTION_TYPES.CLEAR:
      return {
        ...state,
        getVehicleTypes: {
          ...state.getVehicleTypes,
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

export default vehicleReducer