import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Section from "./components/section";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Contact from "./components/contact";

function App() {



    return (
        <div className="App">
            <Router>
                <Route exact path={"/"}>
                    <Header/>
                    <Navigation/>
                    <Section/>
                    <Footer/>
                </Route>
                <Route exact path={"/paintings"}>
                    <Header/>
                    <Navigation/>
                    <Gallery/>
                    <Footer/>
                </Route>
                <Route exact path={"/contact"}>
                    <Header/>
                    <Navigation/>
                    <Contact/>
                    <Footer/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
