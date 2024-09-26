import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './headerSection/header';
import MainSection from './mainSection/mainSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 
 <Header/>
 <MainSection/>
    </>
);

