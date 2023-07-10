import { AxiosResponse } from 'axios';
import { RequestListDto } from '../../utilities/models';
import { requestService } from '../../services/request.service';
import { call, delay, put, takeEvery } from 'redux-saga/effects'
import { COMPANY_DATA_LIST, COMMON_ACTION_TYPES, REQUEST_ACTION_TYPE} from '../../utilities/constants';

function * getCompanyList (action: {type: string}) {
    try {
        // const requestList: AxiosResponse<RequestListDto[]> = yield call(requestService.getRequestList)
        yield delay(5000);
        yield put({
            type: REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.SUCCESS,
            data: COMPANY_DATA_LIST
        })
    } catch (error) {
        yield put({
            type: REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.ERROR,
            error: error
        })
    }
}
function * getApprovalCompanyList (action: {type: string}) {
    try {
        // const requestList: AxiosResponse<RequestListDto[]> = yield call(requestService.getRequestList)
        yield delay(5000);
        yield put({
            type: REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.SUCCESS,
            data: COMPANY_DATA_LIST
        })
    } catch (error) {
        yield put({
            type: REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.ERROR,
            error: error
        })
    }
}

function* companySaga() {
    yield takeEvery(REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST, getCompanyList)
    yield takeEvery(REQUEST_ACTION_TYPE.GET_TOBE_APPROVAL_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST, getApprovalCompanyList)
}

export default companySaga