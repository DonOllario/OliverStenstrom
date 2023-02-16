import React, {useState} from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import GlobalStyle from './globalStyles';
import './assets/fonts/font.css'
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactMe from './components/ContactMe';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Router>
    <GlobalStyle/>
    <NavBar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Switch>
      <Route path ="/OliverStenstrom/contact">
        <ContactMe/>
      </Route>
      
      <Route path="/OliverStenstrom/">
        <Hero/>
        <Skills/>
        <Projects/>
      </Route>
      </Switch>
    
    <Footer/>
    </Router>
    </>
  );
}

export default App;
