import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Grid, LinearProgress, Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import axios from 'axios';
import 'D:/GardianWateringSystem/LastVersion/FrontEnd/src/App.css';

const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: 'auto',
});

const PlantProfile = () => {
  let { profileId } = useParams();
  // const plantId = useParams(); 
  const [plantProfileData, setPlantProfileData]= useState(null);
  const [plantData, setPlantData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [wateringDates, setWateringDates] = useState([]);
  const [error, setError] = useState(null);

 const getPlantProfileData = ()=>{
    axios.get(`http://localhost:8080/PlantProfile/${profileId}`)
    .then((response) => {
     setPlantProfileData(response.data); 
     console.log(response.data);})

  }

  useEffect(() => {
    getPlantProfileData();
  }, [profileId]);

  useEffect(() => {
    if (plantProfileData) {
      axios.get(`http://localhost:8080/Plant/${plantProfileData.plantId}`)
        .then((response) => {
          setPlantData(response.data);
          console.log("Plant Data:", response.data);
          setLoading(false);
          calculateWateringDates(response.data.wateringFrequency);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
          setLoading(false);
        });
    }
  }, [plantProfileData]); 

  const calculateWateringDates = (frequency) => {
    const today = new Date();
    let interval;
    if (frequency === 'Daily') {
      interval = 1;
    } else if (frequency === 'Weekly') {
      interval = 7;
    } else if (frequency === 'Biweekly') {
      interval = 14;
    } else {
      interval = 30; // Monthly
    }

    const dates = [];
    for (let i = 0; i < 5; i++) { // Schedule for the next 5 intervals
      const nextWatering = new Date(today);
      nextWatering.setDate(today.getDate() + i * interval);
      dates.push(nextWatering);
    }
    setWateringDates(dates);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month' && wateringDates.some(wateringDate => wateringDate.toDateString() === date.toDateString())) {
      return <span style={{ backgroundColor: '#4caf50', color: 'white', padding: '3px', borderRadius: '50%' }}>💧</span>;
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <div className="page-background" >
    <Box 
    p={7} paddingLeft={30}>
      <Typography variant="h4" gutterBottom align="Left" paddingLeft='100px' >
        {plantData.name} 
      </Typography>
      <Grid container spacing={-3} paddingTop="15px">
        <Grid item xs={12} md={5.5}>
          <StyledCard>
            <CardContent>
              <img
                 src={plantData.image}
                 alt={plantData.name}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <Typography variant="h6" mt={2}>
                 Location: {plantData.location}
              </Typography>
              <Typography variant="body1">
                {/* Needs Water: {plantData.needsWater ? 'Yes' : 'No'}  */}
              </Typography>
              <Typography variant="body2">
               Watering Frequency: {plantData.waterFrequency} 
              </Typography>
              <Typography variant="body2">
                Preferred Sunlight: {plantData.lightRequirements} 
              </Typography>
              <Typography variant="body2">
                Soil Type: {plantData.soilType}
              </Typography>
            </CardContent>
          </StyledCard>
          <Grid item xs={12} paddingTop={5}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Care Tips
              </Typography>
              <Typography variant="body2" gutterBottom>
                {/* {plantData.careTips} */}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        </Grid>
        <Grid item xs={30} md={4}>
          <StyledCard >
          <CardContent>
      <Typography variant="h6" gutterBottom>
        Sensor Status
      </Typography>
      
      {/* Moisture Level */}
      <Typography variant="body2" gutterBottom>
        Moisture Level
      </Typography>
      <Box sx={{ position: 'relative', mb: 2 }}>
        <LinearProgress
          variant="determinate"
          value={plantData.moisture}
          sx={{ height: 10 }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: -25,
           // left: `${plantData.optimalSoilMoistureMin}%`,
            transform: 'translateX(-50%)',
            color: 'text.secondary',
          }}
        >
          {plantData.optimalSoilMoistureMin}%
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: -25,
            left: `100%`,
            transform: 'translateX(-50%)',
            color: 'text.secondary',
          }}
        >
          {plantData.optimalSoilMoistureMax}%
        </Box>
      </Box>
      
      {/* Temperature */}
      <Typography variant="body2" gutterBottom>
        Temperature ({plantData.temperature}°C)
      </Typography>
      <Box sx={{ position: 'relative', mb: 2 }}>
        <LinearProgress
          variant="determinate"
          value={(plantData.temperature / plantData.temperatureMax) * 100}
          sx={{ height: 10 }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: -25,
            left: `${(plantData.temperatureMin / plantData.temperatureMax) * 100}%`,
            transform: 'translateX(-50%)',
            color: 'text.secondary',
          }}
        >
          {plantData.temperatureMin}°C
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: -25,
            left: `${(plantData.temperatureMax / plantData.temperatureMax) * 100}%`,
            transform: 'translateX(-50%)',
            color: 'text.secondary',
          }}
        >
          {plantData.temperatureMax}°C
        </Box>
      </Box>
      
      {/* Light Level */}
      <Typography variant="body2" gutterBottom>
        Light Level
      </Typography>
      <Box sx={{ position: 'relative', mb: 2 }}>
        <LinearProgress
          variant="determinate"
          value={plantData.lightRequirements}
          sx={{ height: 10 }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: -25,
            left: `${(plantData.minLight / 100) * 100}%`,
            transform: 'translateX(-50%)',
            color: 'text.secondary',
          }}
        >
          {/* {plantData.minLight}% */}
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: -25,
            // left: `${(plantData.maxLight / 100) * 100}%`,
            transform: 'translateX(-50%)',
            color: 'text.secondary',
          }}
        >
          {plantData.maxLight}%
        </Box>
      </Box>
    </CardContent>
          </StyledCard>
          <Grid item xs={12}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Plant Statistics
              </Typography>
              <Typography variant="body2" gutterBottom>
                {/* Days Since Watered: {plantData.statistics.daysSinceWatered} */}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {/* Average Growth Rate: {plantData.statistics.averageGrowthRate} */}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Watering Schedule
              </Typography>
              <Calendar
                value={new Date()}
                tileContent={tileContent}
              />
            </CardContent>
          </StyledCard>
        </Grid>
        </Grid>
      
       
        <Grid item xs={12}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pump Controls
              </Typography>
              <Button variant="contained" color="success">
                Water Plant
              </Button>
              <Button variant="contained" color="error" sx={{ ml: 2 }}>
                Stop Pump
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default PlantProfile;
