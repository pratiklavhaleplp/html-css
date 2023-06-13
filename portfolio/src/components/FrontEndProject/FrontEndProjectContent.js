import CardContainer from "../CardContainer/CardContaier"
import imageTest from '../../media/first-project.jpg'

const portfolioText = <>
    <p>
        I am an experienced Full Stack Developer with 3.2 years of practical+
        knowledge in both front-end and back-end development. My expertise extends
        to various programming utilities and languages, ensuring that I can
        deliver top-notch projects. I am dedicated to providing high-quality
        results and constantly pushing boundaries to achieve innovative solutions.
        With a meticulous attention to detail and a drive for excellence, I consistently go above and beyond to surpass expectations. My problem-solving skills and collaborative approach make me a valuable team member, enabling me to deliver successful
        and cutting-edge solutions in fast-paced work environments.
    </p>
</>
const projectContent = <>
    <CardContainer type='medium' image={imageTest} heading='React Portfolio' jsx={portfolioText} />
    <CardContainer type='medium' image={imageTest} heading='React Portfolio' jsx={portfolioText} />
    <CardContainer type='medium' image={imageTest} heading='React Portfolio' jsx={portfolioText} />
</>

export { projectContent };