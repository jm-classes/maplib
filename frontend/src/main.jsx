import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/views/Home';
import Stats from '@/views/Stats';
import Map from '@/views/Map';

import Navbar from '@/components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/map" element={<Map />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
