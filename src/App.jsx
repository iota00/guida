import React from "react";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import components
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container fluid className="App">
      <Header />
      <Welcome />
    </Container>
  );
};

export default App;
