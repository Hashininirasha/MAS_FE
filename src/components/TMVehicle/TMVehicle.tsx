import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from './TMVehicle.module.scss'
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import DataTable from '../TMVehicle/Table'
import IVehicleadd, {IIncident} from '../../types/addVehicle'
import { useDispatch } from 'react-redux';
import {addIncidentMethodList} from "../../redux/reducers/vehicleadd.reducer"
import { error } from 'console';
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import { getCompanyName, getPlants, getVehicleType } from '../../services/vehicle.service';



const incidentsList:IIncident[]=[]

const TMVehicle = () => {

  
  const dispatch = useDispatch();
  // const plantList = useSelector((state: any) => state.ReducerVehicle.plantList);
  // const plantListshow = useSelector((state: any) => state.ReducerVehicle.plantList);
 const VehicleTypelist = useSelector((state: any) => state.ReducerVehicle.VehicleTypelist);
//  const CompanyNamelist = [] as any[];

 const CompanyNamelist=useSelector((state: any) => state.ReducerVehicle.CompanyNamelist);

 const plantList =useSelector((state: any) => state.ReducerVehicle.plantList);

 const [CompanyId, setCompanyId] = useState(0)







 const handleChange = (event:any) => {
  const { name, value } = event.target;
  setvehicleaddData((prevState) => ({
    ...prevState,
    [name]: value,
  }));

   setCompanyId (event.target.value) ;

store.dispatch(getPlants(CompanyId));


debugger

};



  useEffect(() => {
  
    store.dispatch(getPlants( CompanyId ));
    debugger

    store.dispatch(getVehicleType());

    store.dispatch(getCompanyName());

  }, [dispatch, CompanyId]);


  useEffect(() => {
  
debugger  

  }, [plantList]);


  const [com_name_isPlaceholderVisible, setcom_name_isPlaceholderVisible] = React.useState(true);
  const [vehitype_isPlaceholderVisible, setvehitype_isPlaceholderVisible] = React.useState(true);
  const [plant_name_isPlaceholderVisible, setplant_name_isPlaceholderVisible] = React.useState(true);

 
  const navigate = useNavigate()


  const incidentDetailsInitial: IIncident={
    Incident:"",
    Date: new Date,
    Outcome:"",
    Id:"",
   
  }

  const incident: IIncident={
    Incident:"",
    Date: new Date,
    Outcome:"",   
    Id:"",
  }


  
  const [CompanyName, setCompanyName] = useState('')
  const [VehicleType, setVehicleType] = useState('')
  const [Plant, setplant] = useState('')

  const vehicleadd: IVehicleadd = {
    CompnayName: CompanyName,
    VehicleNumber: "",
    VehicleType: VehicleType,
    Plant: Plant,
    Seats: 0,
    CBM: 0,
    IncidetnDetails: incidentsList
   
  };

  const [vehicleaddData, setvehicleaddData] = useState({
    CompnayName: vehicleadd.CompnayName,
    VehicleNumber: vehicleadd.VehicleNumber,
    VehicleType: vehicleadd.VehicleType,
    Plant: vehicleadd.Plant,
    Seats: vehicleadd.Seats,
    CBM: vehicleadd.CBM,
    IncidetnDetails: incidentsList
 
  });

  const [incidentData, setIncidentData] = useState({


    Incident:incident.Incident,
    Date:incident.Date,
    Outcome:incident.Outcome,
    Id:"",

  });


  

  


  const handleIncidentDetailChange = (event:any) => {
    const { name, value } = event.target;
    setIncidentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const AddIncidentDetails=()=>{
    
    incidentData.Id=new Date().getUTCMilliseconds().toString();
    incidentsList.push(incidentData);
    setIncidentData(incidentDetailsInitial);
    setIncidentData((prevState) => ({
      ...prevState,
      IncidetnDetails: incidentsList,
    }));
    dispatch(addIncidentMethodList(incidentData));  
  
  }

  const ClearIncidentDetails=()=>{
    setIncidentData(incidentDetailsInitial);
  }
  

  const handleNewRequest = () => {

    navigate(APP_ROUTES.TM_VEHICLE_MANAGEMENT)
  }

  // const [selectedCompanyId, setSelectedCompanyId] = useState('');

  
  return (
    <div>
      <section className={style.gridContainer}>
        <div className={style.gridHeader}>
          <Typography
            noWrap
            component="div"
            className={style.gridTitle}
          >
            <h3>Manage Vehicles</h3>
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
          <h4 className={style.dropdownName}>Company Name</h4>
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
            id="CompanyName"
            className={style.dropdownInput}
            shrink={!com_name_isPlaceholderVisible}
           
           
          >
            {com_name_isPlaceholderVisible ? 'Select Company' : ''}
          </InputLabel>
          <Select
  labelId="option1-label"
  id="option1"
  value={vehicleaddData.CompnayName}
  onChange={handleChange}
  name="CompnayName"
  onClick={() => {setcom_name_isPlaceholderVisible(false)}}
>
{CompanyNamelist.map((companyName:any) => (
  <MenuItem key={companyName.id} value={companyName.id}>
    {companyName.name}
  </MenuItem>
))}

</Select>
{/* 
<p>Selected Company ID: {selectedCompanyId}</p> */}
        </FormControl>


     
</Grid>
<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.textboxtitle}>Vehicle Number</h4>
          
          <TextField
            id="vehicle_number"
            variant="outlined"
            className={style.textboxinput}
            name="VehicleNumber"
            value={vehicleaddData.VehicleNumber}
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
              placeholder: 'Enter Incident',
            }}
          />

   
        </Grid>
