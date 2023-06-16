import { COMMON_ACTION_TYPES, VEHICLE_ACTION_TYPE } from "../../utilities/constants"

const getVehicleTypes = () => {
    return { type: VEHICLE_ACTION_TYPE.GET_VEHICLE_TYPES + COMMON_ACTION_TYPES.REQUEST }
}

export const vehicleActions = {
    getVehicleTypes
}



