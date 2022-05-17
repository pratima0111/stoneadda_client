import { Button, FormControlLabel, Grid, Paper, TextField, Link } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const SignIn=()=> {

    const PaperStyle  = {padding: 20, height: '70vh', width: 350, margin: "40px auto"}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const navigate = useNavigate();

        return (
        <Grid>
            <Paper elevation = {10} style = {PaperStyle}>
                <div align="center">
                <Avatar style = {avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign In</h2>
                
                </div>
                <TextField id="Username" label = 'Username' placeholder="Enter Username" fullWidth variant="standard" required/>
                <TextField id="Password" label = 'Password' placeholder="Enter Password" type='password' fullWidth variant="standard" required/>
                
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
                   <Link href="#" underline="hover">
                     {'Forgot Password ?'}
                    
                     </Link>
                </Typography>
                </div>
                 
             
                <div className="Link" style={{ marginTop: `${5}px` }}>
                <Typography > Do you have an account ?
                   <Link href ={"/SignUp"} underline="hover" onClick={() => {navigate('/SignUp')}} >
                     {' Sign Up '}
                    
                   </Link>
                   </Typography>
                  
                
                </div>
                
            </Paper>
        </Grid> 
    )

    
}

export default SignIn