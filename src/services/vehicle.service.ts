import { AxiosResponse } from "axios";
import { VehicleTypesDto } from "../utilities/models";
import { axiosPrivateInstance } from ".";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getVehicleTypes = (): Promise<AxiosResponse<VehicleTypesDto[]>> => {
    return axiosPrivateInstance.get('/api/Vehicle/VehicleTypes')
}

export const vehicleService = {
    getVehicleTypes
}

export const getPlants = createAsyncThunk('get/Plants', async (companyId: any ) => {
    
    const response = await axios.get(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/Transport/GetAllPlans?companyId=${companyId}`)
    const plantlist:any[]=response.data;
   
    return  response.data;  

     
  })
 

  export const getVehicleType = createAsyncThunk('get/getVehicleType', async () => {
    
    const response = await axios.get(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/Vehicle/VehicleTypes`)
    const VehicleTypelist:any[]=response.data;
    return  response.data;   
  })

  
  export const getCompanyName = createAsyncThunk('get/CompanyName', async () => {
    
    const response = await axios.get(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/Transport/GetAllTransportComapanies`)
    const CompanyNamelist:any[]=response.data;
    return CompanyNamelist;
   
    
  })
 
  export const insertVehicle = createAsyncThunk('posts/vehicle', async (Vehicle:any) => {
    try{
    const response = await axios.post(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/Vehicle/AddVehiclesDetails`)
    return response.data;  
    }
    catch(e:any){
       return e;
    }  
  })
