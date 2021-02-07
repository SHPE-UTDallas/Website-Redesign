import Layout from '../components/Layout'
import OfficerJson from "../data/Officer.json";
import OfficerIcon from "../components/OfficerIcon";
import TechProject from "../components/TechProject";
import ProjectsJson from "../data/TechTeamProjects.json";

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  techOfficerName: string;
  techOfficerEmail: string;
  imgPath: string;
}

const TeachTeamPage = ({ techOfficerEmail, techOfficerName, imgPath }: Props) => (
  <Layout title="Tech team page">
    <section className="section">
      <OfficerIcon
        name={techOfficerName}
        position={"Technology Chair"}
        imgPath={imgPath}
        email={techOfficerEmail}
      />
    </section>

    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        The technology team is in charge of implementing and maintaining software solutions for the club (including the club website).
        Members get the opportunity to <strong>work in a team setting with industry standard technologies</strong>. Very little previous experience is required
        in order join as working with the team is meant to be a learning experience. Outside of our weekly meetings <strong>(Saturdays 3:00pm-4:00pm CST)</strong>, we require
        very little time commitment from our members, everyone can work as much or as little as they want.
      </div>


      <div className="container buttons is-centered" style={{ marginTop: "40px", textAlign: "center" }}>
        <a className="button" href="https://www.google.com/" target="_blank">
          <span>Join the team</span>
        </a>
        <a className="button" href="https://github.com/SHPE-UTDallas" target="_blank">
          <span className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span>GitHub</span>
        </a>



      </div>

    </section>

    <section className="section projects">
      <div className="container">
        <h1 className="projects-title title">
          Projects
        </h1>

        <div className=" is-flex columns is-flex-wrap-wrap">
          {ProjectsJson.map((obj) => {
            const { name, description, image, repo } = obj;
            return (
              <div
                key={name}
                className="column is-flex is-half"
                style={{marginBottom: "20px"}}
              >
                <TechProject
                  name={name}
                  description={description}
                  image={image}
                  repo={repo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
)

export async function getStaticProps() {
  let techOfficerName = "";
  let techOfficerEmail = "";
  let imgPath = "";
  OfficerJson.map((obj) => {
    const { name, position, email, image } = obj;
    if (position === "Technology Chair") {
      techOfficerName = name;
      techOfficerEmail = email;
      imgPath = image;
    }
  });
  return {
    props: {
      techOfficerName,
      techOfficerEmail,
      imgPath
    },
  };
}

export default TeachTeamPage