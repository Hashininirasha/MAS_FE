import { Autocomplete, Box, Button, FormControl, Grid,  InputLabel, MenuItem, Select, TextField, Typography, createFilterOptions } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from './TransportCompanyManagementGrid.module.scss';
import store from '../../redux/store';
import ITransportCompany, { IPayementDetails } from '../../types/TransportCompanyDto';
import { getBank, getBranch, getSBUs, insertCompany } from '../../services/transportcompany.service';
import { AppLayout } from '../../templates';
import DataTable from './BankDetailsTable';
import { useDispatch, useSelector } from 'react-redux';
import { addPaymentMethodList } from '../../redux/reducers/transportcompany.reducer';
import { useNavigate } from 'react-router-dom';

import { APP_ROUTES, ORGANIZATION_UNIT_TYPES } from '../../utilities/constants';


const BankDetailsList:IPayementDetails[]=[]

export  const TransportCompanyInsertGrid = () => {

  useEffect(() => {

  }, []);

  const [sbu, setSbu] = useState('')

  const [bank, setbank] = useState('')
  const dispatch = useDispatch();

  const [userId, setuserId] = useState(0)

  // const SBUList=useSelector((state: any) => state.TransportCompany.SBUList);

  const BankList=useSelector((state: any) => state.transportCompany.BankList);

  const BranchList=useSelector((state: any) => state.transportCompany.BranchList);

  // const SBUList=useSelector((state: any) => state.transportCompany.SBUList);

  const passengerDetails=useSelector((state: any) => state.transportCompany.passengerDetails);


  // const [value, setValue] = React.useState<FilmOptionType | null>(null);
  useEffect(() => {

    store.dispatch(getBank());

    store.dispatch(getBranch());

    store.dispatch(getSBUs(16));
  }, [16]);

  const navigate = useNavigate();

  
  
  
  const [selectedOption, setSelectedOption] = useState('');
  const [CurrancyType, setCurrancyType] = useState('');
  const [PaymentMethod, setPaymentMethod] = useState('');
  // const [Bankcode, setBankcode] = useState('');
  // const [Branch, setBranch] = React.useState<FilmOptionType | null>(null);
  // const [Branchcode, setBranchcode] = useState('');
  const currancyTypearray = [{id:"LKR",name:"LKR"},{id:"USD",name:"USD"}]


  const [SBUisPlaceholderVisible, setSBUIsPlaceholderVisible] = React.useState(true);
  const [CurrancyTypeisPlaceholderVisible, setCurrancyTypeIsPlaceholderVisible] = React.useState(true);
  const [PayMethodisPlaceholderVisible, setPayMethodIsPlaceholderVisible] = React.useState(true);
  const [BankisPlaceholderVisible, setBankIsPlaceholderVisible] = React.useState(true);
  const [BranchisPlaceholderVisible, seBranchIsPlaceholderVisible] = React.useState(true);
  const [BankcodeSample, setBankcodeSample] = useState('');

  const paymentDetailsInitial: IPayementDetails={
   
    bank:0,
    beneficiaryName:"",
    accountNumber:"",
    // Id:"",
    currency:"",
    paymentMethod:0,
    // Bankcode:"",
    branch:0,
    // Branchcode:"",
    isActive: true,

  }

  const payments: IPayementDetails={
   
    bank:0,
    beneficiaryName:"",
    accountNumber:"",
    // Id:"",
    currency:"",
    paymentMethod:0,
    // Bankcode:"",
    branch:0,
    // Branchcode:"",
    isActive: true,
  }

  const transportCompany: ITransportCompany = {
    transCompany: "",
    registeredNumber: "",
    attachedSBU: sbu,
    telephoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    district: "",
    province:"",
    postalCode:"",
    email:"",
    bankDetails:BankDetailsList
  };

  const [transportCompanyData, settransportCompanyData] = useState({
    transCompany: transportCompany.transCompany,
    city: transportCompany.city,
    registeredNumber:transportCompany.registeredNumber,
    telephoneNumber:transportCompany.telephoneNumber,
    addressLine2:transportCompany.addressLine2,
    addressLine1:transportCompany.addressLine1,
    district: transportCompany.district,
    bankDetails: BankDetailsList,
    postalCode:transportCompany.postalCode,
    province:transportCompany.province,
    attachedSBU:transportCompany.attachedSBU,
    email:transportCompany.email,
    
  });

  const handleSave = () => {
    // console.log("transportCompanyData", transportCompanyData)
    store.dispatch(insertCompany(transportCompanyData));
    navigate(APP_ROUTES.MANAGE_TRANSPORT_COMPANIES);
   debugger

  };

  const [payementData, setPayementData] = useState({

    bank:payments.bank, 
    beneficiaryName:payments.beneficiaryName,
    accountNumber:payments.accountNumber,
    // Id: "",
    currency:payments.currency,
    paymentMethod:payments.paymentMethod,
    // Bankcode:payments.Bankcode,
    branch:payments.branch,
    // Branchcode:payments.Branchcode,
    isActive:payments.isActive,

  });

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    settransportCompanyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));


    setuserId (event.target.value) ;

    store.dispatch(getSBUs(userId));
  };




  const handlePaymentDetailChange = (event: any) => {
    const { name, value } = event.target;

  
    setPayementData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  

  };
  

  const AddPaymentDetails=()=>{
    // payementData.accountNumber=new Date().getUTCMilliseconds().toString();
    BankDetailsList.push(payementData);
    setPayementData(paymentDetailsInitial);
    settransportCompanyData((prevState) => ({
      ...prevState,
      bankDetails: BankDetailsList,
    }));
    dispatch(addPaymentMethodList(payementData));
    
  }

  const ClearPaymentDetails=()=>{
    setPayementData(paymentDetailsInitial);
  }

  const [SBUvalue, setSBUValue] = useState(null);

  useEffect(() => {
    if (passengerDetails && passengerDetails.data) {
      const foundValue = passengerDetails.data.find((a:any) => a.type === ORGANIZATION_UNIT_TYPES.SBU);
  
      if (foundValue) {
        setSBUValue(foundValue);
        settransportCompanyData((prevData) => ({
          ...prevData,
          attachedSBU: foundValue.id,
        }));
      } else {
        setSBUValue(null);
        settransportCompanyData((prevData) => ({
          ...prevData,
          attachedSBU: '',
        }));
      }
    }
  }, [passengerDetails]);


  return (
<React.Fragment>
<AppLayout componentTitle="Manage Templates">
 <section className="page-root">
    <div>
      <section className={style.gridContainer}>
        <div className={style.gridHeader}>
          <Typography
            noWrap
            component="div"
            className={style.gridTitle}
          >
            <h3>Manage Transport Companies</h3>
          </Typography>  
        </div>
        <hr />
        <div className={style.gridHeader}>
          <Box sx={{ flexGrow: 1 }} />

        </div>
    <div> 


    </div>
   
      <div> 
    </div>

    <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
<h4 className={style.textboxtitle}>Company Name</h4>

          <TextField
            id="compnayname"
            variant="outlined"
            className={style.textboxinput}
            name="transCompany"
            value={transportCompanyData.transCompany}
            onChange={handleChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter Compnay Name',
            }}
          />

