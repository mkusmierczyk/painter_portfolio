import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./components/header";
import SectionGallery from "./components/sectionGallery";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import SlideShow from "./components/slideshow";
import Title from "./components/title";
import Background from './assets/background.png';
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
    background: url(${Background}) ;

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
        <Route exact path={"/painter_portfolio"}>
          <Navigation />
         <div className = {'noNavi'}>
          <Header />
          <Title Name={"STRONA GŁÓWNA"} />
          <SlideShow />
          <Footer />
          </div>
        </Route>
        <Route exact path={"/paintings"}>
          <Navigation />
          <div className = {'noNavi'}>
          <Header />
          <Title Name={"OBRAZY"} />
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
        <Route exact path={"/photos"}>
          <Navigation />
          <div className = {'noNavi'}>
          <Header />
          <Title Name={"ZDJĘCIA"} />
          <SectionGallery />
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
