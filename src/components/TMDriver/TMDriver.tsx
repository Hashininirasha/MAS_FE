import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './TMDriver.module.scss'
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import DataTableassign from './TableAssignVehi'
import Recincident from './TableRecinci'
import TablePrevious from './TablePrevious'

import IDriverAdd, { IAssignVehicle, IIncident, IPreviousWorks } from '../../types/addDriver';
import { useDispatch } from 'react-redux';
import { addAssignVehicleList, addincidentsList, addpreviousWorksList } from '../../redux/reducers/driveradd.reducer';


const assignVehicleList:IAssignVehicle[]=[]
const incidentsList:IIncident[]=[]
const previousWorksList:IPreviousWorks[]=[]

const TMDriver = () => {

  
  const dispatch = useDispatch();

const [trans_com_isPlaceholderVisible, trans_com_setIsPlaceholderVisible] = React.useState(true);
const [plant_isPlaceholderVisible, plant_setIsPlaceholderVisible] = React.useState(true);
const [vehiType_isPlaceholderVisible, vehiType_setIsPlaceholderVisible] = React.useState(true);
const [vehiNum_isPlaceholderVisible, vehiNum_setIsPlaceholderVisible] = React.useState(true);
const [vehiNumIncident_isPlaceholderVisible, vehiNumIncident_setIsPlaceholderVisible] = React.useState(true);
const [SBUPreWorks_isPlaceholderVisible, SBUPreWorks_setIsPlaceholderVisible] = React.useState(true);

  const [date, setDate] = useState('');
  console.log("date", date);
  const navigate = useNavigate()

  const handleNewRequest = () => {

    navigate(APP_ROUTES.TM_DRIVER_MANAGEMENT)
  }

  
  const [Plant, setPlant] = useState('')
  const [VehicleType, setVehicleType] = useState('')
  const [VehicleNumber, setVehicleNumber] = useState('')

    const AssingVehicleDetailsInitial: IAssignVehicle={
      Plant:"",
      VehicleType: "",
      VehicleNumber:"",
   
  }

  const AssingVehicle: IAssignVehicle={
    Plant:Plant,
    VehicleType:VehicleType,
    VehicleNumber:VehicleNumber,
  }

  const [VehiNumber, setVehiNumber] = useState('')

    const IncidentDetailsInitial: IIncident={
      Incident:"",
    Date:new Date,
    Outcome:"",
    VehiNumber:"",
   
  }

  const Incidents: IIncident={
    Incident:"",
    Date:new Date,
    Outcome:"",
    VehiNumber:VehiNumber,
  }


  const [SBU, setSBU] = useState('')

    const PreviousWorksInitial: IPreviousWorks={
      SBU:"",
      FromDate: new Date,
      ToDate:new Date,
   
  }

  const previousWorks: IPreviousWorks={
    SBU:SBU,
    FromDate: new Date,
    ToDate:new Date,
  }





  const [TrasportCompany, setTrasportCompany] = useState('')


  const driveradd: IDriverAdd = {
    DriverName: "",
    TrasportCompany: TrasportCompany,
    NIC: "",
    License: "",
    TeleNumber: 0,
    IAssignVehicleDetails: assignVehicleList,
    IIncidentDetails:incidentsList,
    IPreviousWorksDetails:previousWorksList
  };

  const [driveraddData, setdriveraddData] = useState({
    DriverName: driveradd.DriverName,
    TrasportCompany: driveradd.TrasportCompany,
    NIC:driveradd.NIC,
    License:driveradd.License,
    TeleNumber:driveradd.TeleNumber,
    IAssignVehicleDetails: assignVehicleList,
    IIncidentDetails:incidentsList,
    IPreviousWorksDetails:previousWorksList
  });

  


  const [assignVehicleData, setassignVehicleData] = useState({
    Plant:Plant,
    VehicleType:VehicleType,
    VehicleNumber:VehicleNumber,

  });


  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setdriveraddData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const handleDriverDetailChange = (event:any) => {
    const { name, value } = event.target;
    setassignVehicleData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const AddDriverDetails=()=>{
    // assignVehicleData.Plant=new Date().getUTCMilliseconds().toString();
    assignVehicleList.push(assignVehicleData);
    setassignVehicleData(AssingVehicleDetailsInitial);
    setassignVehicleData((prevState) => ({
      ...prevState,
      IAssignVehicleDetails: assignVehicleList,
    }));
    dispatch(addAssignVehicleList(assignVehicleData));
    
  }

  const ClearDriverDetails=()=>{
    setassignVehicleData(AssingVehicleDetailsInitial);
  }

 

  const [IncidentData, setIncidentData] = useState({
    Incident:Incidents.Incident,
    Date:Incidents.Date,
    Outcome:Incidents.Outcome,
    VehiNumber:VehiNumber,
  });

  const handleIncidentChange = (event:any) => {
    const { name, value } = event.target;
    setIncidentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
 
  }


  const AddIncidentDetails=()=>{
    // IncidentData.Incident=new Date().getUTCMilliseconds().toString();
    incidentsList.push(IncidentData);
    setIncidentData(IncidentDetailsInitial);
    setIncidentData((prevState) => ({
      ...prevState,
      IIncidentDetails: incidentsList,
    }));
    dispatch(addincidentsList(IncidentData));
    
  }

  const ClearIncidentDetails=()=>{
    setIncidentData(IncidentDetailsInitial);
  }

  const [PreWorksData, setPreWorksData] = useState({
    SBU:SBU,
    FromDate: previousWorks.FromDate,
    ToDate:previousWorks.ToDate,

  });


  const handlePreWorkChange = (event:any) => {
    const { name, value } = event.target;
    setPreWorksData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };


  const AddPreWorksDetails=()=>{
 
    previousWorksList.push(PreWorksData);
    setPreWorksData(PreviousWorksInitial);
    setPreWorksData((prevState) => ({
      ...prevState,
      IPreviousWorksDetails: previousWorksList,
    }));
    dispatch(addpreviousWorksList(PreWorksData));
    
  }

  const ClearPreWorksDetails=()=>{
    setPreWorksData(PreviousWorksInitial);
  }

  return (
    <div>
      <section className={style.gridContainer}>
        <div className={style.gridHeader}>
          <Typography
            noWrap
            component="div"
            className={style.gridTitle}
          >
            <h3>Manage Drivers</h3>
          </Typography>  
        </div>
        <hr />
        <div className={style.gridHeader}>
          <Box sx={{ flexGrow: 1 }} />

        </div>

    <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
   
     
          <h4 className={style.textboxtitle}>Driver Name</h4>
          <TextField
            id="driverName"
            variant="outlined"
            className={style.textboxinput}
            name="DriverName"
            value={driveraddData.DriverName}
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
              placeholder: 'Enter Driver Name',
            }}
          />
      
     
</Grid>

<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.dropdownName}>Transport Company</h4>
          

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
    id="transport_Company"
    
    shrink={!trans_com_isPlaceholderVisible}
    className={style.dropdownInput}
  >
    {trans_com_isPlaceholderVisible ? 'Select Transport Comapny' : ''}
  </InputLabel>
  <Select
    labelId="transport_Company"
    id="transport_Company"

    name="TrasportCompany"
            value={driveraddData.TrasportCompany}
            onChange={handleChange}

   
            onClick={() => {trans_com_setIsPlaceholderVisible(false)}}
    
  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>