</Grid>


<Grid item md={6} xs={6} sm={12}>
<h4 className={style.textboxtitle}>Registered Number</h4>


          <TextField
            id="reg_num"
            variant="outlined"
            className={style.textboxinput}
            value={transportCompanyData.registeredNumber}
            name="registeredNumber"
            onChange={handleChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter Registered Number',
            }}
          />

</Grid>

</Grid>

  
<Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>

<h4 className={style.dropdownName}>Attached SBUs</h4>

<TextField
            id="Sbu"
            variant="outlined"
            className={style.textboxinput}
            value={transportCompanyData.attachedSBU}
            name="attachedSBU"
            onChange={handleChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
             
            }}
          />

  {/* <div>
      {passengerDetails && passengerDetails.data && (
        <p>{passengerDetails.data.find((a: any) => a.type === ORGANIZATION_UNIT_TYPES.SBU)?.name}</p>
      )}
    </div> */}
{/* <div>
      {value && (
        <p>Value: {value.name}</p>
      )}
    </div> */}


</Grid>

<Grid item md={6} xs={6} sm={12}>

<h4 className={style.textboxtitle}>Telephone Number</h4>
<FormControl className={style.styleright}>

          <TextField
            id="tele_num"
            variant="outlined"
            className={style.textboxinput}
            value={transportCompanyData.telephoneNumber}
            name="telephoneNumber"
            onChange={handleChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter Telephone Number',
            }}
          />
