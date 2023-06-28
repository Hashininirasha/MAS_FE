import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

  
  export const getTransportCompanies = createAsyncThunk('get/transportcompanies', async () => {
    const response = await axios.get(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/Transport/GetAllTransportComapanies`)
    const companylist:any[]=response.data;
    return  response.data;
  })


  export const getSBUs = createAsyncThunk('get/SBUs', async (userId: any) => {
    const response = await axios.get(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/User/PassengerDetails?userId${userId}`)
    const SBUList:any[]=response.data;
    return  SBUList;
  })




  export const getBank = createAsyncThunk('get/Bank', async () => {
    const response = await axios.get(`https://mas-tms-dev-api-eastus.azurewebsites.net/api/Transport/GetBankList`)
    const BankList:any[]=response.data;
    return  BankList;
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

 

