import React from 'react';

//Dev Icons
import { 
    DiAws, 
    DiJavascript1, 
    DiNodejsSmall, 
    DiDatabase, 
    DiBootstrap,
    DiWordpress,
    DiGit,
    DiReact
 } from "react-icons/di";

const skills_data = {
    intro: [
        {
            icon: <DiAws className="skill_icon"/>,
            title: 'AWS',
            tags: 'Deployment, Storage, Servers',
            description: 'Deploying and maintaining web apps/websites using various AWS services.'
        },
        {
            icon: <DiJavascript1 className="skill_icon"/>,
            title: 'Front-End',
            tags: 'HTML5, CSS3, JavaScript',
            description: 'Coding modern website, web-apps and more from static design resources.'
        },
        {
            icon: <DiNodejsSmall className="skill_icon"/>,
            title: 'Back-End',
            tags: 'NodeJS, Express, Serverless',
            description: 'Full stack JavaScript development with a NodeJS backend to create a Rest or GraphQL API.'
        },
        {
            icon: <DiDatabase className="skill_icon"/>,
            title: 'Databases',
            tags: 'SQL, MongoDB, DynamoDB',
            description: 'Setting up, back up, and integrating with both relational and No-SQL databases.'
        },
        {
            icon: <DiBootstrap className="skill_icon"/>,
            title: 'Frameworks',
            tags: 'Bootstrap, Foundation',
            description: 'Creating layouts using frameworks and without frameworks using modern methods.'
        },
        {
            icon: <DiReact className="skill_icon"/>,
            title: 'React/Redux',
            tags: 'Components, Hooks, State',
            description: 'Coding front-end apps, forms, and sites using the React framework for modular components. '
        },
        {
            icon: <DiWordpress className="skill_icon"/>,
            title: 'WordPress',
            tags: 'Custom Themes, Management',
            description: 'Custom themes, installation and management of WordPress sites and landing pages.'
        },
        {
            icon: <DiGit className="skill_icon"/>,
            title: 'Git',
            tags: 'Version Control',
            description: 'Creating layouts using frameworks and without frameworks using modern methods.'
        }

    ],
    more: [

    ]
};

export default skills_data;