</FormControl>
      </Grid>
      </Grid>


      <Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>

<h4 className={style.dropdownName}>Email</h4>
<TextField
            id="reg_num"
            variant="outlined"
            className={style.textboxinput}
            value={transportCompanyData.email}
            name="email"
            onChange={handleChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter E-mail Address',
            }}
          />
</Grid>

<Grid item md={6} xs={6} sm={12}>


      </Grid>
      </Grid>

<br></br>
<hr></hr>

      <div className={style.gridHeader}>
       <h3 className={style.subtitle}>Address</h3> 
      </div>


   
<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
    
    
<h4 className={style.textboxtitle}>Address Line 1</h4>
<FormControl className={style.styleleft}>
          <TextField
            id="tele_num"
            variant="outlined"
            name="addressLine1"
            className={style.textboxinput}
            value={transportCompanyData.addressLine1}
            onChange={handleChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter Address Line 1',
            }}
          />
</FormControl>

</Grid>

<Grid item md={6} xs={6} sm={12}>
   
          <h4 className={style.textboxtitle}>Address Line 2</h4>
          
          <TextField
            id="outcome"
            variant="outlined"
            className={style.textboxinput}
            name="addressLine2"
            value={transportCompanyData.addressLine2}
            onChange={handleChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter Address Line 2',
            }}
          />

    </Grid>
    </Grid>
   
    

 
    <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
  
      
 
          <h4 className={style.textboxtitle}>City</h4>
          
          <TextField
            id="tele_num"
            variant="outlined"
            name="city"
            className={style.textboxinput}
            value={transportCompanyData.city}
            onChange={handleChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter city',
            }}
          />


</Grid>

<Grid item md={6} xs={6} sm={12}>
   
          <h4 className={style.textboxtitle} >District</h4>
          
          <TextField
            id="outcome"
            variant="outlined"
            className={style.textboxinput}
            name="district"
            value={transportCompanyData.district}
            onChange={handleChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter district',
            }}
          />
       
</Grid>


    
</Grid>
 
    

<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
  
  

<h4 className={style.textboxtitle}>Province</h4>
         
          <TextField
            id="tele_num"
            variant="outlined"
            className={style.textboxinput}
            name="province"
            value={transportCompanyData.province}
            onChange={handleChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter province',
            }}
          />


</Grid>

<Grid item md={6} xs={6} sm={12}>
   
          
<h4 className={style.textboxtitle}>Postal Code</h4>
          
          <TextField
            id="outcome"
            variant="outlined"
            className={style.textboxinput}
            name="postalCode"
            value={transportCompanyData.postalCode}
            onChange={handleChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter Postal Code',
            }}
          />
      
  
  </Grid>
    
</Grid>  
 

  <br></br>
  <hr></hr>

  <div className={style.gridHeader}>
       <h3 className={style.subtitle}>Payment Details</h3> 
      </div>



      <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
  
<Grid container spacing={2}>


      {/* Small Section */}
      <Grid item md={6} sm={6} xs={12}>
      <h4 className={style.dropdownName}>Currancy Type</h4>
      <FormControl
         
         className={style.dropdownformCurrancy}
  sx={{
    '& .MuiSelect-select': {
      color: 'white',
      '&:hover, &:focus': {
        color: 'white',
      },
    },
    '& .MuiSelect-icon': { color: 'white' },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': { borderColor: 'white' },
      '&:hover fieldset, &:focus fieldset': { borderColor: 'white' },
    },
    '& .MuiMenuItem-root': {
      color: 'white',
      '&:hover, &:focus': {
        backgroundColor: 'white',
      },
    },
  }}
