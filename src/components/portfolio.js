import React, {useEffect, useState} from 'react';
import {API} from 'aws-amplify';

//Components
import PortfolioModal from './portfolio_modal';

//Bootstrap
import {Card, Button} from 'react-bootstrap';

//Icons
import {FaGithub, FaExternalLinkAlt, FaEye} from "react-icons/fa";

//Data
const examples_data = require('../data/portfolio.json');

function Portfolio(){

    const [project_data, set_projects_data] = useState(examples_data);
    const [current_example, set_current_example] = useState(examples_data[0]);
    const [loaded, setLoaaded] = useState(false);

    const open_modal = (selected_example)=>{
        const modal = document.getElementById('portfolio-modal');
        modal.style.display = 'block';
        set_current_example(project_data[selected_example]);
    };
    
    const open_link = (link)=>{
        window.open(link,'_blank');
    };

    const get_projects = ()=>{
        
        
        const get_data = async function get_data(){
            try{
                const project_data_incoming = await API.get('restend', '/projects'); 
                set_projects_data(project_data_incoming.projects.Items);
                setLoaaded(true);
                
            }catch(error){
                console.log(error);
                return;
            }
        };
        
        get_data();

    };

    const render_examples = (examples)=>{
        let rendered =  examples.map((example, index)=>{
            return(
                <div className={`example ${example.tags}`} key={example.id}>
                    <Card>   
                        <Card.Img variant="top" src={example.feature} />
                        <Card.Body>
                            <Card.Title>{example.title}</Card.Title>
                            <Card.Text>
                                {example.excerpt}
                            </Card.Text>
                            <Button onClick={()=>{open_modal(index)}} className="eye"><FaEye/></Button>
                            <Button onClick={()=>{open_link(example.link)}} className="link"><FaExternalLinkAlt/></Button>
                            {example.code && (
                                <Button onClick={()=>{open_link(example.git)}} className="git"><FaGithub/></Button>
                            )}
                        </Card.Body>
                        <Card.Header>{example.tech}</Card.Header>
                    </Card>
                </div>
            );
        });
        
   
        return rendered;
    };
    
    const init_modal = ()=>{
        const modal = document.getElementById('portfolio-modal');

        window.onclick = function(event) {

            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    };

    const iso = ()=>{
        
        const elem = document.querySelector('.examples');

        const sort = new window.Isotope( elem, {
            itemSelector: '.example',
            layoutMode: 'fitRows',
        });

        window.sort = sort;
       
    };

    const filter = (e)=>{

        e.preventDefault();
        
        let data = `.${e.target.value}`;
           
        window.sort.arrange({
            filter: data
        });

    };
    

    useEffect(()=>{
        
        get_projects();
        
        init_modal();
        
        iso();
        
    },[]);
    
    useEffect(()=>{
       
       setTimeout(()=>{
           iso();
           window.sort.arrange({
                filter: '.example'
            });
       }, 4000);
        
    },[loaded]);



    return(
        <section id="portfolio" className="page-section">
              <h2>Portfolio</h2>
              <hr/>

              <div className="mobile-controls" >
                  <select id="portfolio-select-controls" onChange={filter}>
                      <option value="example">All</option>
                      <option value="front">Front-End</option>
                      <option value="back">Back-End</option>
                      <option value="wordpress">WordPress</option>
                  </select>
              </div>

              <div className="examples">
                
                {!loaded && (<p>Loading Portfolio...</p>)}
                {loaded && (
                    render_examples(project_data)
                )}

              </div>

              <PortfolioModal example={current_example}/>

        </section>
    );
}

export default Portfolio;