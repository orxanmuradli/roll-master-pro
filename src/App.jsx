import "./App.css";
import Header from "./components/Header/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Blog from "./components/Pages/Blog/Blog";
import PopularPage from "./components/Pages/Home/PopularPage/PopularPage";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Pages/Menu/Menu";
import React from "react";
// import Menu from './components/Pages/Menu/Menu';
function App() {
  console.log('test test')
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
        
       <PopularPage/>
       <Menu/>
        <Blog />
        <Footer />
      </Router>
    </div>
  );
}

export default App;