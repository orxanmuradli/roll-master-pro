import "./App.css";
import Header from "./components/Header/Navbar";
import {    Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
// import Blog from "./components/Pages/Blog/Blog";
// import PopularPage from "./components/Pages/Home/PopularPage/PopularPage";
import Footer from "./components/Footer/Footer";
// import Menu from "./components/Pages/Menu/Menu";
import React from "react";
// import Menu from './components/Pages/Menu/Menu';
function App() {
  console.log('test test')
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
          <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;