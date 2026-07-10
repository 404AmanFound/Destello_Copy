
import { ReactLenis } from "lenis/react";
import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home'


function App() {

  
  return (
    <ReactLenis root>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </ReactLenis>
  );
  
}

export default App
