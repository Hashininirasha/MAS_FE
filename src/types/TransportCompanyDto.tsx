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
    PostalCode:string,
    Email:string,
    BankDetails:IPayementDetails[]
   
}


export interface IPayementDetails {


    CurrancyType:string,
    PaymentMethod:string,
    Bank:string,
    Bankcode:string,
    Branch:string,
    Branchcode:string,
    BeneficiaryName:string,
    AccountNumber:string,
    Id:string
   

}


export default ITransportCompany;