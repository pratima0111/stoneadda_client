import { Button, FormControlLabel, Grid, Paper, TextField, Link } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Component, useState } from "react";

const SignIn = () => {

  const PaperStyle = { padding: 20, height: '70vh', width: 350, margin: "40px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const navigate = useNavigate();

  const [firstName, setfirstName] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [strongPasswordError, setStrongPasswordError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const data = new FormData(event.currentTarget);
  }
  const handleFirstNameChange= (e) => {
    setfirstName(e.target.value);
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

  const validateFirstName = (firstName) => {
    if(firstName.length < 3 || firstName.length>50){
        return "Please enter a valid username name!";
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
          return  "Enter minimum 8 characters(atleast 1 uppercase, 1 lowercase, 1 number, 1 symbol)";
        }
        else{
          return "";  
        }
        }
      
                                    
  }


  return (
    <Grid>
      <Paper elevation={10} style={PaperStyle}>
        <div align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Sign In</h2>

        </div>

        <form onSubmit={handleSubmit}>
        <TextField id="Username" label='Username' placeholder="Enter Username" fullWidth variant="standard" required 
         autoFocus
         onChange={handleFirstNameChange}
         error={submitted && validateFirstName(firstName)!==""}
         helperText={submitted ? validateFirstName(firstName): ""}/>

        <TextField id="Password" label='Password' placeholder="Enter Password" type='password' fullWidth variant="standard" required 
         name="password"
         autoComplete="new-password"
         onChange={handlePasswordChange}
         error={submitted && validateStrongPassword(password)!==""}
         helperText={submitted ? validateStrongPassword(password) : ""}/>

        <FormControlLabel
          control={
            <Checkbox
              name="checkBox"
            />
          }
          label="Remember Me"
        />

        <Button type='Submit' color="secondary" fullWidth variant="contained" style={{ marginTop: `${10}px` }}>SIGN IN</Button>

        <div className="Link" style={{ marginTop: `${10}px` }}>
          <Typography >
            <Link href={"/Update_Password"} underline="hover" onClick={() => { navigate('/Upadte Password') }} >
              {'Forgot Password ?'}

            </Link>
          </Typography>
        </div>


        <div className="Link" style={{ marginTop: `${5}px` }}>
          <Typography > Do you have an account ?
            <Link href={"/SignUp"} underline="hover" onClick={() => { navigate('/SignUp') }} >
              {' Sign Up '}

            </Link>
          </Typography>


        </div>
        </form>
      </Paper>
    </Grid>
  )


}

export default SignIn