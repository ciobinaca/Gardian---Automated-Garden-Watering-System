import React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { Image } from 'mui-image';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import background from "./sign_up.jpg"
import {useNavigate} from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';  

const SignIn =() =>{

const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");

const navigate = useNavigate();
const NavigateToMyPlants=()=>{    navigate(`/MyPlants`);}

  return (<Container
  disableGutters={false}
   sx={{position: 'relative', padding: '20px', paddingTop: '70px'
   }}
 // fixed={true}
 // style={{ color: '#80ada7', backgroundColor: 'rgba(128, 173, 167, 0.3)' }}
>
  <Paper
    elevation={3}
    square={true}
    variant="elevation"
  >
    <Grid
      container={true}
      flexGrow={4}
    >
      <Grid
        item={true}
        xs={12}
        sm="4"
      >
       <Image
      style={{ alignSelf: 'flex-start'}}
      src={background}
       fit="cover"
   />
   </Grid>
      <Grid
        item={true}
        xs={12}
        sm="8"
      > 
        <Stack
          direction="row"
          spacing="16px"
          alignItems="center"
          justifyContent="flex-start"
          padding="32px"
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', gap: 'NaNpx' }}
          >
            <Typography  
              variant="h4"
              noWrap={true}
              component="h1"
              fontWeight="bold"
              color="success.main"
            >
             Gardian  <FaLeaf style={{ color: 'green', fontSize: '25px' }} /> 
            
            </Typography>
          <Typography variant='h6'
              sx={{ fontStyle: 'italic', fontFamily: "Arial",
                fontSize: "25" }}
              color="success.main"
              //text-decoration= "none solid" 
              >
              Take your plants anywhere you go
              </Typography></div>
        </Stack>
        <Stack
          direction="column"
          spacing="16px"
          padding="32px"
        >
          <Typography
            variant="h5"
            paddingLeft="0px"
            paddingBottom="16px"
            noWrap={true}
            textAlign="left"
          >
            Please sign in:
          </Typography> 
          <TextField
            fullWidth={false}
            label="Email"
            helperText=""
            required={true}
            name=""
            placeholder=""
            id=""
            type="text"
            value={username}
            onChange={(e) => {  setUsername(e.target.value); }}
          />
          <TextField
            label="Password"
            helperText=""
            required={true}
            name=""
            placeholder=""
            id=""
            size="medium"
            type="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value); }}
          />
          <FormControlLabel
            label="Remember me"
            control={
              <Checkbox
                value="remember"
                color="primary"
              />
            }
          />
          <Button
            color="success"
            size="medium"
            variant="contained"
            onClick={()=>{NavigateToMyPlants()}}
          >
            Sign-In
          </Button>
        </Stack>
        <Stack
          direction="row"
          spacing="24px"
          alignItems="center"
          justifyContent="space-between"
          padding="32px"
          paddingTop="0"
        >
          <Link
            href="#"
            variant="body2"
            underline="hover"
            color="success.main"
          >
            Forgot password?
          </Link>
          <Link
            href='/SignUp'
            variant="body2"
            underline="hover"
            color="success.main"
          >
            Don't have an account?
          </Link>
        </Stack>
      </Grid>
     </Grid> 
  </Paper>
</Container>);
}
export default SignIn;