</Grid>
</Grid>
     
  



<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>

          <h4 className={style.textboxtitle}>Driver NIC Number</h4>
          
          <TextField
            id="driverNIC-basic"
            variant="outlined"
            className={style.textboxinput}
            name="NIC"
            value={driveraddData.NIC}
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
              placeholder: 'Enter Driver NIC Number',
            }}
          />
</Grid>

<Grid item md={6} xs={6} sm={12}>
       
     
          <h4 className={style.textboxtitle}>Driver License Number</h4>
          <TextField
            id="driverLicense-basic"
            variant="outlined"
            className={style.textboxinput}
            name="License"
            value={driveraddData.License}
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
              placeholder: 'Enter Driver License Number',
            }}
          />
</Grid>
</Grid>


<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>

       
     
          <h4 className={style.textboxtitle}>Driver Telephone Number</h4>
          <TextField
            id="driverLicense-basic"
            variant="outlined"
            className={style.textboxinput}
            name="TeleNumber"
            value={driveraddData.TeleNumber}
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
              placeholder: 'Enter Driver Telephone Number',
            }}
          />
</Grid>

</Grid>




<br></br>
   <hr></hr>
   
   <div className={style.gridHeader}>
       <h3>Assign Vehicles</h3>
       
       <br></br>
       
      </div>
  
  
