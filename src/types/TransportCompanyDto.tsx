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


    currency:string,
    paymentMethod:string,
    bank:string,
    Bankcode:string,
    branch:string,
    Branchcode:string,
    beneficiaryName:string,
    accountNumber:string,
    Id:string
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













export default ITransportCompany;