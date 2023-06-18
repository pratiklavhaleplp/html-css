import CardContainer from "../CardContainer/CardContaier";
import imagePortfolio from '../../media/first-project.jpg';
import gitHubSearch from '../../media/github-repo-search.png'

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


const frontEntProjectContent = <>
    <CardContainer type='medium' image={imagePortfolio} heading='Portfolio' jsx={portfolioText} />
    <CardContainer type='medium' image={gitHubSearch} heading='GitHub repo search' jsx={gitHubRepoText} />
    <CardContainer type='medium' image={imagePortfolio} heading='React Portfolio' jsx={portfolioText} />
</>

export { frontEntProjectContent };