>
  <InputLabel
    id="currancyTypearray"
    className={style.dropdownform}
    shrink={!CurrancyTypeisPlaceholderVisible}
   
  >
    {CurrancyTypeisPlaceholderVisible ? 'Select CurrancyType' : ''}
  </InputLabel>
  <Select
  labelId="option1-label"
  id="currancyTypearray"
  value={payementData.currency}
  onChange={handlePaymentDetailChange}
  name="currency"
  onClick={() => { setCurrancyTypeIsPlaceholderVisible(false) }}
>
{currancyTypearray.map((currancyTypearray:any) => (
      <MenuItem key={currancyTypearray.id} value={currancyTypearray.id}>
        {currancyTypearray.name}
      </MenuItem>
))}
</Select>

</FormControl>
      </Grid>

     
    </Grid>
{/* <p>Selected option: {getPaymentMethodName(selectedOption)}</p> */}
     
</Grid>

<Grid item md={6} xs={6} sm={12}>

<Grid container spacing={2}>
      <Grid item md={6} sm={6} xs={12}>
 
         
      <h4 className={style.dropdownName}>Payment method</h4>

<FormControl className={style.dropdownformCurrancyselector}
     
  sx={{
    '& .MuiSelect-select': {
      color: 'white',
      '&:hover, &:focus': {
        color: 'white',
      },
    },
    '& .MuiSelect-icon': { color: 'white' },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': { borderColor: 'white' },
      '&:hover fieldset, &:focus fieldset': { borderColor: 'white' },
    },
    '& .MuiMenuItem-root': {
      color: 'white',
      '&:hover, &:focus': {
        backgroundColor: 'white',
      },
    },
  }}
