import "./App.css";
import Header from "./components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import SearchBar from "./components/Pages/SearchBar/SearchBar";
import BookData from "../src/data/search-data.json";
// import Blog from "./components/Pages/Blog/Blog";
// import PopularPage from "./components/Pages/Home/PopularPage/PopularPage";
import Footer from "./components/Footer/Footer";
// import Menu from "./components/Pages/Menu/Menu";
import React, { useEffect, useState } from "react";
// import Menu from './components/Pages/Menu/Menu';
function App() {
  let oldMode = localStorage.getItem("theme");//sehifde acilan kimi localstorage baxiram ki nsese var ya yox
  if (!oldMode) {
    localStorage.setItem("theme", 0);//yoxdursa ozum 0 atiram ora. 0 bizde ag moddu
    oldMode = 0;
  }
  if(+oldMode===1){//yox eger varsa ve 1 dise demweli dark mode dur
    document.body.classList.add("dark")
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
