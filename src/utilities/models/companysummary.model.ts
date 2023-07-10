export interface summaryGridDetailsDto {
    id:number,
    companyId: number,
    companyName: string,
    registeredNumber: string,
    status: 'Active' | 'Inactive',
    paymentMethod: string,
    address: string,
    phoneNumber: string,
    sbu: {
        id: number,
        name: string
      }
}


export interface ApprovalCompanyListDto {
    id:number,
    companyId: number,
    companyName: string,
    registeredNumber: string,
    status: 'Active' | 'Inactive',
    paymentMethod: string,
    address: string,
    phoneNumber: string,
    sbu: {
        id: number,
        name: string
      }
}