>
  <InputLabel
    id="paymentmethod"
  
    shrink={!PayMethodisPlaceholderVisible}
    className={style.dropdownInput}
  >
    {PayMethodisPlaceholderVisible ? 'Select Payment method' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={payementData.paymentMethod}
    name="paymentMethod"
    onChange={handlePaymentDetailChange}
    onClick={()=>{setPayMethodIsPlaceholderVisible(false)}}
  >
   <MenuItem value={1} id="Cash_Check">Cash Check</MenuItem>
    <MenuItem value={2} id="Bank_Transfer">Bank Transfer</MenuItem>

  </Select>
</FormControl>
      </Grid>
  
    </Grid>
</Grid>  
    </Grid>  
   

    
  

      <Grid container spacing={2}>
      {payementData.paymentMethod !== 1 && (
        <Grid item md={6} xs={12} sm={12}>
  <Grid container spacing={2}>
    <Grid item md={6} sm={12} xs={12}>
      <h4 className={style.dropdownName}>Bank</h4>
      <FormControl className={style.dropdownform} 
       sx={{
        '& .MuiSelect-select': {
          color: 'white',
          '&:hover, &:focus': {
            color: 'white',
          },
        },
        '& .MuiSelect-icon': { color: 'white' },
        '& .MuiOutlinedInput-root': {
          color: 'white',
          '& fieldset': { borderColor: 'white' },
          '&:hover fieldset, &:focus fieldset': { borderColor: 'white' },
        },
        '& .MuiMenuItem-root': {
          color: 'white',
          '&:hover, &:focus': {
            backgroundColor: 'white',
          },
        },
      }}
    >
        <InputLabel
          id="Bank"
          className={style.dropdownInput}
          shrink={!BankisPlaceholderVisible}
        >
          {BankisPlaceholderVisible ? 'Select Bank' : ''}
        </InputLabel>
        <Select
          labelId="option1-label"
          id="Bank"
          value={payementData.bank}
          onChange={handlePaymentDetailChange}
          name="bank"
          onClick={() => { setBankIsPlaceholderVisible(false) }}
        >

          {BankList.map((Bank:any) => (
            <MenuItem key={Bank.id} value={Bank.id}>
              {Bank.bankName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>

    <Grid item md={6} sm={12} xs={12}>
      <h4 className={style.dropdownName}>Bank Code</h4>
      <TextField
        id="Bankcode"
        variant="outlined"
        className={style.textboxinput}
        value={payementData.bank && BankList.find((Bank:any) => Bank.id === payementData.bank)?.code || ""}
        // name="Bankcode"
        onChange={handlePaymentDetailChange}
        InputProps={{
          readOnly: true,
          classes: {
            focused: style.focusedInput,
            notchedOutline: style.whiteOutline,
            input: style.whitePlaceholder,
          },
          style: {
            color: 'white',
          },
          placeholder: 'Bankcode',
        }}
      />
    </Grid>
  </Grid>
</Grid>

)} 


<Grid item md={6} xs={6} sm={12}>

<Grid container spacing={2}>
    <Grid item md={6} sm={12} xs={12}>
      <h4 className={style.dropdownName}>Branch</h4>
      <FormControl className={style.dropdownform} 
       sx={{
        '& .MuiSelect-select': {
          color: 'white',
          '&:hover, &:focus': {
            color: 'white',
          },
        },
        '& .MuiSelect-icon': { color: 'white' },
        '& .MuiOutlinedInput-root': {
          color: 'white',
          '& fieldset': { borderColor: 'white' },
          '&:hover fieldset, &:focus fieldset': { borderColor: 'white' },
        },
        '& .MuiMenuItem-root': {
          color: 'white',
          '&:hover, &:focus': {
            backgroundColor: 'white',
          },
        },
      }}
    >
        <InputLabel
          id="Bank"
          className={style.dropdownInput}
          shrink={!BranchisPlaceholderVisible}
        >
          {BranchisPlaceholderVisible ? 'Select Branch' : ''}
        </InputLabel>
        <Select
          labelId="option1-label"
          id="Branch"
          value={payementData.branch}
          onChange={handlePaymentDetailChange}
          name="branch"
          onClick={() => { seBranchIsPlaceholderVisible(false) }}
        >

          {BranchList.map((Branch:any) => (
            <MenuItem key={Branch.id} value={Branch.id}>
              {Branch.name}
         
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>

    <Grid item md={6} sm={12} xs={12}>
      <h4 className={style.dropdownName}>Branch Code</h4>
      <TextField
        id="branch"
        variant="outlined"
        className={style.textboxinput}
        value={payementData.branch && BranchList.find((Branch:any) => Branch.id === payementData.branch)?.code || ""}
        // name="Branch"
        onChange={handlePaymentDetailChange}
        InputProps={{
          readOnly: true,
          classes: {
            focused: style.focusedInput,
            notchedOutline: style.whiteOutline,
            input: style.whitePlaceholder,
          },
          style: {
            color: 'white',
          },
          placeholder: 'Branch',
        }}
      />
    </Grid>
  </Grid>



</Grid>

    </Grid>  
   


    <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
    
 
<h4 className={style.textboxtitle}>Beneficiary Name</h4>
         
       
       
          <TextField
            id="beneficiaryName"
            variant="outlined"
            className={style.textboxinput}
            value={payementData.beneficiaryName}
            name="beneficiaryName"
            onChange={handlePaymentDetailChange}
            autoComplete="true"
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter Beneficiary Name',
            }}
          />
         

</Grid>

<Grid item md={6} xs={6} sm={12}>

<h4 className={style.textboxtitle}>Account Number</h4>
          
    
          <TextField
            id="accnum"
            variant="outlined"
            className={style.textboxinput}
            value={payementData.accountNumber}
            name="accountNumber"
            onChange={handlePaymentDetailChange}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter Account Number',
            }}
          />
        
     </Grid>
     </Grid>
 
  
    
 
  
<br></br>
<br></br>

<Grid container spacing={2}>
  <Grid item md={8} xs={4} sm={4}>
    {/* Content for the first grid item */}
  </Grid>

  <Grid item md={4} xs={8} sm={8}>
    <div  className={style.btn}>
      <Button className={style.clear} onClick={()=>{ClearPaymentDetails()}}>Clear</Button>
      <Button className={style.add} onClick={()=>{AddPaymentDetails()}}>Add Payment Details</Button>
    </div>
  </Grid>
</Grid>

<br></br>
<br></br>
<DataTable/>
<br></br>

<hr></hr>
<br></br>
<Grid item md={4} xs={8} sm={8}>
    <div  className={style.btnfirst}>
<Button className={style.cancle} onClick={() => store.dispatch(insertCompany(transportCompanyData))}>Cancle</Button>

<Button className={style.save} onClick={handleSave}>Save</Button>

</div>
  </Grid>
</section>
   
   </div>
  
</section>
</AppLayout>
</React.Fragment>
     );
   };
  