import { COMMON_ACTION_TYPES, TRANSPORT_ACTION_TYPE,  } from "../../utilities/constants"
import { ITransportCompanyDTO } from "../../utilities/models/transport.model"

const AddTransportCompany = (payload:ITransportCompanyDTO) => {
    return { type:TRANSPORT_ACTION_TYPE.ADD_TRANSPORT_COMPANY + COMMON_ACTION_TYPES.REQUEST }
}

export const TransportActionType = {
    AddTransportCompany
}



