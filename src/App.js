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

  
  /* Version 1.0.0.8 */
  
  const version = ()=>{
    console.log("Version 1.0.0.8");
  };
  
  version();

  return (
    <div>
        
        <Header />

        <main id="content-main">

            <Skills/>

            <Resume/>

            <Portfolio/>

            <Contact/>
            
            <Logos/>

        </main>


        <Footer/>
        
    </div>
  );
}

export default App;
