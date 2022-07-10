import { Button, FormControlLabel, Grid, Paper, TextField, Link } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Component, useState } from "react";

const UpdatePassword=()=> {

    const PaperStyle  = {padding: 20, height: '70vh', width: 350, margin: "40px auto"}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const navigate = useNavigate();

    

        return (
        <Grid>
            <Paper elevation = {10} style = {PaperStyle}>
                <div align="center">
                <Avatar style = {avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2 style={{ marginTop: `${40}px` }}>Update Password</h2>
                
                </div>
                <TextField id="New Password" label = 'Enter New Password' placeholder="Enter New Password" fullWidth variant="standard" required/>
                <TextField id="Confirm Password" label = 'Confirm Password' placeholder="Confirm Password" fullWidth variant="standard" required/>

                <Button type='Submit' color="secondary" fullWidth variant="contained" style={{ marginTop: `${40}px` }}  
                >SUBMIT</Button>

                 
             
                
                
            </Paper>
        </Grid> 
    )

    
}

export default UpdatePassword