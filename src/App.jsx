import React, { useState } from 'react';
import '../src/Components/PlayVideo/PlayVideo.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import {Route , Routes} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Video from './Pages/Video/Video.jsx';
import PlayVideo from './Components/PlayVideo/PlayVideo.jsx';

const App = () => {

  const [sidebar , setSidebar] = useState(false);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />

      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} ></Route>
        <Route path='/video' element={<Video />} ></Route>
      </Routes>
    </div>
  )
}

export default App;