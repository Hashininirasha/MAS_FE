import { createSlice } from '@reduxjs/toolkit';
import { getPlants} from '../../services/vehicle.service';
import {getVehicleType} from "../../services/vehicle.service";


export const ReducerDriver = createSlice({
  name: 'ReducerDriver',
  initialState: {
    vehicleadd:"",
    vehicleDetails:[],
    loading:false,
    notificationMessage:"",
    AssignVehicleList:[] as any[],
    incidentsList:[] as any[],
    previousWorksList:[] as any[],
  },
  reducers: {
   
    getAlldriverDetails: (state,action) => {
     
    },
      
    addAssignVehicleList:(state,action)=>{
      state.AssignVehicleList.push(action.payload);
    },

    addincidentsList:(state,action)=>{
      state.incidentsList.push(action.payload);
    },

    addpreviousWorksList:(state,action)=>{
      state.previousWorksList.push(action.payload);
    }

    
  },


  
  extraReducers: (builder) => {

     
   
    }
})

export const {addAssignVehicleList, addincidentsList, addpreviousWorksList} = ReducerDriver.actions

export default ReducerDriver.reducer

