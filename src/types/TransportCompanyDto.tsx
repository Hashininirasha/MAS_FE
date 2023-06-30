interface ITransportCompany {
    transCompany: string,
    registeredNumber: string,
    attachedSBUs: string,
    telephoneNumber: string,
    addressLine1: string,
    addressLine2: string,
    city: string
    district: string,
    province:string,
    postalCode:string,
    email:string,
    BankDetails:IPayementDetails[]
   
}


export interface IPayementDetails {


    CurrancyType:string,
    PaymentMethod:string,
    Bank:string,
    Bankcode:string,
    Branch:string,
    Branchcode:string,
    beneficiaryName:string,
    accountNumber:string,
    Id:string
   

}


export interface IpassengerDetails{
    email: string,
    contactNumber:string,
    nic:string,
    Data:IData_passengerDetails[]

}

interface IData_passengerDetails{
    id:number,
    type: number,
    name:string,
}


export interface IcompanyGridDetails {
    companyId: number,
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

export default ITransportCompany;