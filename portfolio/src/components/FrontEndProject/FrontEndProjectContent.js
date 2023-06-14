import CardContainer from "../CardContainer/CardContaier"
import imageTest from '../../media/first-project.jpg'

const portfolioText = <>
    <p>
        Designed and developed using React, HTML, CSS, and JavaScript, this application showcases
        my expertise in creating optimized and functional components.
    </p>
</>
const projectContent = <>
    <CardContainer type='medium' image={imageTest} heading='React Portfolio' jsx={portfolioText} />
    <CardContainer type='medium' image={imageTest} heading='React Portfolio' jsx={portfolioText} />
    <CardContainer type='medium' image={imageTest} heading='React Portfolio' jsx={portfolioText} />
</>

export { projectContent };