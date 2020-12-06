import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import Header from "./components/header";
import SectionGallery from "./components/sectionGallery";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import SectionBar from "./components/sectionBar";
import Title from "./components/title";
import Navigation from "./components/navigation";
import './App.css';


function App() {
  const GlobalStyle = createGlobalStyle`
  ${normalize}
  font-family: 'Open Sans';

html {
   box-sizing: border-box;
   font-size: 16px;
    margin: 0px;
}

*, *:before, *:after {
   box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

body{
 

  }
  
  $columns: 12;
$column-base-width: 100% / $columns;

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  .row {
    display: flex;
    
    .col-6{
    min-height: 1px;
      width: 50%;
      padding: 0;
    }
  }
}
`

  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Route exact path={"/paintings"}>
          <Navigation />
         <div className = {'noNavi'}>
          <Header />
          <Title Name={"MALARSTWO"} />
          <SectionGallery />
          <Footer />
          </div>
        </Route>
        <Route exact path={"/graphics"}>
          <Navigation />
          <div className = {'noNavi'}>
          <Header />
          <Title Name={"GRAFIKA"} />
          <SectionGallery />
          <Footer />
          </div>
        </Route>
        <Route exact path={"/about"}>
          <Navigation />
          <div className = {'noNavi'}>
          <Header />
          <Title Name={"O MNIE"} />
          <Portfolio />
          <Footer />
          </div>
        </Route>
        <Route exact path={"/contact"}>
          <Navigation />
          <div className = {'noNavi'}>
          <Header />
          <Title Name={"KONTAKT"} />
          <Contact />
          <Footer />
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
