import { Autocomplete, Box, Button, FormControl, Grid,  InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from './TransportCompanyManagementGrid.module.scss';
import store from '../../redux/store';
import ITransportCompany, { IPayementDetails } from '../../types/TransportCompanyDto';
import { insertCompany } from '../../services/transportcompany.service';
import { AppLayout } from '../../templates';
import DataTable from './BankDetailsTable';
import { useDispatch } from 'react-redux';
import { addPaymentMethodList } from '../../redux/reducers/transportcompany.reducer';

const bankDetailsList:IPayementDetails[]=[]

export  const TransportCompanyInsertGrid = () => {

  useEffect(() => {

  }, []);

  const [sbu, setSbu] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [bank, setBank] = useState('')
  const dispatch = useDispatch();

  const Branches = [
    { label: 'BamBalapitiya', value: 1 },
    { label: 'Awissawella', value: 2 },
    { label: 'Badulla', value: 3 },
    // Add more options as needed
  ];


  const [selectedOption, setSelectedOption] = useState('');


  const [isPlaceholderVisible1, setIsPlaceholderVisible1] = React.useState(true);
  const [isPlaceholderVisible2, setIsPlaceholderVisible2] = React.useState(true);
  const [isPlaceholderVisible3, setIsPlaceholderVisible3] = React.useState(true);

  const paymentDetailsInitial: IPayementDetails={
    PaymentMethod:"",
    Bank:"",
    BeneficiaryName:"",
    AccountNumber:"",
    Id:""
  }

  const payments: IPayementDetails={
    PaymentMethod:paymentMethod,
    Bank:bank,
    BeneficiaryName:"",
    AccountNumber:"",
    Id:""
  }

  const transportCompany: ITransportCompany = {
    CompanyName: "",
    RegisteredNumber: "",
    AttachedSBU: sbu,
    TelephoneNumber: "",
    AddressLine1: "",
    AddressLine2: "",
    City: "",
    District: "",
    Province:"",
    PostalCode:"",
    BankDetails:bankDetailsList
  };

  const [transportCompanyData, settransportCompanyData] = useState({
    CompanyName: transportCompany.CompanyName,
    City: transportCompany.City,
    RegisteredNumber:transportCompany.RegisteredNumber,
    TelephoneNumber:transportCompany.TelephoneNumber,
    AddressLine2:transportCompany.AddressLine2,
    AddressLine1:transportCompany.AddressLine1,
    District: transportCompany.District,
    BankDetails: bankDetailsList,
    PostalCode:transportCompany.PostalCode,
    Province:transportCompany.Province,
    AttachedSBU:transportCompany.AttachedSBU
  });

  const [payementData, setPayementData] = useState({
    PaymentMethod:paymentMethod,
    Bank:bank, 
    BeneficiaryName:payments.BeneficiaryName,
    AccountNumber:payments.AccountNumber,
    Id: ""
  });

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    settransportCompanyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setSelectedOption(event.target.value);
  };

  const handlePaymentDetailChange = (event:any) => {
    const { name, value } = event.target;
    setPayementData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    
    // setSelectedOption(event.target.value);
  };

  const AddPaymentDetails=()=>{
    payementData.Id=new Date().getUTCMilliseconds().toString();
    bankDetailsList.push(payementData);
    setPayementData(paymentDetailsInitial);
    settransportCompanyData((prevState) => ({
      ...prevState,
      BankDetails: bankDetailsList,
    }));
    dispatch(addPaymentMethodList(payementData));
    
  }

  const ClearPaymentDetails=()=>{
    setPayementData(paymentDetailsInitial);
  }

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
            name="CompanyName"
            value={transportCompanyData.CompanyName}
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
            value={transportCompanyData.RegisteredNumber}
            name="RegisteredNumber"
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
    id="sbu"
    className={style.dropdownInput}
    shrink={!isPlaceholderVisible1}
   
   
  >
    {isPlaceholderVisible1 ? 'Select Attached SBUs' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={transportCompanyData.AttachedSBU}
    onChange={handleChange}
    name="AttachedSBU"
    onClick={()=>{setIsPlaceholderVisible1(false)}}>
    <MenuItem value="1">SBU1</MenuItem>
    <MenuItem value="2">SBU2</MenuItem>
    <MenuItem value="3">SBU3</MenuItem>
  </Select>
</FormControl>

</Grid>

<Grid item md={6} xs={6} sm={12}>

<h4 className={style.textboxtitle}>Telephone Number</h4>
<FormControl className={style.styleright}>

          <TextField
            id="tele_num"
            variant="outlined"
            className={style.textboxinput}
            value={transportCompanyData.TelephoneNumber}
            name="TelephoneNumber"
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
            name="AddressLine1"
            className={style.textboxinput}
            value={transportCompanyData.AddressLine1}
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
            name="AddressLine2"
            value={transportCompanyData.AddressLine2}
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
            name="City"
            className={style.textboxinput}
            value={transportCompanyData.City}
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
              placeholder: 'Enter City',
            }}
          />


