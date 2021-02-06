import Layout from '../components/Layout'
import OfficerJson from "../data/Officer.json";
import OfficerIcon from "../components/OfficerIcon";
import TechProject from "../components/TechProject";

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
        welcome
      </div>
    </section>

    <section className="section projects">
      <div className="container">
        <TechProject
          name = {"ProjectName"}
          description = {"Project Description"}
        />
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