import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IpassengerDetails } from '../types/TransportCompanyDto';

  
  export const getTransportCompanies = createAsyncThunk('get/transportcompanies', async () => {
    const response = await axios.get(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/Transport/GetAllTransportComapanies`)
    const companylist:any[]=response.data;
    return  response.data;
  })


  export const getSBUs = createAsyncThunk('get/SBUs', async (userId: number) => {
    const response = await axios.get(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/User/PassengerDetails?userId${userId}`)
    const passengerDetails:IpassengerDetails=response.data;
    return  passengerDetails;
  })




  export const getBank = createAsyncThunk('get/Bank', async () => {
    const response = await axios.get(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/Transport/GetBankList`)
    const BankList:any[]=response.data;
    return  BankList;
  })

  export const getBranch = createAsyncThunk('get/Branch', async () => {
    const response = await axios.get(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/Transport/GetBranchList`)
    const BranchList:any[]=response.data;
    return  BranchList;
  })





  export const insertCompany = createAsyncThunk('posts/createCompany', async (transportcompany:any) => {
    try{
    const response = await axios.post(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/Transport/Create`)
    return response.data;  
    }
    catch(e:any){
       return e;
    }  
  })

 

