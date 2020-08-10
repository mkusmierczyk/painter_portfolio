import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/header";
import SectionGallery from "./components/sectionGallery";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import SectionBar from "./components/sectionBar";
import Title from "./components/title";

function App() {



    return (
        <div className="App">
            <Router>
                <Route exact path={"/"}>
                    <SectionBar/>
                    <Header/>
                    <Title/>
                    <SectionGallery/>
                    <Footer/>
                </Route>
                <Route exact path={"/paintings"}>
                    <SectionBar/>
                    <Header/>
                    <Title/>
                    <Gallery/>
                    <Footer/>
                </Route>
                <Route exact path={"/contact"}>
                    <SectionBar/>
                    <Header/>
                    <Title/>
                    <Contact/>
                    <Footer/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
