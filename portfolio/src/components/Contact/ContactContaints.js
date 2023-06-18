import CardContainer from "../CardContainer/CardContaier";

const address =
  <>
    <p>
      Amravati, Maharashtra. India.
    </p>
  </>
const email =
  <>
    <p>
      pratiklavhaleplp@gmail.com
    </p>
  </>
const whatsApp =
  <>
    <p>
      <a href="https://wa.me/+919405909873" rel='noreferrer' target="_blank">https://wa.me/+919405909873</a>
    </p>
  </>
const linkedIn =
  <>
    <p>
      <a href="https://www.linkedin.com/in/pratik-lavhale-a3b25b194/" rel='noreferrer' target="_blank">https://www.linkedin.com/in/pratik-lavhale-a3b25b194/</a>
    </p>
  </>
const gitHub =
  <>
    <p>
      <a href="https://github.com/pratiklavhaleplp" rel='noreferrer' target="_blank">https://github.com/pratiklavhaleplp</a>
    </p>
  </>
const contactDetails =
  <>
    <CardContainer type="small" heading="Address: " jsx={address} />
    <CardContainer type="small" heading="GitHub: " jsx={gitHub} />
    <CardContainer type="small" heading="LinkedIn: " jsx={linkedIn} />
    <CardContainer type="small" heading="Email: " jsx={email} />
    <CardContainer type="small" heading="WhatsApp: " jsx={whatsApp} />
  </>

export { contactDetails };