<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
      
          <h4 className={style.dropdownName}>Plant</h4>
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
    id="plant-label"
    className={style.dropdownInput}
    shrink={!plant_isPlaceholderVisible}
   
  >
    {plant_isPlaceholderVisible ? 'Select Plant' : ''}
  </InputLabel>
  <Select
    labelId="palnt-label"
    id="plant"
    value={assignVehicleData.Plant}
    onChange={handleDriverDetailChange}
    name="Plant"
    onClick={()=>{plant_setIsPlaceholderVisible(false)}}>

    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>
  
</Grid>

<Grid item md={6} xs={6} sm={12}>
      
          <h4 className={style.dropdownName}>Vehicle Type</h4>
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
    id="vehiType-label"
    className={style.dropdownInput}
    shrink={!vehiType_isPlaceholderVisible}
  
    
  >
    {vehiType_isPlaceholderVisible ? 'Select Vehicle Type' : ''}
  </InputLabel>
  <Select
    labelId="vehiType-label"
    id="vehiType"
    value={assignVehicleData.VehicleType}
    onChange={handleDriverDetailChange}
    name="VehicleType"
    onClick={()=>{vehiType_setIsPlaceholderVisible(false)}}>
  
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>
</Grid>
</Grid>
       
<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
        <h4 className={style.dropdownName}>Vehicle Number</h4>
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
    id="vehiNum-label"
    className={style.dropdownInput}
    shrink={!vehiNum_isPlaceholderVisible}
    
  >
    {vehiNum_isPlaceholderVisible ? 'Select Vehicle Number' : ''}
  </InputLabel>
  <Select
    labelId="vehiNum-label"
    id="vehiNum"
    value={assignVehicleData.VehicleNumber}
    onChange={handleDriverDetailChange}
    name="VehicleNumber"
    onClick={()=>{vehiNum_setIsPlaceholderVisible(false)}}>

    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>

</Grid>
<Grid item md={6} xs={6} sm={12}>
  </Grid>
  </Grid>
   


  <Grid container spacing={2}>
  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
  </Grid>
  <Grid item md={3} xs={3} sm={12}>
<div className={style.btn}>
            <Button className={style.clear} onClick={()=>{ClearDriverDetails()}}>Clear</Button>
            <Button className={style.add} onClick={()=>{AddDriverDetails()}}>Add</Button>
          </div>

          </Grid>
</Grid>
          <br></br>

          <DataTableassign/>
          <br></br>
          <hr></hr>
         
          <div>
      <div className={style.gridHeader}>
       <h3>Incidents</h3>      
      </div>


<Grid container spacing={2}>
<Grid item md={12} xs={12} sm={12}>
      <h4 className={style.incident}>Incident</h4>
      <TextField
          id="incident"

          placeholder="Enter Incident"
          multiline
          className={style.inicidentText}
          name="Incident"
            value={IncidentData.Incident}
            onChange={handleIncidentChange}
          InputProps={{
            classes: {
              focused: style.focusedInput,
              notchedOutline: style.whiteOutline
            },
            style: {
              color: 'white', 
            }
          }}

        />
</Grid>
</Grid>

      </div>


         
<Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>
     
          <h4 className={style.dropdownName}>Date</h4>
          <TextField
        type="date"
        id="date"
        name="Date"
            value={IncidentData.Date}
            onChange={handleIncidentChange}
        
        className={style.inicidentText}
        InputProps={{
          classes: {
            focused: style.focusedInput,
            notchedOutline: style.whiteOutline
          },
          style: {
            color: 'white', 
          }
        }}
        // onChange={e => setDate(e.target.value)}
      />

