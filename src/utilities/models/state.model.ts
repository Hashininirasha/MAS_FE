import { StateObjectDto } from "./common.model";
import { ApprovalCompanyListDto, summaryGridDetailsDto } from "./companysummary.model";
import { RequestListDto, ApprovalRequestListDto,  } from "./request.model";

export interface RequestStateDto {
    addRequest: StateObjectDto<null>,
    editRequest: StateObjectDto<null>,
    requestList: StateObjectDto<RequestListDto[]>,
    approvalRequestList: StateObjectDto<ApprovalRequestListDto[]>,

}

export interface VehicleStateDto {
    getVehicleTypes: StateObjectDto<null>
}

export interface CompanyStateDto{
    addCompany: StateObjectDto<null>,
    editCompany: StateObjectDto<null>,
    CompanyList: StateObjectDto<summaryGridDetailsDto[]>,
    approvalCompanyList: StateObjectDto<ApprovalCompanyListDto[]>,
}

export interface ApplicationStateDto {
    request: RequestStateDto
    vehicle: VehicleStateDto
    company:CompanyStateDto
}


