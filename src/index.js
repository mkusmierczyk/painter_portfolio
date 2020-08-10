import React from 'react';
import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


export const GlobalStyle = createGlobalStyle`
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


ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