</Grid>


<Grid container spacing={2}>
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
            id="sbu"
            className={style.dropdownInput}
            shrink={!vehitype_isPlaceholderVisible}
           
           
          >
            {vehitype_isPlaceholderVisible ? 'Select Vehicle Type' : ''}
          </InputLabel>
          <Select
            labelId="option1-label"
            id="option1"
            value={vehicleaddData.VehicleType}
            onChange={handleChange}
            name="VehicleType"
            onClick={()=>{setvehitype_isPlaceholderVisible(false)}}>
             {VehicleTypelist.map((vehitype: any) => (
    <MenuItem key={vehitype.id} value={vehitype.id}>
      {vehitype.description}
    </MenuItem>
  ))}
          </Select>
      

        </FormControl>

</Grid>
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
            id="sbu"
            className={style.dropdownInput}
            shrink={!plant_name_isPlaceholderVisible}
           
           
          >
            {plant_name_isPlaceholderVisible ? 'Select Attached SBUs' : ''}
          </InputLabel>
          <Select
         labelId="option1-label"
         id="option1"
         value={vehicleaddData.Plant}

         onChange={handleChange}
         name="Plant"
         onClick={()=>{setplant_name_isPlaceholderVisible(false)}}>
  
      {plantList && plantList.map((plantName: any) => (
  <MenuItem key={plantName.id} value={CompanyId}>
    {plantName.name}
  
  </MenuItem>
))}


          </Select>
    
        </FormControl>      
</Grid>
</Grid>
      
   
<Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>

<h4 className={style.textboxtitle}>Seating Capacity</h4>

 
          <TextField
            id="Seats"
            variant="outlined"
            className={style.textboxinput}
            name="Seats"
            value={vehicleaddData.Seats}
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
              placeholder: 'Enter Available Seats',
            }}
          />

</Grid>
<Grid item md={6} xs={6} sm={12}>

<h4 className={style.textboxtitle}>Vehicle Capacity (CBM)</h4>

 
<TextField
  id="CBM"
  variant="outlined"
  className={style.textboxinput}
  name="CBM"
  value={vehicleaddData.CBM}
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
    placeholder: 'Enter CBM',
  }}
/>

</Grid>
</Grid>

     <div>
      <div className={style.gridHeader}>
       <h3>Incident</h3>
       <br></br>
      </div>
      <h4 className={style.incident}>Incident</h4>
      <TextField
          id="incident"
          placeholder="Enter Incident"
          value={incidentData.Incident}
          name="Incident"
          onChange={handleIncidentDetailChange}
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

        />

      </div>

    
      <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.textboxtitle}>Date</h4>
          <TextField
        type="date"
        id="date"
        value={incidentData.Date}
          name="Date"
          onChange={handleIncidentDetailChange}
        
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
    
          <h4 className={style.textboxtitle}>Outcome</h4>
          <TextField
            id="outcome"
            variant="outlined"
            value={incidentData.Outcome}
          name="Outcome"
          onChange={handleIncidentDetailChange}
            className={style.textboxinput}
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
          
  <h4 className={style.recIncident}>Recorded Incidents</h4>

  <DataTable/>

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
            <Button className={style.delete}>Delete</Button>
            <Button className={style.use}>Use</Button>
            
          </div>
</Grid>
</Grid>


</section>
 </div>

     );
   };
   

export default TMVehicle;

function fetchData(): any {
  throw new Error('Function not implemented.');
}
