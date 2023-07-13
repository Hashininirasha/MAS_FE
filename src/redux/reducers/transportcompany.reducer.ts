import { createSlice } from '@reduxjs/toolkit'
import { getBank, getBranch, getCompanyViewList, getSBUs, getTransportCompanies, insertCompany } from '../../services/transportcompany.service';
import { IpassengerDetails } from '../../types/TransportCompanyDto';


export const TransportCompany = createSlice({
  name: 'TransportCompany',
  initialState: {
    companyName:"",
    companyDetails:[],
    loading:false,
    notificationMessage:"",
    paymentList :[] as any[],  
    // SBUList :[] as any[],  
    BankList:[] as any[],  
    BranchList:[] as any[], 
    passengerDetails:{},
    CompanyViewList:[] as any[],
  },
  reducers: {
   
    getAllCompanyDetails: (state,action) => {
      
      
    },

    // setSBUList: (state, action) => {
    //   state.SBUList = action.payload;
    // },

    setBankList: (state, action) => {
      state.BankList = action.payload;
    },

    setBranchList: (state, action) => {
      state.BranchList = action.payload;
    },

    setpassengerDetails: (state, action) => {
      state.passengerDetails = action.payload;
    },

    setCompanyViewDetails: (state, action) => {
      state.CompanyViewList = action.payload;
    },


    removePaymentMethodFromList:(state,action)=>{
      const { paymentId } = action.payload;
      const index = state.paymentList.findIndex(item => item.id === paymentId);
      if (index !== -1) {
        state.paymentList.splice(index, 1);
      }

    },
    addPaymentMethodList:(state,action)=>{
      state.paymentList.push(action.payload);
    }
    
  },
  extraReducers: (builder) => {
      builder.addCase(getTransportCompanies.fulfilled, (state, action:any) => {
        
      })
      builder.addCase(insertCompany.fulfilled, (state, action:any) => {
        state.loading=false;
      })

      // builder.addCase(getSBUs.fulfilled, (state, action:any) => {
        
      //   state.SBUList = action.payload

      // })

       builder.addCase(getBank.fulfilled, (state, action:any) => {
        
        state.BankList = action.payload

      })

      builder.addCase(getBranch.fulfilled, (state, action:any) => {
        
        state.BranchList = action.payload

      })

      builder.addCase(getSBUs.fulfilled, (state, action:any) => {
        
        state.passengerDetails = action.payload

      })

      builder.addCase(getCompanyViewList.fulfilled, (state, action:any) => {
        
        state.CompanyViewList = action.payload

      })

    }
})

export const {removePaymentMethodFromList, getAllCompanyDetails,addPaymentMethodList} = TransportCompany.actions

export default TransportCompany.reducer


