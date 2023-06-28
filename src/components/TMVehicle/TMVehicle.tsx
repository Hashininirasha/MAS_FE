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
import {insertVehicle} from '../../services/vehicle.service';



const incidentsList:IIncident[]=[]

const TMVehicle = () => {

  
  const dispatch = useDispatch();
  // const organizationUnitIdList = useSelector((state: any) => state.ReducerVehicle.organizationUnitIdList);
  // const organizationUnitIdListshow = useSelector((state: any) => state.ReducerVehicle.organizationUnitIdList);
 const VehicleTypelist = useSelector((state: any) => state.ReducerVehicle.VehicleTypelist);


 const CompanyNamelist=useSelector((state: any) => state.ReducerVehicle.CompanyNamelist);

 const organizationUnitIdList =useSelector((state: any) => state.ReducerVehicle.organizationUnitIdList);

 const [CompanyId, setCompanyId] = useState(0)



 const handleChange = (event:any) => {
  const { name, value } = event.target;
  setvehicleaddData((prevState) => ({
    ...prevState,
    [name]: value,
  }));

   setCompanyId (event.target.value) ;

store.dispatch(getPlants(CompanyId));



};



  useEffect(() => {
  
    store.dispatch(getPlants( CompanyId ));

    store.dispatch(getVehicleType());

    store.dispatch(getCompanyName());

  }, [ CompanyId]);


  // useEffect(() => {
  


  // }, [organizationUnitIdList]);


  const [com_name_isPlaceholderVisible, setcom_name_isPlaceholderVisible] = React.useState(true);
  const [vehitype_isPlaceholderVisible, setvehitype_isPlaceholderVisible] = React.useState(true);
  const [organizationUnitId_name_isPlaceholderVisible, setorganizationUnitId_name_isPlaceholderVisible] = React.useState(true);

 
  const navigate = useNavigate()


  const incidentDetailsInitial: IIncident={
    Incident:"",
    Date: new Date,
    outCome:"",
    Id:"",
   
  }

  const incident: IIncident={
    Incident:"",
    Date: new Date,
    outCome:"",   
    Id:"",
  }


  
  const [CompanyName, setCompanyName] = useState('')
  const [VehicleType, setVehicleType] = useState('')
  const [organizationUnitId, setorganizationUnitId] = useState('')

  const vehicleadd: IVehicleadd = {
    CompnayName: CompanyName,
    vehicleNo: "",
    VehicleType: VehicleType,
    organizationUnitId: organizationUnitId,
    seatCount: 0,
    cbm: 0,
    IncidetnDetails: incidentsList
   
  };

  const [vehicleaddData, setvehicleaddData] = useState({
    CompnayName: vehicleadd.CompnayName,
    vehicleNo: vehicleadd.vehicleNo,
    VehicleType: vehicleadd.VehicleType,
    organizationUnitId: vehicleadd.organizationUnitId,
    seatCount: vehicleadd.seatCount !== 0 ? vehicleadd.seatCount : '',
    cbm: vehicleadd.cbm !== 0 ? vehicleadd.seatCount : '',
    IncidetnDetails: incidentsList
 
  });

  const [incidentData, setIncidentData] = useState({


    Incident:incident.Incident,
    Date:incident.Date,
    outCome:incident.outCome,
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
    
    // incidentData.Id=new Date().getUTCMilliseconds().toString();
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
            name="vehicleNo"
            value={vehicleaddData.vehicleNo}
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
          <h4 className={style.dropdownName}>organizationUnitId</h4>
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
            shrink={!organizationUnitId_name_isPlaceholderVisible}
           
           
          >
            {organizationUnitId_name_isPlaceholderVisible ? 'Select Attached SBUs' : ''}
          </InputLabel>
          <Select
         labelId="option1-label"
         id="option1"
         value={vehicleaddData.organizationUnitId}

         onChange={handleChange}
         name="organizationUnitId"
         onClick={()=>{setorganizationUnitId_name_isPlaceholderVisible(false)}}>
  
      {organizationUnitIdList && organizationUnitIdList.map((organizationUnitIdName: any) => (
  <MenuItem key={organizationUnitIdName.id} value={CompanyId}>
    {organizationUnitIdName.name}
  
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
            id="seatCount"
            variant="outlined"
            className={style.textboxinput}
            name="seatCount"
            value={vehicleaddData.seatCount}
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
              placeholder: 'Enter Available seatCount',
            }}
          />

</Grid>
<Grid item md={6} xs={6} sm={12}>

<h4 className={style.textboxtitle}>Vehicle Capacity (cbm)</h4>

 
<TextField
  id="cbm"
  variant="outlined"
  className={style.textboxinput}
  name="cbm"
  value={vehicleaddData.cbm}
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
    placeholder: 'Enter cbm',
  }}
/>

</Grid>
</Grid>
{/* <h4 className={style.recIncident}>Recorded Incidents</h4> */}
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
    
          <h4 className={style.textboxtitle}>outCome</h4>
          <TextField
            id="outCome"
            variant="outlined"
            value={incidentData.outCome}
          name="outCome"
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
              placeholder: 'Enter outCome',
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
          
  <br></br>

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
            <Button className={style.use} onClick={() => store.dispatch(insertVehicle(vehicleaddData))}>Use</Button>
            
          </div>
</Grid>
</Grid>


</section>
 </div>

     );
   };
   

export default TMVehicle;

