import { vehicleService } from "../../services/vehicle.service"
import { call, put, takeEvery } from 'redux-saga/effects'
import { AxiosResponse } from 'axios';
import { RequestListDto } from "../../utilities/models";
import { COMMON_ACTION_TYPES, VEHICLE_ACTION_TYPE } from "../../utilities/constants";

function * getVehicleTypes (action: {type: string}) {
    try {
         const vehicleTypes: AxiosResponse<RequestListDto[]> = yield call(vehicleService.getVehicleTypes)
         yield put({
             type: VEHICLE_ACTION_TYPE.GET_VEHICLE_TYPES + COMMON_ACTION_TYPES.SUCCESS,
             data: vehicleTypes.data
         })
    } catch (error) {
        yield put({
            type: VEHICLE_ACTION_TYPE.GET_VEHICLE_TYPES + COMMON_ACTION_TYPES.ERROR,
            error: error
        })
    }
}

function* vehicleSaga() {
    yield takeEvery(VEHICLE_ACTION_TYPE.GET_VEHICLE_TYPES + COMMON_ACTION_TYPES.REQUEST, getVehicleTypes)
}

export default vehicleSaga