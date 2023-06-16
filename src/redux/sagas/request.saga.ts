import { AxiosResponse } from 'axios';
import { RequestListDto } from '../../utilities/models';
import { requestService } from '../../services/request.service';
import { call, delay, put, takeEvery } from 'redux-saga/effects'
import { APPROVAL_REQUEST_DATA_LIST, COMMON_ACTION_TYPES, REQUEST_ACTION_TYPE, REQUEST_DATA_LIST } from '../../utilities/constants';

function * getRequestList (action: {type: string}) {
    try {
        // const requestList: AxiosResponse<RequestListDto[]> = yield call(requestService.getRequestList)
        yield delay(5000);
        yield put({
            type: REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.SUCCESS,
            data: REQUEST_DATA_LIST
        })
    } catch (error) {
        yield put({
            type: REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.ERROR,
            error: error
        })
    }
}
function * getApprovalRequestList (action: {type: string}) {
    try {
        // const requestList: AxiosResponse<RequestListDto[]> = yield call(requestService.getRequestList)
        yield delay(5000);
        yield put({
            type: REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.SUCCESS,
            data: APPROVAL_REQUEST_DATA_LIST
        })
    } catch (error) {
        yield put({
            type: REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.ERROR,
            error: error
        })
    }
}

function* requestSaga() {
    yield takeEvery(REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST, getRequestList)
    yield takeEvery(REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST, getApprovalRequestList)
}

export default requestSaga