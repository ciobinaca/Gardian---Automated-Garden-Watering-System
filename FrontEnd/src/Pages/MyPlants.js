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

    useEffect ( ()=> {
        axios.get('http://localhost:8080/PlantProfiles') 
            .then((response) => {
                setPlants(response.data);
               localStorage.setItem("plantProfiles", JSON.stringify(response.data));
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(err); 
                setLoading(false);
            })
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error fetching plants: {error.message}</Typography>;

    const handleDelete = (id) => {
      axios.delete(`http://localhost:8080/PlantProfiles/${id}`)
        .then(() => {
          setPlants(plants.filter(plant => plant.id !== id));
        })
        .catch(err => {
          console.error(err);
          setError(err);
        });
    };
  
    const handleEdit = (id) => {
      console.log('Edit plant with id:', id);
    };

 
  return (
  <Box
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
            InputProps={{ startAdornment:  <i className="fas fa-search"></i>  }}
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
              
              <i className="fas fa-calendar"></i> 
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
             
                <i className="fas fa-bell"></i>
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
                      <i className="fas fa-people"></i>
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
                    
                      <i className="fas fa-plus"></i>
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
                  
                      <i className="fas fa-settings"></i>
                 
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
                
                      <i className="fas fa-logout"></i>
                  
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
      padding="30px"
      minHeight="900px"
       className="page-background"
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
                        <img src={plant.image}
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
                                    Last Watered: {plant.lastWatered }
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    component={Link}                           
                                    to={`/plant_profile/${plant.profileId}`} // Route to the plant profile
                                    color="success"
                                >
                                    View Details
                                </Button>
                            </CardActions>
                            <CardActions>
                      {/* <Button size="small" component={Link} to={`/plant_profile/${plant.profileId}`} color="primary">View Details</Button> */}
                      <IconButton color="success" onClick={() => handleEdit(plant.id)}>
                      <i className="fas fa-edit" style={{ fontSize: 24 }}></i>

                      </IconButton>
                      <IconButton color="error" onClick={() => handleDelete(plant.id)}>
                      <i className="fas fa-trash" style={{ fontSize: 24 }}></i>
                      </IconButton>
                    </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
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