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


export default ITransportCompany;