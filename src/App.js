import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'
import Header from "./components/header";
import SectionGallery from "./components/sectionGallery";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import SectionBar from "./components/sectionBar";
import Title from "./components/title";

function App() {
    const GlobalStyle = createGlobalStyle`
  ${normalize}
   @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="styleshee');

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
  font-family: 'Lato', sans-serif;

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
                <GlobalStyle/>
                <Route exact path={"/painter_portfolio"}>
                    <SectionBar/>
                    <Header/>
                    <Title Name={"GALERIA"}/>
                    <SectionGallery/>
                    <Footer/>
                </Route>
                <Route exact path={"/portfolio"}>
                    <SectionBar/>
                    <Header/>
                    <Title Name={"PORTFOLIO"}/>
                    <Portfolio/>
                    <Footer/>
                </Route>
                <Route exact path={"/interiors"}>
                    <SectionBar/>
                    <Header/>
                    <Title Name={"WNĘTRZA"}/>
                    <SectionGallery/>
                    <Footer/>
                </Route>
                <Route exact path={"/contact"}>
                    <SectionBar/>
                    <Header/>
                    <Title Name={"KONTAKT"}/>
                    <Contact/>
                    <Footer/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
