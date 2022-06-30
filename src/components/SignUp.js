import { Button, FormControlLabel, Grid, Paper, TextField, Link } from "@mui/material";
import React, { Component } from "react";
import Avatar from '@mui/material/Avatar';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import SignIn from './SignIn';


const SignUp = () => {

  const PaperStyle = { padding: 20, width: 350, margin: "40px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const headerStyle = { margin: 0 }
  const navigate = useNavigate();

  return (
    <Grid>
      <Paper elevation={10} style={PaperStyle}>
        <div align="center">
          <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon /></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom> Please fill this form to create an account! </Typography>
        </div>

        <form>
          <TextField id="Name" label='Name' placeholder="Enter your name" fullWidth variant="standard" required />
          <TextField id="E-mail" label='E-mail' placeholder="Enter your e-mail" type='email' fullWidth variant="standard" required />
          <TextField id="Phone" label='Phone Number' placeholder="Enter your phone number" fullWidth variant="standard" required />
          <TextField id="Password" label='Password' placeholder="Enter Password" type='password' fullWidth variant="standard" required />
          <TextField id=" ConfirmPassword" label='Confirm Password' placeholder="Enter Password" type='password' fullWidth variant="standard" required />
        </form>

        <FormControlLabel
          control={
            <Checkbox
              name="checkBox2"
              sx={{
                color: '#ff80ab',
                '&.Mui-checked': {
                  color: '#ff80ab',
                },
              }}
            />
          }
          label="I accept the terms and conditions."
        />

        <Button type='Submit' color="secondary" fullWidth variant="contained" style={{ marginTop: `${10}px` }}>SIGN UP</Button>
        <div className="Link" style={{ marginTop: `${5}px` }}>
          <Typography > Already have an account ?
            <Link href={"/SignIn"} underline="hover" onClick={() => { navigate('/SignIn') }}>
              {' Sign In '}

            </Link>

          </Typography>



        </div>


      </Paper>
    </Grid>
  )


}

export default SignUp