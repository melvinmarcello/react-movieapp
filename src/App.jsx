import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Trending from './Pages/Trending'
import Detail from './Pages/Detail';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>          
          <Route path='/' element={<Home/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path="/movie/:id" element={<Detail/>} ></Route>    
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
