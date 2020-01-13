import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Gallery from "./gallery/gallery";
import Contact from "./contact/contact";
import NotFound from "./notFound/notFound";
import NavBar from "./navBar/navBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <main className=".container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about-us" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
