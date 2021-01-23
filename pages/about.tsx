import Layout from '../components/Layout'
import OfficerIcon from '../components/OfficerIcon'
import OfficerJson from '../data/Officer.json'

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
    <hr style= {{
      width: "66.66%",
      marginLeft: "auto",
      marginTop: "5px",
      marginRight: "auto"
    }}/>
    
    <div className="is-flex columns" style={{flexWrap: "wrap", justifyContent: "space-between"}}>
      {
        OfficerJson.map(obj => {
          const {name, position, image, email} = obj
          return (
            <div key={position} className="column is-flex is-one-half-mobile is-one-third-tablet is-one-third-desktop">
              <OfficerIcon name={name} position={position} imgPath={image} email={email}/>
            </div>
          )
        })
      }
      <div className ="column">
        <span className="has-text-link-dark is-size-1 has-text-weight-bold">
          Want to become an officer?
        <hr style = {{
          width: "85%",
          marginTop: "5px",
          marginBottom: "10px"}}></hr>
        </span>
        <span className="is-size-5">
          Join the Freshmen RoundTable to make an impact alongside an officer mentor.
        </span>
        <div>
          <a className="button is-rounded is-link" style = {{marginTop: "50px"}} href={`mailto:${presEmail}`}>
            Contact {presName}
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export async function getStaticProps() {
  let presEmail = "";
  let presName = "";
  OfficerJson.map(obj => {
    const {name, position, email} = obj
    if (position === "President") {
      presEmail = email;
      presName = name;
    }
  })
  return {
    props: {
      presEmail,
      presName,
      OfficerJson,
    },
  }
}

export default AboutPage
