import React, {useEffect} from 'react';

function Intro(){

    const typewritter = ()=>{

        let character_counter = 0,
        word_position = 0,
        type_target = document.querySelector('.typewritter'),
        keywords = [
            'Portfolio', 'Resume', 'Skills List','Code Samples'
        ];

        const speed = 210;

        const type = ()=>{

            if(word_position >= keywords.length){
                word_position = 0;
                character_counter=0;
                type_target.innerHTML = '';
            }

            if (character_counter <= keywords[word_position].length) {

                type_target.innerHTML += keywords[word_position].charAt(character_counter);
                character_counter++;
                setTimeout(type, speed);

            } else {

                word_position++;
                character_counter = 0;
                type_target.innerHTML = '';
                setTimeout(type, speed);

            }
        }

        type();

    };

    useEffect(()=>{

        typewritter();

    },[]);

    return(
        <div id="intro">
            <p className="greeting">Greetings, I'm Carlos Aviles Buitron.</p>
            <h1 className="headline">Welcome To My <span className="highlight typewritter"></span></h1>
            <p className="description">Here I showcase my projects in <span className="highlight">Front-end</span> &amp; <span className="highlight">Back-end</span> JavaScript development. I constantly work/study to improve my skills and expand the list of technologies I can use in my projects.</p>
        </div>
    );
}

export default Intro;