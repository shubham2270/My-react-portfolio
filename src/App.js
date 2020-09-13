import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.js";

import { Container, Content } from "./styles";
import NavBar from "./NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";

function App() {
  return (
    <Router>
      <Container className="App">
        <NavBar />
        <Content>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/skills" component={Skills} />
          </Switch>
        </Content>
      </Container>
    </Router>
  );
}

export default App;
