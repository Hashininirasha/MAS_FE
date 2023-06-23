interface IVehicleadd {
    CompnayName: string,
    vehicleNo: string,
    VehicleType: string,
    organizationUnitId: string,
    seatCount: number, 
    cbm:number,
    IncidetnDetails: IIncident[]

}

export interface IIncident {

    Incident:string,
    Date: Date,
    outCome:string,
    Id:string,
}


export default IVehicleadd;

