import React from "react";
import { Switch, Route } from "react-router-dom";

import "./styles.js";
import { Container, Content } from "./styles";
import NavBar from "./NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";

const App = () => {
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
