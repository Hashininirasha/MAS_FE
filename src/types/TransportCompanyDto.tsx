interface ITransportCompany {
    CompanyName: string,
    RegisteredNumber: string,
    AttachedSBU: string,
    TelephoneNumber: string,
    AddressLine1: string,
    AddressLine2: string,
    City: string
    District: string,
    Province:string,
    PostalCode:string
    BankDetails:IPayementDetails[]
   
}


export interface IPayementDetails {

    PaymentMethod:string,
    Bank:string,
    BeneficiaryName:string,
    AccountNumber:string,
    Id:string
}


export default ITransportCompany;