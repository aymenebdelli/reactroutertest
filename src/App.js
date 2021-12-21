import "./App.css";
import React from "react";
import Header from './components/Header'
import Home
  from "./components/pages/Home";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from "./components/pages/NotFound";
import Post from "./components/pages/Post";
import { useState } from "react";
import { Redirect } from "react-router-dom";



function App() {
  const [login,setLogin] = useState(false)

  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <button onClick={()=> setLogin(!login)}>{login?"logout":"login"}</button>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/profile'> <Profile login={login}/> </Route>  
        <Route path='/post/:id' component={Post} />
        <Route  component={NotFound} />
      </Switch>
    </BrowserRouter>

  );
};

export default App;
