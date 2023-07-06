import "./App.css";
import Header from "./components/Header/Navbar";
import {    Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import SearchBar from "./components/Pages/SearchBar/SearchBar";
import BookData from "../src/data/search-data.json"
// import Blog from "./components/Pages/Blog/Blog";
// import PopularPage from "./components/Pages/Home/PopularPage/PopularPage";
import Footer from "./components/Footer/Footer";
// import Menu from "./components/Pages/Menu/Menu";
import React, { useEffect } from "react";
// import Menu from './components/Pages/Menu/Menu';
import useDarkMode from "./hooks/useDarkMode";
function App() {
  const {theme} = useDarkMode();
 useEffect(() => {
  console.log(theme)
 }, [theme])

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
          <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;