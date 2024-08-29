import React, { useState, useEffect } from 'react';
import { windowWidth } from '@uxpin/expressions';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ButtonBase from '@mui/material/ButtonBase';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { Image } from 'mui-image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Box, Grid, Typography, Card, CardContent, CardActions, Button, CircularProgress, Container } from '@mui/material';
import { Link } from 'react-router-dom'; 
import mockPlants from './mockData'; 

 const MyPlants=() => {

const [value, setValue] = React.useState(undefined);
const [open, setOpen] = React.useState(false);
const [direction, setDirection] = React.useState('column');
const [paddingLeft, setPaddingLeft] = React.useState(undefined);
const [plants, setPlants] = useState(undefined);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setTimeout(() => {
      setPlants(mockPlants);
      setLoading(false); 
  }, 1000); 
}, []);


    // useEffect ( ()=> {
    //     axios.get('http://localhost:8080/PlantProfiles') 
    //         .then((response) => {
    //             setPlants(response.data);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setError(err); 
    //             setLoading(false);
    //         })
    // }, []);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error fetching plants: {error.message}</Typography>;

function onResize() { if(windowWidth() < 769) { setPaddingLeft('0') }else {setPaddingLeft('250px');} }
 
//React.useEffect(() => { window.addEventListener('resize', onResize);  return () => window.removeEventListener('resize', onResize)});

  return (<Box
  height="100%"
> 
    
  <Stack
    direction="column"
    paddingLeft={paddingLeft}
  >
    <AppBar
      position="static"
      color="success"
    >
      <Toolbar
        justifyContent="space-between"
        disableGutters={true}
        variant="dense"
      >
        <Hidden
          smUp={true}
        />
        <Box
          paddingRight="20px"
          flexGrow={1}
          paddingLeft="80px"
        >
          <TextField
            variant="outlined"
            fullWidth={true}
            size="small"
            placeholder="Search"
            InputProps={{ startAdornment: <Icon>Search</Icon> }}
            sx={{ maxWidth: '800px', "& .MuiOutlinedInput-root": { background: '#ffffff' } }}
            value={value}
            onChange={(e) => {  setValue(e.target.value); }}
          />
        </Box>
        <Stack
          direction="row"
          spacing="8px"
        >
          <Badge
            badgeContent="1"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            color="secondary"
            overlap="circular"
            variant="standard"
          >
            <IconButton
              color="inherit"
            >
              <Icon
                //baseClassName="material-icons-outlined"
              >
                calendar_month
              </Icon>
            </IconButton>
          </Badge>
          <Badge
            badgeContent="3"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            color="secondary"
            overlap="circular"
          >
            <IconButton
              color="inherit"
            >
              <Icon
                baseClassName="material-icons-outlined"
              >
                notifications
              </Icon>
            </IconButton>
          </Badge>
          <Menu
            anchorEl="#account-button"
            autoFocus={false}
            open={open}
            onClose={() => { setOpen(false); }}
          >
            <List
              disablePadding={true}
            >
              <ListItem
                disablePadding={true}
                disableGutters={true}
              >
                <ListItemButton
                  divider={true}
                >
                  <ListItemAvatar>
                    <Avatar
                      src="https://i.pravatar.cc/65?img=45"
                    >
                      <Icon>
                        people
                      </Icon>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="My Account"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disableGutters={true}
                disablePadding={true}
              >
                <ListItemButton
                  dense={true}
                >
                  <ListItemIcon>
                    <Icon
                      fontSize="small"
                      baseClassName="material-icons-outlined"
                    >
                      add
                    </Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="Add Account"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disableGutters={true}
                disablePadding={true}
              >
                <ListItemButton
                  dense={true}
                >
                  <ListItemIcon>
                    <Icon
                      fontSize="small"
                      baseClassName="material-icons-outlined"
                    >
                      settings
                    </Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="Settings"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disableGutters={true}
                disablePadding={true}
              >
                <ListItemButton
                  dense={true}
                >
                  <ListItemIcon>
                    <Icon
                      fontSize="small"
                      baseClassName="material-icons-outlined"
                    >
                      logout
                    </Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="Logout"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Menu>
          <ButtonBase
            sx={{ padding: '4px', borderRadius: '8px' }}
            disabled={false}
            id="account-button"
            onClick={() => { setOpen(true); }}
          >
            <Avatar
              sx={{ width: '28px', height: '28px' }}
              src="https://i.pravatar.cc/65?img=45"
            />
            <Typography
              variant="body2"
              marginLeft="8px"
              color="inherit"
              noWrap={true}
            >
              Jane Doe
            </Typography>
          </ButtonBase>
        </Stack>
      </Toolbar>
    </AppBar>
    <Box
      padding="60px"
      minHeight="900px"
    >
      <Breadcrumbs
        aria-label="breadcrumb"
      >
        <Link
          underline="always"
          color="inherit"
          href="#"
          TypographyClasses={{ size: 20 }}
          variant="h5"
        >
          Home
        </Link>
       
      </Breadcrumbs>
      
    

  <Container>
            <Typography variant="h4" gutterBottom align="left" fontStyle='italic' paddingTop= "40px">
                My Plants
            </Typography>
            <Grid container spacing={4} direction='column' >
                {plants.map((plant) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={plant.id}
                    style={{
                      // display: 'flex',
                      // justifyContent: plant.id % 2 === 0 ? 'flex-end' : 'flex-start',
                  }}
                    >
                        <Card
                         style={{display: 'flex',
                       justifyContent:plant.id % 2 === 0 ? 'flex-end' : 'flex-start'}}>
                        <img src={plant.imageUrl}
                              style={{ width: '20%', height: 'auto', borderRadius: '8px', alignSelf:plant.id % 2 === 0 ? 'flex-end' : 'flex-start' }}
                              />    
                            <CardContent>
                                                 
                                <Typography variant="h5" component="div"  style={{
                                        textAlign: plant.id % 2 === 0 ? 'right' : 'left',
                                    }}>
                                    {plant.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary"  style={{
                                        textAlign: plant.id % 2 === 0 ? 'right' : 'left',
                                    }}>
                                    Location: {plant.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Watering Status: {plant.needsWater ? 'Needs Watering' : 'Watered'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    component={Link}
                                    to={`/plants/${plant.id}`} // Route to the plant profile
                                    color="primary"
                                >
                                    View Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
      {/* <Stack
        direction="row"
        spacing="8px"
        justifyContent="flex-end"
        alignItems="center"
        paddingTop="40px"
        paddingBottom="32px"
        style={{ color: '#0a2906' }}
      >
        <Typography
          variant="h1"
          flexGrow={1}
          color="inherit"
          fontWeight="bold"
          noWrap={true}
          padding="20px"
          fontStyle="italic"
        >
            My Plants
        </Typography>
        <IconButton
          onClick={() => { setDirection('column'); }}
         />
      </Stack>
      <Grid
        container={true}
        spacing={10}
        wrap="wrap"
        rowSpacing={10}
        sx={{ "&.MuiGrid-direction-xl-column .MuiTypography-subtitle2": { display: 'initial' } }}
        paddingBottom="40px"
        xl=""
        xs="20"
        flexGrow={5}
        columnSpacing={10}
        paddingTop="30px"
        direction={direction}
      >
        <Grid
          item={true}
          xs="12"
          sm="6"
          container={true}
          wrap="wrap-reverse"
          lg="2"
          md="4"
          alignContent="space-between"
          columns={0}
          flexGrow={5}
        >
          <Stack
            direction="row"
            flexWrap="wrap"
            width="500"
            height="500"
          >
            <Box
              width="400px"
              padding="20px"
              bgcolor="white"
              borderRadius={4}
              display="block"
              alignContent="center"
              height="400px"
              marginRight="20px"
              position="static"
              flexDirection="column"
            >
              <Image
                //src=
                fit="fill"
                width="100%"
                height="100%"
              />
            </Box>
            <Stack
              direction="column"
              spacing="20px"
              paddingTop="10px"
              flexWrap="wrap"
              flexGrow={1}
              alignItems="default"
            >
              <Typography
                variant="h1"
                fontSize={40}
                fontStyle="italic"
                fontWeight="bold"
                color="inherit"
              >
                Angelique Pink Tulip
              </Typography>
              <Typography
                variant="h5"
                fontSize={0}
              >
                <Typography
                  variant="h5"
                  flexGrow={0}
                  display="inline"
                  color="success.main"
                  fontWeight="bold"
                  marginRight="10px"
                >
                  Watered
                </Typography>
              </Typography>
              <Typography
                variant="h1"
                color="grey.500"
                fontWeight="bold"
                fontSize={30}
              >
                <Typography
                  variant="subtitle1"
                  align="left"
                >
                  FRONT YARD
                </Typography>
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                paddingTop="5px"
                sx={{ display: 'none' }}
                flexGrow={1}
              >
                
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item={true}
          xs="12"
          sm="6"
          container={false}
          wrap="nowrap"
          lg="2"
          md="4"
          flexGrow={4}
          columnSpacing={10}
          alignContent="stretch"
        >
          <Stack
            direction="row"
            flexWrap="wrap"
            flexGrow={3}
          >
            <Stack
              direction="column"
              spacing="20px"
              paddingTop="10px"
              flexWrap="wrap"
              flexGrow={4}
              width=""
              height=""
              paddingRight="30 px"
              paddingLeft="100px"
              alignItems="flex-end"
              padding="30px"
            >
              <Typography
                variant="h3"
                fontSize={40}
                fontWeight="bold"
                fontStyle="italic"
              >
                Hanging Rose
              </Typography>
              <Typography
                variant="h5"
                color="warning.main"
              >
                Watering In Progress...
              </Typography>
              <Typography
                variant="overline"
                color="grey.500"
                fontWeight="default"
                fontSize={15}
              >
                Front Yard
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                paddingTop="5px"
                sx={{ display: 'none' }}
                flexGrow={1}
              >
                
              </Typography>
            </Stack>
            <Box
              width="400px"
              padding="20px"
              bgcolor="success.main"
              borderRadius={4}
              display="block"
              alignContent="center"
              height="400px"
              marginRight="10px"
              position="relative"
              style={{ color: '#cffc9a' }}
              borderColor="white"
              paddingTop="-10px"
            >
              <Image
                //src=
                fit="fill"
                width="100%"
                height="100%"
                style={{ color: '#cffc9a' }}
              />
            </Box>
          </Stack>
        </Grid>
        <Grid
          item={true}
          xs="12"
          sm="6"
          container={false}
          wrap="nowrap"
          lg="2"
          md="4"
          alignItems="flex-start"
        >
          <Stack
            direction="row"
            flexWrap="wrap"
          >
            <Box
              width="400px"
              padding="20px"
              bgcolor="white"
              borderRadius={4}
              display="block"
              alignContent="center"
              height="400px"
              marginRight="20px"
              position="relative"
              style={[  ]}
              borderColor="white"
            >
              <Image
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSf8HjCzGCQ4F8StLJ2Srn-OD-OPm3sUXLxyfQB4Mv65yQe6uT12fiqptwPvcF85SFrVXrCQpmOZhG3pe8"
                fit="fill"
                width="100%"
                height="100%"
                style={{ color: '#cffc9a' }}
              />
            </Box>
            <Stack
              direction="column"
              spacing="20px"
              paddingTop="20px"
              flexWrap="wrap"
              flexGrow={1}
              width=""
              height=""
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                fontStyle="italic"
              >
                Cactus
              </Typography>
              <Typography
                variant="h5"
                color="error.main"
              >
                Too much water!
              </Typography>
              <Typography
                variant="overline"
                color="grey.500"
                fontWeight="default"
                fontSize={15}
              >
                BALCONY
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                paddingTop="5px"
                sx={{ display: 'none' }}
                flexGrow={1}
              >
                
              </Typography>
            </Stack>
          </Stack> */}
        {/* </Grid> */}
      {/* </Grid> */}
      <Box
        textAlign="center"
        flex="1"
        alignItems="center"
      />
    </Box>
  </Stack>
</Box>);
};
export default MyPlants;