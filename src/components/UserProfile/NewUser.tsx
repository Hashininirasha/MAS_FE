import { Box, Button, Grid, InputLabel,Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './NewUser.module.scss'
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import Avatar from '@mui/material/Avatar';


const NewUser = () => {
  
  const navigate = useNavigate()

  const handleNewRequest = () => {

    navigate(APP_ROUTES.SBU_COMPANY_ADD)
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
          
          </Typography>  
        </div>
    
        <div className={style.gridHeader}>
          <Box sx={{ flexGrow: 1 }} />

        </div>
        <Box className={style.outline}>
 
    <Grid container spacing={2}>
        <Grid item xs>
        
        <Avatar
        alt="profile"
        src="/static/images/avatar/1.jpg"
        className={style.profileimg}
      />
        <div className={style.profile}>

        


    <Grid container spacing={2}>

<Grid item md={10} xs={10} sm={12}>

<Button className={style.buttonselect}>My Profile</Button>

</Grid>
<Grid item md={2} xs={2} sm={12}>
  <div className={style.verticalline}>

  </div>

</Grid>
</Grid>






<Grid container spacing={2}>

<Grid item md={10} xs={10} sm={12}>

<Button className={style.button}>Notifications</Button>

</Grid>
<Grid item md={2} xs={2} sm={12}>
  <div className={style.verticalline}>

  </div>

</Grid>
</Grid>



<Grid container spacing={2}>

<Grid item md={10} xs={10} sm={12}>

<Button className={style.buttonSec}>Password and Security</Button>


</Grid>
<Grid item md={2} xs={2} sm={12}>
  <div className={style.verticalline}>

  </div>

</Grid>
</Grid>


<Grid container spacing={2}>

<Grid item md={10} xs={10} sm={12}>

<Button className={style.button}>Event History</Button>

</Grid>
<Grid item md={2} xs={2} sm={12}>
  <div className={style.verticalline}>

  </div>

</Grid>
</Grid>


<Grid container spacing={2}>

<Grid item md={10} xs={10} sm={12}>


</Grid>
<Grid item md={2} xs={2} sm={12}>
  <div className={style.verticalline}>

  </div>

</Grid>
</Grid>

</div>
    
        </Grid>
        <Grid item xs={5}>
        <h2 className={style.name}>Udayanga Bandara</h2>
    <h4 className={style.designation}>Marketing Manager</h4>
     
         <h5>Your account is ready, you can apply for the trip</h5>

<div className={style.personal}>

    <h3>Personal</h3>
  

    <Grid container spacing={2}>

<Grid item xs={6}>

<h4 className={style.headingtitlevehi}>First Name</h4>
<InputLabel
  htmlFor="firstName"
  className={style.labelsmall}
>
  <p>First Name</p>
</InputLabel>

</Grid>

<Grid item xs={6}>

<h4 className={style.headingtitlevehi}>Last Name</h4>
<InputLabel
  htmlFor="LastName"
  className={style.labelsmall}
>
  <p>Last Name</p>
</InputLabel>

</Grid>



</Grid>


<Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >SBU</h4>
<InputLabel
  htmlFor="sbu"
  className={style.label}
>
  <p>SBU</p>
</InputLabel>



    </Grid>
    </Grid>


    <Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Plant</h4>
<InputLabel
  htmlFor="plant"
  className={style.label}
>
  <p>Palnt</p>
</InputLabel>



    </Grid>
    </Grid>

    <Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Department</h4>
<InputLabel
  htmlFor="department"
  className={style.label}
>
  <p>Department</p>
</InputLabel>


    </Grid>
    </Grid>

</div>



        </Grid>
        <Grid item xs={5}>
        <div className={style.contact}>

<h3>Contact</h3>


     <Grid container spacing={2}>

<Grid item xs={6}>

<h4 className={style.headingtitlevehi}>Contact-Mobile</h4>
<InputLabel
  htmlFor="contact-mobile"
  className={style.labelsmall}
>
  <p>Contact-Mobile</p>
</InputLabel>

</Grid>

<Grid item xs={6}>

<h4 className={style.headingtitlevehi}>Contact-Home</h4>
<InputLabel
  htmlFor="contact-home"
  className={style.labelsmall}
>
  <p>Contact-Home</p>
</InputLabel>

</Grid>



</Grid>


<Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Email</h4>
<InputLabel
  htmlFor="email"
  className={style.label}
>
  <p>Email</p>
</InputLabel>


</Grid>
</Grid>


<Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Address</h4>
<InputLabel
  htmlFor="address"
  className={style.label}
>
  <p>Address</p>
</InputLabel>


</Grid>
</Grid>

<Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Department</h4>
<InputLabel
  htmlFor="Department"
  className={style.label}
>
  <p>Department</p>
</InputLabel>



</Grid>
</Grid>

</div>
        </Grid>
      </Grid>

</Box>

</section>
   
       </div>

     );
   };
   

export default NewUser;