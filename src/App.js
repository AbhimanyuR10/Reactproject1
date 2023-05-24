import logo from './logo.svg';
import './App.css';
import { TextField, Typography } from '@mui/material';
import First from './components/First';
import Navbar from './components/Navbar';
import Statebasics from './components/Statebasics';
import Buttons from './components/Buttons';
import Table2 from './components/Table2';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './components/ApiGet';

function App() {
  return (
    <div className="App">
      <Navbar/>
  <Routes>
    <Route path='/' element={<Statebasics/>}/>
    <Route path='/Table2' element={<Table2/>}/>
    <Route path='/First' element={<First/>}/>
    <Route path='/axios' element={<ApiGet/>}/>
  </Routes>
    </div>
  );
}

export default App;
