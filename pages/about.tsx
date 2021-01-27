import Layout from "../components/Layout";
import OfficerIcon from "../components/OfficerIcon";
import OfficerJson from "../data/Officer.json";

type Props = {
  presName: string;
  presEmail: string;
  OfficerJson: Officer[];
};

interface Officer {
  name: string;
  position: string;
  image: string;
  email: string;
}

const AboutPage = ({ presEmail, presName, OfficerJson }: Props) => (
  <Layout title="SHPE UTD">
    <div className="has-text-link-dark has-text-centered is-size-1 has-text-weight-bold">
      Meet the Officers
    </div>
    <hr
      style={{
        width: "80%",
        marginLeft: "auto",
        marginTop: "5px",
        marginRight: "auto",
      }}
    />

    <div className="is-flex columns is-flex-wrap-wrap">
      {OfficerJson.map((obj) => {
        const { name, position, image, email } = obj;
        return //render and inject to the page 
        (
          <div
            key={position}
            className="column is-flex is-one-half-mobile is-one-third-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd"
          >
            <OfficerIcon
              name={name}
              position={position}
              imgPath={image}
              email={email}
            />
          </div>
        );
      })}
      <div className="column is-full-mobile is-two-thirds-tablet is-two-thirds-desktop is-two-quarters-widescreen is-two-fifths-fullhd">
        <div className="become-officer has-text-centered">
          <span className="has-text-link-dark has-text-weight-bold is-size-2-mobile is-size-1">
            Want to become an officer?
            <hr
              style={{
                width: "45rem",
                maxWidth: "85%",
                margin: "5px auto 10px",
              }}
            />
          </span>
          <span className="is-size-5">
            Join the Freshmen RoundTable to make an impact alongside an officer
            mentor.
          </span>
          <div>
            <a
              className="button is-rounded is-link"
              style={{ marginTop: "50px" }}
              href={`mailto:${presEmail}`}
            >
              Contact {presName}
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export async function getStaticProps() {
  let presEmail = "";
  let presName = "";
  OfficerJson.map((obj) => {
    const { name, position, email } = obj;
    if (position === "President") {
      presEmail = email;
      presName = name;
    }
  });
  return {
    props: {
      presEmail,
      presName,
      OfficerJson,
    },
  };
}

export default AboutPage;
