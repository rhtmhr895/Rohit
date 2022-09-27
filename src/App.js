import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog';
import Read from './Component/Read';
import Navbar from './Component/Navbar';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/Read' element={<Read/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
