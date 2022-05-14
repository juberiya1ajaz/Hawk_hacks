import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Donate from '../pages/Donate';
import Map from '../pages/Map';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/map" element={<Map />} />
            </Routes>
            {/* <Chatbot /> */}
            <Footer />
        </BrowserRouter>
    );
}

export default Main;
