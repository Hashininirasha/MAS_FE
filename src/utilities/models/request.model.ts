export interface RequestListDto {
    requestId: string,
    requestType: string,
    createdFor?: string,
    createdDatetime: string,
    status: 'Pending' | 'Draft' | 'Approved by LM' | 'Rejected',
    VIPTrip: boolean,
    from: string,
    to: string,
    departureDateTime: string,
    returnDateTime: string,
    passengers: string[],
    preferredVehicle: string,
    package: boolean,
    cbm: number,
    purpose: string,
    approver: string,
}

export interface RequestSummaryCount {
    pending: number,
    approved: number,
    reject: number
}

export interface SelectedStatusDto {
    id: string,
    status: string
}

export interface ApprovalRequestListDto {
    requestId: string,
    requestType: string,
    createdBy: string,
    createdUser: string,
    status: 'Pending' | 'Draft' | 'Approved by LM' | 'Rejected',
    projectedCost: number,
    createdDatetime: string,
    sbu: string,
    plant: string,
    department: string,
    from: string,
    to: string,
    departureDateTime: string,
    returnDateTime: string,
    passengerCount: number,
    preferredVehicle: string,
    package: boolean,
    cubicMeterage: number,
    instruction: string,
    purpose: string,
    approver: string,
    cbm?: number,
    redirected?: string,
}