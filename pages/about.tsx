import Link from 'next/link'
import Layout from '../components/Layout'
import OfficerIcon from '../components/OfficerIcon'
import OfficerJson from '../components/Officer.json'

const Line = ({}) => (
  <hr
    style= {{
      //color: "#b8b8b8",
      //backgroundColor: "#b8b8b8",
      //height: 1,
      width: "66.66%",
      marginLeft: "auto",
      marginTop: "5px",
      marginRight: "auto"
    }}
  />
)

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <div className="has-text-link-dark has-text-centered is-size-1 has-text-weight-bold">
      Meet the Officers
    </div>
    <Line/>
    <div className="is-flex columns is-flex-wrap-wrap">
      {
        OfficerJson.map(obj => {
          const {name, position, image, email} = obj
          return (
            <div key={position} className="column is-flex is-one-half-mobile is-one-third-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
              <OfficerIcon name={name} position={position} imgPath={image} email={email}/>
            </div>
          )
        })
      }
      <div className ="column is-full-mobile is-two-thirds-tablet is-two-thirds-desktop is-two-quarters-widescreen is-two-fifths-fullhd">
        <div className="become-officer has-text-centered">
          <span className="has-text-link-dark has-text-weight-bold is-size-2-mobile is-size-1">
            Want to become an officer?
            <hr style = {{
              width: "45rem",
              maxWidth: "85%",
              margin: "5px auto 10px"
              }}
            />
            </span>
          <span className="is-size-5">
              Join the Freshmen RoundTable to make an impact alongside an officer mentor.
          </span>
          <div>
            <a className="button is-rounded is-link" style = {{marginTop: "25px"}} href={`mailto:jvn170000@utdallas.edu`}>
              Contact Joselyn Narvaez
            </a>
          </div>
        </div>
      </div>
    </div>
    

    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
