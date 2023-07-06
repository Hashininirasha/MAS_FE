export interface SummaryGridDetails {
    companyId: number,
    companyName: string,
    registeredNumber: string,
    status: 'Active' | 'Inactive',
    paymentMethod: string,
    address: string,
    phoneNumber: string,
}


export interface ApprovalCompanyListDto {
    companyId: number,
    companyName: string,
    registeredNumber: string,
    status: 'Active' | 'Inactive',
    paymentMethod: string,
    address: string,
    phoneNumber: string,
}