import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  About,
  Contact,
  Header,
  Navigation,
  URLShortener,
  Footer
} from "./components";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <main>
          <Route exact path="/" component={URLShortener}/>  
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
