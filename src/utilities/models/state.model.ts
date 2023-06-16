import { StateObjectDto } from "./common.model";
import { RequestListDto, ApprovalRequestListDto } from "./request.model";

export interface RequestStateDto {
    addRequest: StateObjectDto<null>,
    editRequest: StateObjectDto<null>,
    requestList: StateObjectDto<RequestListDto[]>,
    approvalRequestList: StateObjectDto<ApprovalRequestListDto[]>,
}

export interface VehicleStateDto {
    getVehicleTypes: StateObjectDto<null>
}

export interface ApplicationStateDto {
    request: RequestStateDto
    vehicle: VehicleStateDto
}