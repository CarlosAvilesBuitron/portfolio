import React, {useEffect} from 'react';

//jQuery
import $ from "jquery";

//Components
import Intro from './intro';
import Social from './social';

//Icons
import { FaAngleUp } from "react-icons/fa";


function Header(){

    //methods

    const sticky_nav = ()=>{

        let main_nav = document.getElementById('nav-wrapper');

        $(window).on('scroll',()=>{

            if($(window).scrollTop()){
                main_nav.classList.add('sticky-nav');
            }else{
                main_nav.classList.remove('sticky-nav');  
            }

        });

        $(window).scroll(function() {
            let scrollDistance = $(window).scrollTop();

            if (scrollDistance > 100) {
                $('#back2Top').fadeIn();
            } else {
                $('#back2Top').fadeOut();
            }
    
            $('.page-section').each(function(i) {
                    if ($(this).position().top <= scrollDistance + 90) {
                        $('.navigation a.selected').removeClass('selected');
                        $('.navigation a').eq(i).addClass('selected');
                    }
            });
        
        }).scroll();
    };

    const mobile_nav = ()=>{

        let mobile_menu = $('.nav-list');
        let menu_icon = $('.menu-icon');

        let switcher = false;

        menu_icon.click(()=>{
            if(!switcher){
                mobile_menu.fadeIn();
                switcher = true;
            }else{
                mobile_menu.fadeOut();
                switcher = false;
            }
            menu_icon.toggleClass('change');
        });
    }

    //lifecycle

    const before_render = ()=>{

        //activate smooth scrolling
        const scroll = new window.SmoothScroll('a.scroll',{
            header: '[data-scroll-header]'
        });

        return scroll;

    };

    before_render();

    useEffect(()=>{

        sticky_nav();
        mobile_nav();

    },[]);

    return(
        <header id="home" className="page-section">
          
          <div className="nav-spacer"></div>
          <div className="bg-image"></div>

          <div id="nav-wrapper" >
            <div className="nav-height" data-scroll-header></div>
            <span id="logo"><a href="#home"><img src="/img/cab-logo.svg" alt="Carlos Aviles Buitron"/></a></span>
           
            <div className="menu-icon">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
       
            <nav className="navigation">
              <ul className="nav-list">
                  <li><a href="#home" className="scroll">home</a></li>
                  <li><a href="#skills" className="scroll">skills</a></li>
                  <li><a href="#resume" className="scroll">resume</a></li>
                  <li><a href="#portfolio" className="scroll">portfolio</a></li>
                  <li><a href="#contact" className="scroll">contact</a></li>
                  <li><a href="https://github.com/CarlosAvilesBuitron" rel="noopener noreferrer" target="_blank" className="scroll">code</a></li>
                </ul>
            </nav>
          </div>

          <Intro/>

          <div id="footer-intro">
            <a href="#skills" className="scroll">
                <div className='icon-scroll'></div>
            </a>
          </div>

          {/* Back to Top Button */}
          <a id="back2Top" title="Back to top" href="#home" className="scroll"><FaAngleUp/></a>

          <Social/>

        </header>
    );
}

export default Header;