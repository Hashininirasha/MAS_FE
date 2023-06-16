interface IVehicleadd {
    CompnayName: string,
    VehicleNumber: string,
    VehicleType: string,
    Plant: string,
    Seats: number, 
    CBM:number,
    IncidetnDetails: IIncident[]

}

export interface IIncident {

    Incident:string,
    Date: Date,
    Outcome:string,
    Id:string,
}


export default IVehicleadd;

