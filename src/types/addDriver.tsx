interface IDriverAdd {
    License: any;
    NIC: any;
    DriverName: string,
    TrasportCompany: string,
    IAssignVehicleDetails: IAssignVehicle[],
    IIncidentDetails: IIncident[],
    IPreviousWorksDetails:IPreviousWorks[]


}

export interface IAssignVehicle {

    Plant:string,
    VehicleType: string,
    VehicleNumber:string,
}

export interface IIncident {

    Incident:string,
    Date:Date,
    Outcome:string,
    VehiNumber:string,
}

export interface IPreviousWorks{

    SBU:string,
    FromDate:Date,
    ToDate:Date,
}

export default IDriverAdd;