import { combineReducers } from "redux";
import requestReducer from "./request.reducer";
import vehicleReducer from "./vehicle.reducer";
import transportcompanyReducer from "./transportcompany.reducer";
import ReducerVehicle from "./vehicleadd.reducer"
import ReducerDriver from "./driveradd.reducer";




const rootReducer = combineReducers({
    request: requestReducer,
    vehicle: vehicleReducer,
    transportCompany:transportcompanyReducer,
    ReducerVehicle: ReducerVehicle,
    ReducerDriver:ReducerDriver,
})

export default rootReducer