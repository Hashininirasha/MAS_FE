
  export interface ITransportCompanyDTO {
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

