import { AiOutlineGithub } from 'react-icons/ai';

const projectName = (projectName = '', url = '') => {
    return (
        <>
            <div className='project-name-row-item'><span onClick={() => window.open(url, '_blank')} className='heading-backend-project-name'><strong>{projectName}<AiOutlineGithub size='25px' className="githubLink" /></strong></span></div>
        </>
    )
}
const projectStack = (stack = '') => {
    return (
        <>
            <div className='project-stack-row-item'>{stack}</div>
        </>
    )
}
const projectDescription = (projectDescription = '') => {
    return (
        <>
            <div className='project-description-item'>{projectDescription}</div>
        </>
    )
}
const backendProjectsList = [
    {
        name: 'SecureBackend With Google Oauth',
        stack: 'NodeJS, ExpressJS',
        description: 'A robust backend project demonstrating Google OAuth, HTTPS communication, and promises for efficient code execution.With Helmet for enhanced security, it prevents vulnerabilities.HTTPS ensures encrypted data transmission, and promises handle asynchronous operations',
        url: 'https://github.com/pratiklavhaleplp/node_projects/tree/main/Projects/https-project'
    },
    {
        name: 'Basic CRUD with MongoDB',
        stack: 'NodeJS, ExpressJS, MongoDB',
        description: 'A small project where i have implemened CRUD operations with promises, MongoDB, and paginated API. Clean code practices are followed throughout the project',
        url: 'https://github.com/pratiklavhaleplp/node_projects/tree/main/Projects/basic-crud'
    },
    {
        name: 'File parser With csv-parser',
        stack: 'NodeJS, ExpressJS',
        description: 'This project uses a CSV parser to parse a CSV file, pipes the results to a promised-based loading system, and starts the server on initial load of basic data.',
        url: 'https://github.com/pratiklavhaleplp/node_projects/tree/main/Projects/library-management'
    },
    {
        name: 'Fundamentals and core concepts',
        stack: 'NodeJS, ExpressJS, javascript',
        description: 'This repository contains collection of my notes and code samples that cover all the basics of Node.js, from creating simple HTTP servers to using advanced features like worker threads, clustering and streams.',
        url: 'https://github.com/pratiklavhaleplp/node_projects/tree/main/Notes'
    },
    {
        name: "Node's Streams API",
        stack: 'NodeJS, ExpressJS',
        description: "This project is in development phase, soon i'll update the details on GIT",
        url: 'https://github.com/pratiklavhaleplp/node_projects/tree/main/Projects/stream-apis'
    }
]
const backEndEndProjectContent =
    <>
        <div className='parent-backend-content'>
            <div className='backend-project-header'>
                <div className='project-name'>ProjectName</div>
                <div className='stack'>Stack</div>
                <div className='description'>Description</div>
            </div>
            <div className='backend-project-list'>
                {
                    backendProjectsList.map((ele, index) => <div key={index} className='one-project-item'>{projectName(ele.name, ele.url)}{projectStack(ele.stack)}{projectDescription(ele.description)}</div>)
                }
            </div>
        </div>
    </>
export { backEndEndProjectContent };