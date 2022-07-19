import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import './App.css';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Characters } from './components/Characters/Characters';
import { Error404 } from './components/Error404/Error404';
import { CardDetails } from './components/CardDetails/CardDetails';
import { Profile } from './components/Profile/Profile';
import { LogIn } from './components/LogIn/LogIn';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('')

  return (
    <>
      <Navbar setUser={setUser} user={user}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/characters/:id' element={<CardDetails/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='/profile' element={<Profile user={user}/>}/>
        <Route path='/login' element={<LogIn user={user} setUser={setUser}/>}/>
      </Routes>
    </>
  );
}

export default App;