<style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
         
          width: 24px;
          height: 24px;
        }
      `}</style>
</Grid>
<Grid item md={6} xs={6} sm={12}>
      
          <h4 className={style.dropdownName}>Outcome</h4>
          <TextField
            id="outcome-basic"
            variant="outlined"
            name="Outcome"
            value={IncidentData.Outcome}
            onChange={handleIncidentChange}
            className={style.inicidentText}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter outcome',
            }}
          />
    
    </Grid>
    </Grid>

<Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>


        <h4 className={style.dropdownName}>Vehicle Number</h4>
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
    id="vehiNum-label"
    className={style.dropdownInput}
    shrink={!vehiNumIncident_isPlaceholderVisible}
   
  >
    {vehiNumIncident_isPlaceholderVisible ? 'Select Vehicle Number' : ''}
  </InputLabel>
  <Select
    labelId="vehiNum-label"
    id="vehiNum"
    value={IncidentData.VehiNumber}
            onChange={handleIncidentChange}
            name="VehiNumber"
            onClick={()=>{vehiNumIncident_setIsPlaceholderVisible(false)}}>

    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>

</Grid>
<Grid item md={6} xs={6} sm={12}>
      
      </Grid>
      </Grid>

      

<br></br>
<Grid container spacing={2}>
  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
  </Grid>
  <Grid item md={3} xs={3} sm={12}>
<div className={style.btn}>
            <Button className={style.clear} onClick={()=>{ClearIncidentDetails()}}>Clear</Button>
            <Button className={style.add} onClick={()=>{AddIncidentDetails()}}>Add</Button>
          </div>

          </Grid>
</Grid>
 
    <br></br>
    <h4 className={style.dropdownName}>Recorded Incidents</h4>
  <Recincident/> 
<br></br>
  <hr></hr>
  <br></br>

  <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
      
          <h4 className={style.dropdownName}>Plant</h4>
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
    id="plant-label"
    className={style.dropdownInput}
    shrink={!SBUPreWorks_isPlaceholderVisible}
   
  >
    {SBUPreWorks_isPlaceholderVisible ? 'Select Plant' : ''}
  </InputLabel>
  <Select
    labelId="palnt-label"
    id="plant"
    value={PreWorksData.SBU}
    onChange={handlePreWorkChange}
    name="SBU"
    onClick={()=>{SBUPreWorks_setIsPlaceholderVisible(false)}}>

    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>
  
</Grid>


</Grid>
<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
     
          <h4 className={style.dropdownName}>From</h4>
          <TextField
        type="date"
        id="FromDate"
        name="FromDate"
            value={PreWorksData.FromDate}
            onChange={handlePreWorkChange}
        
        className={style.inicidentText}
        InputProps={{
          classes: {
            focused: style.focusedInput,
            notchedOutline: style.whiteOutline
          },
          style: {
            color: 'white', 
          }
        }}
        // onChange={e => setDate(e.target.value)}
      />

<style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
         
          width: 24px;
          height: 24px;
        }
      `}</style>
</Grid>
<Grid item md={6} xs={6} sm={12}>

<h4 className={style.dropdownName}>To</h4>
          <TextField
        type="date"
        id="ToDate"
        value={PreWorksData.ToDate}
            onChange={handlePreWorkChange}
            name="ToDate"
        className={style.inicidentText}
        
      
        InputProps={{
          classes: {
            focused: style.focusedInput,
            notchedOutline: style.whiteOutline
          },
          style: {
            color: 'white', 
          }
        }}
        // onChange={e => setDate(e.target.value)}
      />

<style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
         
          width: 24px;
          height: 24px;
        }
      `}</style>

</Grid>




</Grid>
  <h4 className={style.dropdownName}>Previous Work History</h4>
  <br></br>
  <TablePrevious/>
  <br></br>
{/* 
  <Grid container spacing={2}>
  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
  </Grid>
  <Grid item md={3} xs={3} sm={12}>
<div className={style.btn}>
            <Button className={style.clear} onClick={()=>{ClearIncidentDetails()}}>Clear</Button>
            <Button className={style.add} onClick={()=>{AddPreWorksDetails()}}>Add</Button>
          </div>

          </Grid>
</Grid>    */}


   <br></br>
    <Grid container spacing={2}>
  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
  </Grid>
  <Grid item md={3} xs={3} sm={12}>
<div className={style.btn}>
            <Button className={style.clear} onClick={()=>{ClearPreWorksDetails()}}>Clear</Button>
            <Button className={style.add} onClick={()=>{AddPreWorksDetails()}}>Add</Button>
          </div>

          </Grid>
</Grid>   

</section>
       

       </div>
     );
   };
   

export default TMDriver;