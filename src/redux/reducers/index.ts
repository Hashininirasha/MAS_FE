import { combineReducers } from "redux";
import requestReducer from "./request.reducer";
import vehicleReducer from "./vehicle.reducer";
import transportcompanyReducer from "./transportcompany.reducer";
import ReducerVehicle from "./vehicleadd.reducer"



const rootReducer = combineReducers({
    request: requestReducer,
    vehicle: vehicleReducer,
    transportCompany:transportcompanyReducer,
    ReducerVehicle: ReducerVehicle,
    
})

export default rootReducer