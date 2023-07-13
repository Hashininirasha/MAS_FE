interface ITransportCompany {
    transCompany: string,
    registeredNumber: string,
    attachedSBU: string,
    telephoneNumber: string,
    addressLine1: string,
    addressLine2: string,
    city: string
    district: string,
    province:string,
    postalCode:string,
    email:string,
    bankDetails:IPayementDetails[]
   
}


export interface IPayementDetails {


    currency:string,
    paymentMethod:number,
    bank:number,
    // Bankcode:string,
    branch:number,
    // Branchcode:string,
    beneficiaryName:string,
    accountNumber:string,
    // Id:string
    isActive: boolean,
   

}


export interface IpassengerDetails{
    email: string,
    contactNumber:string,
    nic:string,
    data:IData_passengerDetails[]

}

interface IData_passengerDetails{
    id:number,
    type: number,
    name:string,
}



export interface ICompnayViewDetails {


    id:number,
    companyId: number,
    companyName: string,
    registeredNumber: string,
    status: 'Active' | 'Inactive',
    paymentMethod: string,
    address: string,
    phoneNumber: string,
    sbu: Isbu_details[]
   

}

interface Isbu_details{
    id: number,
    name: string
}










export default ITransportCompany;