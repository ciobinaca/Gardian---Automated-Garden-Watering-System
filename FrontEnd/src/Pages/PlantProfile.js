import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Grid, LinearProgress, Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 


const mockPlantData = {
  id: 1,
  name: 'Angelique Pink Tulip',
  location: 'Front Yard',
  needsWater: true,
  imageUrl: 'https://cdn11.bigcommerce.com/s-i7i23daso6/images/stencil/1280x1280/products/12276/18429/Tulip_Angelique_0002670_2__75432.1629189655.jpg?c=1', 
  sensors: {
    moisture: 75, // Example moisture level percentage
    temperature: 22, // Example temperature in Celsius
    light: 60, // Example light level percentage
  },
  statistics: {
    daysSinceWatered: 3,
    averageGrowthRate: '1.2 cm/day',
  },
  wateringFrequency: 'Daily', 
  preferredSunlight: 'Full Sun',
  soilType: 'Loamy',
  careTips: 'Water daily in the morning, ensure full sunlight exposure.',
};

const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: 'auto',
});

const PlantProfile = () => {
  const { plantId } = useParams(); 
  const [plantData, setPlantData] = useState(mockPlantData);
  const [loading, setLoading] = useState(true);
  const [wateringDates, setWateringDates] = useState([]);

  useEffect(() => {

    setTimeout(() => {
      setPlantData(mockPlantData); 
      setLoading(false);
      calculateWateringDates(mockPlantData.wateringFrequency);
    }, 1000);
  }, [plantId]);

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
    <Box p={6}>
      <Typography variant="h4" gutterBottom align="Left" paddingLeft='100px' >
        {plantData.name}
      </Typography>
      <Grid container spacing={-3} paddingTop="15px">
        <Grid item xs={12} md={5.5}>
          <StyledCard>
            <CardContent>
              <img
                src={plantData.imageUrl}
                alt={plantData.name}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <Typography variant="h6" mt={2}>
                Location: {plantData.location}
              </Typography>
              <Typography variant="body1">
                Needs Water: {plantData.needsWater ? 'Yes' : 'No'}
              </Typography>
              <Typography variant="body2">
                Watering Frequency: {plantData.wateringFrequency}
              </Typography>
              <Typography variant="body2">
                Preferred Sunlight: {plantData.preferredSunlight}
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
                {plantData.careTips}
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
              <Typography variant="body2" gutterBottom>
                Moisture Level
              </Typography>
              <LinearProgress
                variant="determinate"
                value={plantData.sensors.moisture}
                sx={{ mb: 2 }}
              />
              <Typography variant="body2" gutterBottom>
                Temperature ({plantData.sensors.temperature}°C)
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(plantData.sensors.temperature / 50) * 100}
                sx={{ mb: 2 }}
              />
              <Typography variant="body2" gutterBottom>
                Light Level
              </Typography>
              <LinearProgress
                variant="determinate"
                value={plantData.sensors.light}
                sx={{ mb: 2 }}
              />
            </CardContent>
          </StyledCard>
          <Grid item xs={12}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Plant Statistics
              </Typography>
              <Typography variant="body2" gutterBottom>
                Days Since Watered: {plantData.statistics.daysSinceWatered}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Average Growth Rate: {plantData.statistics.averageGrowthRate}
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
  );
};

export default PlantProfile;
