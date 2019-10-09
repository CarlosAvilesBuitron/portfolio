import React from 'react';

//Components
import Header from './components/header';
import Skills from './components/skills';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import Logos from './components/logos';


//Styles
import './styles/main.scss';


function App() {


 

  return (
    <div>
        
        <Header />

        <main id="content-main">

            <Skills/>

            <Resume/>

            <Portfolio/>

            <Logos/>

            <Contact/>

        </main>


       <Footer/>
        
    </div>
  );
}

export default App;
