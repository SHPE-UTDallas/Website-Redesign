import Layout from '../components/Layout'
import OfficerJson from "../data/Officer.json";
import OfficerIcon from "../components/OfficerIcon";
import TechProject from "../components/TechProject";
import ProjectsJson from "../data/TechTeamProjects.json";

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
      <div className="container">
        Value proposition Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum
      </div>
    </section>

    <section className="section projects">
      <div className="container">
        <h1 className="projects-title title">
          Projects
        </h1>

        <div className="columns">
          {ProjectsJson.map((obj) => {
            const { name, description, image} = obj;
            return (
              <div
              key = {name}
              className="column"
              >
                <TechProject
                  name = {name}
                  description = {description}
                  image = {image}
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