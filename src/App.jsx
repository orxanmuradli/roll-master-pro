import "./App.css";
import Header from "./components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import SearchBar from "./components/Pages/SearchBar/SearchBar";
import BookData from "../src/data/search-data.json";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useState } from "react";
import MenuList from "./components/Pages/MenuList/MenuList";
import About from "./components/Pages/About/About";
import Company from "./components/Pages/Company/Company";
import Bloq from "./components/Pages/Bloq/Bloq";
import Contact from "./components/Pages/Contact/Contact";
// import Menu from './components/Pages/Menu/Menu';
function App() {
  let oldMode = localStorage.getItem("theme"); //sehifde acilan kimi localstorage baxiram ki nsese var ya yox
  if (!oldMode) {
    localStorage.setItem("theme", 0); //yoxdursa ozum 0 atiram ora. 0 bizde ag moddu
    oldMode = 0;
  }
  if (+oldMode === 1) {
    //yox eger varsa ve 1 dise demweli dark mode dur
    document.body.classList.add("dark");
  }
  const [mode, setMode] = useState(oldMode);
  return (
    <div className="App">
      {/* <Router>
    

        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
        
       <PopularPage/>
       <Menu/>
        <Blog />
      
      </Router> */}
      {/* <SearchBar placoholder="Axtarış et" data={BookData}/> */}
      <Header mode={mode} setMode={setMode} />
      <Routes>
        <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
        <Route path="/MENYU" element={<MenuList />} />
        <Route path="/HAQQIMIZDA" element={<About />} />
        <Route path="/KAMPANİYALAR" element={<Company />} />
        <Route path="/BLOQ" element={<Bloq/>} />
        <Route path="/ƏLAQƏ" element={<Contact/>} />
      </Routes>
      <Footer setMode={setMode} mode={mode} />
    </div>
  );
}

export default App;
