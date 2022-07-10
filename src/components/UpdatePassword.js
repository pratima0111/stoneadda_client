import { Button, Grid, Paper, TextField} from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const UpdatePassword=()=> {

    const PaperStyle  = {padding: 20, height: '70vh', width: 350, margin: "40px auto"}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitted(true);
        const data = new FormData(event.currentTarget);
      }
    const handleEmailChange= (e) => {
        setEmail(e.target.value);
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

        return (
        <Grid>
            <Paper elevation = {10} style = {PaperStyle}>
                <div align="center">
                <Avatar style = {avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2 style={{ marginTop: `${40}px` }}> Forgot password ?</h2>
                </div>
               
                <form onSubmit={handleSubmit}>
                <TextField id="E-mail" label = 'Enter email address' placeholder="Enter your E-mail id" fullWidth variant="standard" required
                    name="email"
                    autoComplete="email"
                    onChange={handleEmailChange}
                    error={submitted && validateEmail(email)!==""}
                    helperText={submitted ? validateEmail(email) : ""}/>
                

                <Button type='Submit' color="secondary" fullWidth variant="contained" style={{ marginTop: `${40}px` }}  >Continue</Button>

                </form>
             
                
                
            </Paper>
        </Grid> 
    )

    
}

export default UpdatePassword