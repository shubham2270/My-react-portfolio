import React, { useEffect } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import "./styles.js";
import { Container, Content } from "./styles";
import NavBar from "./NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";
const cursor = require("./cursor.png");

const App = () => {
  const background = document.querySelector(".background");
  const loader = document.querySelector(".loader");
  // if you want to show the loader when React loads data again
  const showLoader = () => loader.classList.remove("loader--hide");

  const hideLoader = () => {
    background.classList.add("loader--hide");
    // loader.classList.add("loader--hide");
  };
  useEffect(hideLoader, []);
  return (
    <Container>
      <NavBar />
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </Content>
    </Container>
  );
};

export default App;
