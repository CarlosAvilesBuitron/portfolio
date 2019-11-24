import React, {useState} from 'react';


//jQuery
import $ from "jquery";

 //Data
import Skills_Data from '../data/skills';

function Skills(){

    const [view_more_text, set_view_more_text] = useState('View More');

    const render_skills = (skills)=>{
        let render = skills.map((skill, index)=>{
            return(
                <div key={index}>
                    {skill.icon}
                    <h3>{skill.title}</h3>
                    <p className="bordered">{skill.tags}</p>
                    <p className="description">{skill.description}</p>
                </div>
            );
        });

        return render;
    };
    
    const render_more_skills = ()=>{

        let more = $('#more-skills');
        let button = $('#view_more button');

        if(view_more_text === 'View More'){
            set_view_more_text('Hide More');
            more.fadeIn().css('display','grid');
            button.css('color','#2D3142');
        }else{
            set_view_more_text('View More');
            more.fadeOut();
            button.css('color','#69DDFF');
        }
        
    };

    return(
        <section className="page-section" id="skills">

            <h2>Skills</h2>
            <hr/>

            <div className="cards">
                {render_skills(Skills_Data.intro)}
            </div>

            <div>&nbsp;</div>

            <div id="more-skills" className="cards">
                {render_skills(Skills_Data.intro)}
            </div>
            
            
            <div id="view_more" style={{"display":"none"}}>
                    <button onClick={render_more_skills}>{view_more_text}</button>
            </div>
            

        </section>

    );
}

export default Skills;