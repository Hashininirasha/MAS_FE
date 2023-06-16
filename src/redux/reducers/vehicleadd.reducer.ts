import { createSlice } from '@reduxjs/toolkit';
import { getPlants} from '../../services/vehicle.service';
import {getVehicleType} from "../../services/vehicle.service";
import {getCompanyName} from "../../services/vehicle.service";

export const ReducerVehicle = createSlice({
  name: 'ReducerVehicle',
  initialState: {
    vehicleadd:"",
    vehicleDetails:[],
    loading:false,
    notificationMessage:"",
    incidentList :[] as any[]  ,
    plantList:[] as any[],
    VehicleTypelist:[] as any[],
    CompanyNamelist:[] as any[],
    companyId:[] as any[],
  },
  reducers: {
   
    getAllvehicleDetails: (state,action) => {
     
    },
      setPlantList: (state, action) => {
        // state.plantList = action.payload;

        state.companyId = action.payload.companyId;
      },

      setVehicleList: (state, action) => {
        state.VehicleTypelist = action.payload;
      },

      setCompnayList: (state, action) => {
        state.CompanyNamelist = action.payload;
      },
    

    removeIncidentFromList:(state,action)=>{
      const { incidentId } = action.payload;
      const index = state.incidentList.findIndex(item => item.id === incidentId);
      
      if (index !== -1) {
        
        state.incidentList.splice(index, 1);
      }

    },
    addIncidentMethodList:(state,action)=>{
      state.incidentList.push(action.payload);
    }
    
  },


  
  extraReducers: (builder) => {

      builder.addCase(getPlants.fulfilled, (state, action:any) => {
       
        state.plantList = action.payload
      

      })

      builder.addCase(getVehicleType.fulfilled, (state, action:any) => {
        
        state.VehicleTypelist = action.payload

      })
      builder.addCase(getCompanyName.fulfilled, (state, action:any) => {
        
        state.CompanyNamelist = action.payload

      })
   
    }
})

export const {addIncidentMethodList, removeIncidentFromList} = ReducerVehicle.actions

export default ReducerVehicle.reducer

