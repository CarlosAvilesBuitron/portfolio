import React from 'react';

//Bootstrap
import {Button} from 'react-bootstrap';

const download_word = ()=>{
  window.open('/files/Resume.docx')
};

const download_pdf = ()=>{
  window.open('/files/Resume.pdf')
};

function Resume(){
    return(
        <section className="page-section" id="resume">
          <div className="resume-bg-image"></div>
          <h2>Download My Resume</h2>
          <div className="download">
            <Button variant="light" className="pdf" onClick={download_pdf}>PDF Version</Button>  
            <Button variant="dark" className="word" onClick={download_word}>Word Version</Button>
          </div>
        </section>
    );
}

export default Resume;