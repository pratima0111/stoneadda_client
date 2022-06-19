import { Button, FormControlLabel, Grid, Paper, TextField, Link } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const UpdatePassword=()=> {

    const PaperStyle  = {padding: 20, height: '70vh', width: 350, margin: "40px auto"}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const navigate = useNavigate();

        return (
        <Grid>
            <Paper elevation = {10} style = {PaperStyle}>
                <div align="center">
                <Avatar style = {avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2 style={{ marginTop: `${40}px` }}> Forgot password ?</h2>
                </div>
               
                
                <TextField id="E-mail" label = 'Enter email address' placeholder="Enter your E-mail id" fullWidth variant="standard" required/>
                

                <Button type='Submit' color="secondary" fullWidth variant="contained" style={{ marginTop: `${40}px` }}  onClick={() => {navigate('/Forgot_Password')}}>Continue</Button>

                 
             
                
                
            </Paper>
        </Grid> 
    )

    
}

export default UpdatePassword