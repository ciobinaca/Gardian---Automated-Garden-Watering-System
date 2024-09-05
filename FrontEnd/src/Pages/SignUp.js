import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Image } from 'mui-image';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import background from 'D:/GardianWateringSystem/LastVersion/FrontEnd/src/resources/sign_up.jpg';
import MyPlants from './MyPlants';
import {useNavigate} from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';  

const SignUp=() => {

const [username, setUsername] = React.useState("");
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");

const navigate = useNavigate();
const NavigateToSignIn=()=>{    navigate(`/SignIn`);}

  return (<Container
  disableGutters={true}
  sx={{ padding: '20px' }}
  fixed={true}
  style={{ color: '#80ada7'
 }}
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
        src={background}
          fit="fill"
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
          justifyContent="flex-end"
          padding="32px"
        >
          <div
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'start', gap: 'NaNpx' }}
          >
            <Typography
              variant="h4"
              noWrap={true}
              component="h1"
              fontWeight="bold"
              color="success.main"
            >
               <FaLeaf style={{ color: 'green', fontSize: '25px' }} /> Gardian
            
            </Typography>
          </div>
        </Stack>
        <Stack
          direction="column"
          spacing="16px"
          padding="32px"
        >
          <Typography
            variant="h5"
            paddingBottom="16px"
            noWrap={true}
            fontWeight="bold"
          >
            Sign up:
          </Typography>
          <TextField
            fullWidth={false}
            label="Email"
            helperText=""
            required={true}
            name=""
            placeholder=""
            id=""
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value);}}
          />
          <TextField
            label="Username"
            helperText=""
            required={true}
            name=""
            placeholder=""
            id=""
            size="medium"
            type="text"
            value={username}
            onChange={(e) => { setUsername(e.target.value); }}
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
            onChange={(e) => { setPassword(e.target.value); }}
          />
          <Button
            color="success"
            size="medium"
            variant="contained"
            onClick={()=>NavigateToSignIn()}
          >
            SIGN-UP
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
            href="/SignIn"
            variant="body2"
            underline="hover"
            color="success.main"

          >
            Already signed-in?
          </Link>
        </Stack>
      </Grid>
    </Grid>
  </Paper>
</Container>);
};
export default SignUp;