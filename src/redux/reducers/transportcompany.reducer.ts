import { createSlice } from '@reduxjs/toolkit'
import { getBank, getBranch, getSBUs, getTransportCompanies, insertCompany } from '../../services/transportcompany.service';



export const TransportCompany = createSlice({
  name: 'TransportCompany',
  initialState: {
    companyName:"",
    companyDetails:[],
    loading:false,
    notificationMessage:"",
    paymentList :[] as any[],  
    SBUList :[] as any[],  
    BankList:[] as any[],  
    BranchList:[] as any[], 
  },
  reducers: {
   
    getAllCompanyDetails: (state,action) => {
      
      
    },

    setSBUList: (state, action) => {
      state.SBUList = action.payload;
    },

    setBankList: (state, action) => {
      state.BankList = action.payload;
    },

    setBranchList: (state, action) => {
      state.BranchList = action.payload;
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
        state.loading=false
      })

      builder.addCase(getSBUs.fulfilled, (state, action:any) => {
        
        state.SBUList = action.payload

      })

       builder.addCase(getBank.fulfilled, (state, action:any) => {
        
        state.BankList = action.payload

      })

      builder.addCase(getBranch.fulfilled, (state, action:any) => {
        
        state.BranchList = action.payload

      })


    }
})

export const {removePaymentMethodFromList, getAllCompanyDetails,addPaymentMethodList} = TransportCompany.actions

export default TransportCompany.reducer


