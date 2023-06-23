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

const BankDetailsList:IPayementDetails[]=[]

export  const TransportCompanyInsertGrid = () => {

  useEffect(() => {

  }, []);

  const [sbu, setSbu] = useState('')

  const [Bank, setBank] = useState('')
  const dispatch = useDispatch();

  const Branches = [
    { label: 'BamBalapitiya', value: 1 },
    { label: 'Awissawella', value: 2 },
    { label: 'Badulla', value: 3 },
    // Add more options as needed
  ];


  const [selectedOption, setSelectedOption] = useState('');
  const [CurrancyType, setCurrancyType] = useState('');
  const [PaymentMethod, setPaymentMethod] = useState('');
  // const [Bankcode, setBankcode] = useState('');
  const [Branch, setBranch] = useState('');
  // const [Branchcode, setBranchcode] = useState('');

  const [SBUisPlaceholderVisible, setSBUIsPlaceholderVisible] = React.useState(true);
  const [CurrancyTypeisPlaceholderVisible, setCurrancyTypeIsPlaceholderVisible] = React.useState(true);
  const [PayMethodisPlaceholderVisible, setPayMethodIsPlaceholderVisible] = React.useState(true);
  const [BankisPlaceholderVisible, setBankIsPlaceholderVisible] = React.useState(true);
  const [BankcodeSample, setBankcodeSample] = useState('');

  const paymentDetailsInitial: IPayementDetails={
   
    Bank:"",
    BeneficiaryName:"",
    AccountNumber:"",
    Id:"",
    CurrancyType:"",
    PaymentMethod:"",
    Bankcode:"",
    Branch:"",
    Branchcode:"",

  }

  const payments: IPayementDetails={
   
    Bank:Bank,
    BeneficiaryName:"",
    AccountNumber:"",
    Id:"",
    CurrancyType:CurrancyType,
    PaymentMethod:PaymentMethod,
    Bankcode:"",
    Branch:Branch,
    Branchcode:"",
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
    Email:"",
    BankDetails:BankDetailsList
  };

  const [transportCompanyData, settransportCompanyData] = useState({
    CompanyName: transportCompany.CompanyName,
    City: transportCompany.City,
    RegisteredNumber:transportCompany.RegisteredNumber,
    TelephoneNumber:transportCompany.TelephoneNumber,
    AddressLine2:transportCompany.AddressLine2,
    AddressLine1:transportCompany.AddressLine1,
    District: transportCompany.District,
    BankDetails: BankDetailsList,
    PostalCode:transportCompany.PostalCode,
    Province:transportCompany.Province,
    AttachedSBU:transportCompany.AttachedSBU,
    Email:transportCompany.Email,
    
  });

  const [payementData, setPayementData] = useState({

    Bank:Bank, 
    BeneficiaryName:payments.BeneficiaryName,
    AccountNumber:payments.AccountNumber,
    Id: "",
    CurrancyType:CurrancyType,
    PaymentMethod:PaymentMethod,
    Bankcode:payments.Bankcode,
    Branch:Branch,
    Branchcode:payments.Branchcode,

  });

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    settransportCompanyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setSelectedOption(event.target.value);
  };

  const handlePaymentDetailChange = (event: any) => {
    const { name, value } = event.target;
  
    setPayementData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  
    if (name === 'Bank') {
      // Set the Bank code based on the selected Bank
      let Bankcode = '';
      switch (value) {
        case '1':
          Bankcode = 'BOC123';
          break;
        case '2':
          Bankcode = 'PB456';
          break;
        case '3':
          Bankcode = 'CB789';
          break;
        default:
          Bankcode = '';
      }
      setPayementData((prevState) => ({
        ...prevState,
        Bankcode: Bankcode,
      }));
  
      if (Bankcode) {
        setBankcodeSample(`Sample: ${Bankcode}`);
      } else {
        setBankcodeSample('');
      }
    }


  };
  




  // Inside the handlePaymentDetailChange function, after setting the Bank code
 
  const AddPaymentDetails=()=>{
    payementData.Id=new Date().getUTCMilliseconds().toString();
    BankDetailsList.push(payementData);
    setPayementData(paymentDetailsInitial);
    settransportCompanyData((prevState) => ({
      ...prevState,
      BankDetails: BankDetailsList,
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
    shrink={!SBUisPlaceholderVisible}
   
   
  >
    {SBUisPlaceholderVisible ? 'Select Attached SBUs' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={transportCompanyData.AttachedSBU}
    onChange={handleChange}
    name="AttachedSBU"
    onClick={()=>{setSBUIsPlaceholderVisible(false)}}>
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


      <Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>

<h4 className={style.dropdownName}>Email</h4>
<TextField
            id="reg_num"
            variant="outlined"
            className={style.textboxinput}
            value={transportCompanyData.Email}
            name="Email"
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
    id="Bank"
    className={style.dropdownform}
    shrink={!CurrancyTypeisPlaceholderVisible}
   
  >
    {CurrancyTypeisPlaceholderVisible ? 'Select CurrancyType' : ''}
  </InputLabel>
  <Select
  labelId="option1-label"
  id="Bank"
  value={payementData.CurrancyType}
  onChange={handlePaymentDetailChange}
  name="CurrancyType"
  onClick={() => { setCurrancyTypeIsPlaceholderVisible(false) }}
>
  <MenuItem value="1" id="USD">USD</MenuItem>
  <MenuItem value="2" id="LKR">LKR</MenuItem>
 
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
    value={payementData.PaymentMethod}
    name="PaymentMethod"
    onChange={handlePaymentDetailChange}
    onClick={()=>{setPayMethodIsPlaceholderVisible(false)}}
  >
   <MenuItem value="1" id="Cash_Check">Cash Check</MenuItem>
    <MenuItem value="2" id="Bank_Transfer">Bank Transfer</MenuItem>

  </Select>
</FormControl>
      </Grid>
  
    </Grid>
</Grid>  
    </Grid>  
   

    
  

      <Grid container spacing={2}>
      {payementData.PaymentMethod !== '1' && (
<Grid item md={6} xs={6} sm={12}>
  
<Grid container spacing={2}>
      <Grid item md={6} sm={6} xs={12}>
      <h4 className={style.dropdownName}>Bank</h4>
          <FormControl
         
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
    id="Bank"
    className={style.dropdownInput}
    shrink={!BankisPlaceholderVisible}
   
  >
    {BankisPlaceholderVisible ? 'Select Bank' : ''}
  </InputLabel>
  <Select
  labelId="option1-label"
  id="Bank"
  value={payementData.Bank}
  onChange={handlePaymentDetailChange}
  name="Bank"
  onClick={() => { setBankIsPlaceholderVisible(false) }}
>
  <MenuItem value="1" id="Bank Of Ceylon">Bank Of Ceylon</MenuItem>
  <MenuItem value="2" id="Peoples Bank">Peoples Bank</MenuItem>
  <MenuItem value="3" id="Commercial Bank">Commercial Bank</MenuItem>
</Select>

</FormControl>
      </Grid>
      
      <Grid item md={6} sm={6} xs={12}>
  
      <h4 className={style.dropdownName}>Bank Code</h4>
       <TextField
    id="accnum"
    variant="outlined"
    className={style.textboxinput}
    value={payementData.Bankcode}
    name="Bankcode"
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
      placeholder: 'Bankcode',
    }}
  />
  {/* {BankcodeSample && <p>{BankcodeSample}</p>} */}
      </Grid>
      
     
    </Grid>
{/* <p>Selected option: {getPaymentMethodName(selectedOption)}</p> */}

</Grid>
)} 


{payementData.PaymentMethod !== '2' && (
<Grid item md={6} xs={6} sm={12}>

<Grid container spacing={2}>
      <Grid item md={6} sm={6} xs={12}>
      <h4 className={style.textboxtitle}>Branch</h4>
         
         <Autocomplete
               id="Branches"
               options={Branches} 
               getOptionLabel={(option) => option.label}
               // value={payementData.Bank}
               onChange={handlePaymentDetailChange}
               renderInput={(params) => (
                 <TextField
                   {...params}
                   variant="outlined"
                   className={style.textboxinput}
                   value={payementData.Branch}
                    name="Branch"
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
      
      <Grid item md={6} sm={6} xs={12}>
  
      <h4 className={style.dropdownName}>Branch Code</h4>
        <TextField
  id="Branchcode"
  variant="outlined"
  className={style.textboxinput}
  value={payementData.Branchcode}
  name="Branchcode"
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
    placeholder: 'Branchcode',
  }}
/>

      </Grid>
      
     
    </Grid>



</Grid>
    )} 
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
  