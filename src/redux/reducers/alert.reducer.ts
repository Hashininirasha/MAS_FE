import {  COMMON_ACTION_TYPES, REQUEST_ACTION_TYPE } from "../../utilities/constants";
import { AlertActionDto } from '../../utilities/models/alert.model'

const INITIAL_STATE = {
    addRequestAlert: {
        message: null,
        severity: null,
        display: false
    },
    editRequestAlert: {
        message: null,
        severity: null,
        display: false
    },

}

const alertReducer = (state = INITIAL_STATE, action: AlertActionDto) => {
    switch (action.type) {
        case REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.SET_ALERT:
            return {
                ...state,
                addRequestAlert: {
                    ...state.addRequestAlert,
                    message: action.message,
                    severity: action.severity,
                    display: true
                }
            }
        case REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.CLEAR_ALERT:
            return {
                ...state,
                addRequestAlert: {
                    message: null,
                    severity: null,
                    display: false

                }
            }
        default:
            return state
    }
}

export default alertReducer
