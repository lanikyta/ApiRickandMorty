import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import './App.css';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Characters } from './components/Characters/Characters';
import { Error404 } from './components/Error404/Error404';
import { CardDetails } from './components/CardDetails/CardDetails';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/characters/:id' element={<CardDetails/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </>
  );
}

export default App;
