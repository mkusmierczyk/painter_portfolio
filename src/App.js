import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/header";
import SectionGallery from "./components/sectionGallery";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import SectionBar from "./components/sectionBar";

function App() {



    return (
        <div className="App">
            <Router>
                <Route exact path={"/"}>
                    <SectionBar/>
                    <Header/>
                    <SectionGallery/>
                    <Footer/>
                </Route>
                <Route exact path={"/paintings"}>
                    <SectionBar/>
                    <Header/>
                    <Gallery/>
                    <Footer/>
                </Route>
                <Route exact path={"/contact"}>
                    <SectionBar/>
                    <Header/>
                    <Contact/>
                    <Footer/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
