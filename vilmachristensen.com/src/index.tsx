import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './views/Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import KurrAdsManager from './views/KurrAdsManager';
import FoodMap from './views/FoodMap';
import HotSpot from './views/HotSpot';
import Recipes2Rescue from './views/Recipes2Rescue';
import UmeaStigen from './views/UmeaStigen';
import Actus from './views/Actus';
import LandLog from './views/LandLog';
import Luckan from './views/Luckan';

const App = () => {
  const [activePage, setActivePage] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/KurrAdsManager" element={<KurrAdsManager />} />
      <Route path="/Actus" element={<Actus />} />
      <Route path="/FoodMap" element={<FoodMap />} />
      <Route path="/HotSpot" element={<HotSpot />} />
      <Route path="/Recipes2Rescue" element={<Recipes2Rescue />} />
      <Route path="/UmeaStigen" element={<UmeaStigen />} />
      <Route path="/LandLog" element={<LandLog />} />
      <Route path="/Luckan" element={<Luckan />} />
    </Routes>

  );
};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
