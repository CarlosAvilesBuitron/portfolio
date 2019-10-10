import React from 'react';

function Logos(){

    const logos_data = [
        {
            link:'https://www.spca.org/',
            image:'spca.png',
            title:'SPCA of Texas'
        },
        {
            link:'https://www.opensky.com/',
            image:'opensky.png',
            title:'Open Sky'
        },
        {
            link:'https://www.theagencyre.com/',
            image:'theagency.png',
            title:'The Agency'
        },
        {
            link:'https://moontidemedia.com/',
            image:'moontide.png',
            title:'MoonTide Media'
        },
        {
            link:'https://www.livenation.com',
            image:'ticketmaster.png',
            title:'Live Nation'
        },
        {
            link:'https://www.gcfb.org/',
            image:'gleaners.png',
            title:'Gleaners Foodbank'
        },
        {
            link:'https://www.houstonfoodbank.org/',
            image:'houston.png',
            title:'Houston Food Bank'
        },
        {
            link:'https://rkdgroup.com/',
            image:'rkd.png',
            title:'RKD Group'
        },
        {
            link:'https://losangelesmission.org/',
            image:'lam.png',
            title:'Los Angeles Mission'
        },
        {
            link:'http://www.ctfoodbank.org/',
            image:'cfb.png',
            title:'Conneticut Food Bank'
        },
        {
            link:'https://www.foodbanknyc.org/',
            image:'fbnyc.png',
            title:'Food Bank of New York City'
        },
        {
            link:'https://www.msfoodnet.org/',
            image:'msfn.png',
            title:'Mississippi Food Network'
        },
        {
            link:'https://www.yourlawyer.com/',
            image:'pw.png',
            title:'Parker Waichman LLP'
        },
        {
            link:'https://coastguardfoundation.org/',
            image:'coast.png',
            title:'Coast Guard Foundation'
        }
    ];

    const render_logos = (companies)=>{
        let render = companies.map((company, index)=>{
            return(
                <div key={index}>
                    <a href={company.link} target="_blank" rel="noopener noreferrer" title={company.title}>
                        <img src={`/img/logos/${company.image}`} alt={company.link}/>
                    </a>
                </div>
            );
        });

        return render;
    };

    return(
        <div id="contact" className="page-section">
        
            <hr/>

            <div id="logos_wrapper">

                {render_logos(logos_data)}

            </div>

        </div>
    );
}

export default Logos;