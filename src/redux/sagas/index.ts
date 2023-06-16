import { all } from 'redux-saga/effects'
import requestSaga from './request.saga'
import vehicleSaga from './vehicle.saga'

export default function * rootSaga () {
    yield all([requestSaga(), vehicleSaga()])
}
