import logo from './logo.svg';
import './App.css';
import SignIn from './Pages/SignIn.js';
import SignUp from './Pages/SignUp.js';
import MyPlants from './Pages/MyPlants.js';
import PlantProfile from './Pages/PlantProfile.js';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'


function App() {
return (
  <Router>
    <div className="App">
    <Routes>
         <Route path='/SignUp' element={<SignUp/>} />
         <Route path='/' element={<SignIn/>} />
         <Route path="/plants/:id" element={<PlantProfile />} />
         <Route path='/SignIn' element={<SignIn/>} />
         <Route path='/MyPlants' element={<MyPlants/>} />
       </Routes>
  </div>
  </Router>
  
);
}

export default App;
