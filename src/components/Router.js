import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Projects from './Projects';
import About from './About';
import Technologies from './Technologies';
import Together from './Together';

const Router = () => (
    <BrowserRouter>
        <Route exact path="/" component={App}/>
        <Route path path="/projects" component={Projects}/>
        <Route path path="/about" component={About}/>
        <Route path path="/technologies" component={Technologies}/>
        <Route path path="/together" component={Together}/>
    </BrowserRouter>
)

export default Router;