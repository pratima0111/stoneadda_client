import { Button, FormControlLabel, Grid, Paper, TextField, Link } from "@mui/material";
import React, { Component, useState } from "react";
import Avatar from '@mui/material/Avatar';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {  useEffect } from "react";
import SignIn from './SignIn';



const SignUp = () => {
  
  
  const PaperStyle = { padding: 20, width: 350, margin: "40px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const headerStyle = { margin: 0 }
  const navigate = useNavigate();

  const [firstName, setfirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [strongPasswordError, setStrongPasswordError] = useState(false);
 
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] =useState(false);
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const data = new FormData(event.currentTarget);
  }

  const handleFirstNameChange= (e) => {
    setfirstName(e.target.value);
  } 
  
  const handleEmailChange= (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange= (e) => {
    setPassword(e.target.value);
    if ( (password.match(/[a-z]/g) && password.match(
      /[A-Z]/g) && password.match(
      /[0-9]/g) && password.match(
      /[^a-zA-Z\d]/g) && password.length >= 8)) {
          setStrongPasswordError(true);
        } 
        else {
          setStrongPasswordError(false);
        }
  }
  const handleConfirmPasswordChange= (e) => {
    setConfirmPassword(e.target.value);
  }
  const handlePhoneChange= (e) => {
    setPhone(e.target.value);
  }
  
 
  const validateFirstName = (firstName) => {
    if(firstName.length < 3 || firstName.length>50){
        return "Please enter a valid username!";
    }
    else{
      return "";
    }
    }
 

  const validateEmail = (email) => {
    let regEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if(email===""){
      return "Email is required!";
    }
    else if(!regEmail.test(email)){
        return "Please enter a valid email address!";
    }
    else{
      return "";
    }
  }
  
  const validateStrongPassword = (password) => {
    
      if(password.length === 0 || password.length > 50){
        return "Password is required!";
      }
    else{
      if(!strongPasswordError){
        return  "Password is weak!(Enter minimum 8 characters(atleast 1 uppercase, 1 lowercase, 1 number, 1 symbol))";
      }
      else{
        return "";  
      }
      }
                                    
  }

  const validateConfirmPassword = (confirmPassword) => {
      if(confirmPassword.length === 0 || confirmPassword.length > 50){
          return "Confirm Password is required!";
      }
      else{
          if(password !== confirmPassword){
              return "Password does not match!";
          }
          else{
              return "";
          }
      }
   
  }

  const validatePhone = (phone) => {
      if(phone?.length < 8 || phone?.length > 50){
        return "Please enter a valid phone number!";
      }
      else{
        return "";
      }  
  }

  


  return (
    <Grid>
      <Paper elevation={10} style={PaperStyle}>
        <div align="center">
          <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon /></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom> Please fill this form to create an account! </Typography>
        </div>

        <form onSubmit={handleSubmit}>

         
          <TextField id="firstName" label='Name' placeholder="Enter your name" type ='text' fullWidth variant="standard"  name="firstName" required
            autoFocus
            onChange={handleFirstNameChange}
            error={submitted && validateFirstName(firstName)!==""}
            helperText={submitted ? validateFirstName(firstName): ""}  /> 
            
          <TextField id="email" label='E-mail' placeholder="Enter your e-mail" type='email' fullWidth variant="standard"   
             name="email"
             autoComplete="email"
             onChange={handleEmailChange}
             error={submitted && validateEmail(email)!==""}
             helperText={submitted ? validateEmail(email) : ""}
             required />
          
          <TextField id="mobile" label='Phone Number' placeholder="Enter your phone number" type='phone' fullWidth variant="standard"   
               name="mobile"
                autoComplete="mobile no."
                  onChange={handlePhoneChange}
                  error={ submitted && validatePhone(phone)!==""}
                  helperText={submitted ? validatePhone(phone) : ""}
             required  />
          
          <TextField id="password" label='Password' placeholder="Enter Password" type='password' fullWidth variant="standard"  
            name="password"
            autoComplete="new-password"
            onChange={handlePasswordChange}
            error={submitted && validateStrongPassword(password)!==""}
            helperText={submitted ? validateStrongPassword(password) : ""}
            required   />
          
          <div>
          <TextField id=" confirmPassword" label='Confirm Password' placeholder="Enter Password" type='password' fullWidth variant="standard"  
             name="confirmPassword"
             autoComplete="confirm-password"
             onChange={handleConfirmPasswordChange}
             error={submitted && validateConfirmPassword(confirmPassword)!==""}
             helperText={submitted ? validateConfirmPassword(confirmPassword) : ""}

            required  />
                      {((confirmPassword===password) && password!=="" && confirmPassword!=="")&&
               <p className="passwordisStrong">
                    <CheckCircleOutlineIcon style={{height:'1rem'}}/>
                    Password matched!
              </p>
               }
                  
            </div>
          
          

        <Button type='Submit' color="secondary" fullWidth variant="contained" style={{ marginTop: `${10}px` }}>SIGN UP</Button>
        <div className="Link" style={{ marginTop: `${5}px` }}>
          <Typography > Already have an account ?
            <Link href={"/SignIn"} underline="hover" onClick={() => { navigate('/SignIn') }}>
              {' Sign In '}

            </Link>

          </Typography>
          </div>
        
        </form>

       

        

      </Paper>
    </Grid>
  )


}

export default SignUp