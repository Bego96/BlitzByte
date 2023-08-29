
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../navigation/navigation";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import Contact from "../contact/Contact";
import Discounts from "../discounts/Discounts";
import AboutUs from "../aboutus/AboutUs";

function Main() {
    return (
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/Snizeno" element={<Discounts/>}/>
        <Route path="/O nama" element={<AboutUs />}/>
      </Routes> 
    
    )
}

export default Main;