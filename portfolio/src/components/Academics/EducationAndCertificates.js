import CardContainer from "../CardContainer/CardContaier";

const educationDetails =
  <ul className="education-ul">
    <li><strong>Post Graduate Diploma</strong>: Mobile Computing <br />
      Sunbeam Institute of Information And Technology- Pune
    </li>
    <li><strong>Bachelor of Engineering</strong>: Computer Science And Engineering<br />
      PRMIT & R Badnera Amravati - Amravati</li>
  </ul>
const academicContents =
  <>
    <CardContainer type='medium' heading='Education' jsx={educationDetails} />
    {/* <CardContainer type='medium' heading='Certifications' /> */}
  </>


export default academicContents;