</Grid>

<Grid item md={6} xs={6} sm={12}>
   
          <h4 className={style.textboxtitle} >District</h4>
          
          <TextField
            id="outcome"
            variant="outlined"
            className={style.textboxinput}
            name="District"
            value={transportCompanyData.District}
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
              placeholder: 'Enter District',
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
            name="Province"
            value={transportCompanyData.Province}
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
              placeholder: 'Enter Province',
            }}
          />


</Grid>

<Grid item md={6} xs={6} sm={12}>
   
          
<h4 className={style.textboxtitle}>Postal Code</h4>
          
          <TextField
            id="outcome"
            variant="outlined"
            className={style.textboxinput}
            name="PostalCode"
            value={transportCompanyData.PostalCode}
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
  
<h4 className={style.dropdownName}>Payment method</h4>

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
    id="paymentmethod"
  
    shrink={!isPlaceholderVisible2}
    className={style.dropdownInput}
  >
    {isPlaceholderVisible2 ? 'Select Payment method' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={payementData.PaymentMethod}
    name="PaymentMethod"
    onChange={handlePaymentDetailChange}
    onClick={()=>{setIsPlaceholderVisible2(false)}}
  >
   <MenuItem value="1" id="Cash">Cash</MenuItem>
    <MenuItem value="2" id="Check">Check</MenuItem>
    <MenuItem value="3" id="Online">Online</MenuItem>
  </Select>
</FormControl>
{/* <p>Selected option: {getPaymentMethodName(selectedOption)}</p> */}
     
</Grid>

<Grid item md={6} xs={6} sm={12}>

<h4 className={style.dropdownName}>Bank</h4>
          <FormControl style={{ width: '97%', paddingLeft: '10px'}}
         
         className={style.dropdownform}
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
    id="bank"
    className={style.dropdownInput}
    shrink={!isPlaceholderVisible2}
   
  >
    {isPlaceholderVisible3 ? 'Select Bank' : ''}
  </InputLabel>
  <Select
  labelId="option1-label"
  id="option1"
  value={payementData.Bank}
  onChange={handlePaymentDetailChange}
  name="Bank"
  onClick={() => { setIsPlaceholderVisible3(false) }}
>
  <MenuItem value={1} id="Bank Of Ceylon">Bank Of Ceylon</MenuItem>
  <MenuItem value={2} id="Peoples Bank">Peoples Bank</MenuItem>
  <MenuItem value={3} id="Commercial Bank">Commercial Bank</MenuItem>
</Select>

</FormControl>
  

</Grid>
    
    </Grid>  
   

    <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
    
 
<h4 className={style.textboxtitle}>Branch</h4>
         
<Autocomplete
      id="Branches"
      options={Branches} // replace accountOptions with your array of options
      getOptionLabel={(option) => option.label} // replace 'label' with the property name in your accountOptions array that represents the label to display
      // value={payementData.Bank}
      onChange={handlePaymentDetailChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          className={style.textboxinput}
          InputProps={{
            ...params.InputProps,
            classes: {
              focused: style.focusedInput,
              notchedOutline: style.whiteOutline,
              input: style.whitePlaceholder,
            },
            style: {
              color: 'white',
            },
          }}
          placeholder="Select Branch"
        />
      )}
    />


</Grid>

<Grid item md={6} xs={6} sm={12}>

<h4 className={style.textboxtitle}>Branch Code</h4>
          
    
          <TextField
            id="accnum"
            variant="outlined"
            className={style.textboxinput}
            value={payementData.AccountNumber}
            name="AccountNumber"
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

    <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
    
 
<h4 className={style.textboxtitle}>Beneficiary Name</h4>
         
       
       
          <TextField
            id="BeneficiaryName"
            variant="outlined"
            className={style.textboxinput}
            value={payementData.BeneficiaryName}
            name="BeneficiaryName"
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
            value={payementData.AccountNumber}
            name="AccountNumber"
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


<Button className={style.clear} onClick={() => store.dispatch(insertCompany(transportCompanyData))}>Save</Button>

</section>
   
   </div>
  
</section>
</AppLayout>
</React.Fragment>
     );
   };
  
