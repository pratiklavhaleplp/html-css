import CardContainer from "../CardContainer/CardContaier";
import imagePortfolio from '../../media/first-project.jpg';
import gitHubSearch from '../../media/github-repo-search.png';
import corePracticeImg from '../../media/Core Practice.jpeg';
import { AiOutlineGithub } from 'react-icons/ai';

const portfolioText = <>
    <p>
        Designed and developed using React, HTML, CSS, and JavaScript, this application showcases
        my expertise in creating optimized and functional components.
    </p>
</>
const gitHubRepoText = <>
    <p>
        Developed using React and the GitHub Open API's. This application helps users
        with a seamless search experience for finding repositories on GitHub.
    </p>
</>
const coreConceptsText =
    <>
        <p>
            This repository provides comprehensive notes on JavaScript, HTML, CSS, and MongoDB.
            If you're interested in checking my fundamental knowledge then please check this content.
        </p>
    </>
const portfolioHeading = <><span onClick={() => { window.open('https://github.com/pratiklavhaleplp/html-css/tree/main/portfolio', '_blank') }} className="heading-front-end">Portfolio<AiOutlineGithub size='30px' className="githubLink" /></span></>
const gitRepoSearch = <><span onClick={() => { window.open('https://github.com/pratiklavhaleplp/github_repo_search', '_blank') }} className="heading-front-end">GitHub repo search<AiOutlineGithub size='30px' className="githubLink" /></span></>
const corePractice = <><span onClick={() => { window.open('https://github.com/pratiklavhaleplp/Practice_and_notes', '_blank') }} className="heading-front-end">Core Practice<AiOutlineGithub size='30px' className="githubLink" /></span></>


const frontEntProjectContent = <>
    <CardContainer type='medium' image={imagePortfolio} heading={portfolioHeading} jsx={portfolioText} />
    <CardContainer type='medium' image={gitHubSearch} heading={gitRepoSearch} jsx={gitHubRepoText} />
    <CardContainer type='medium' image={corePracticeImg} heading={corePractice} jsx={coreConceptsText} />
</>

export { frontEntProjectContent };