import Link from 'next/link'
import Layout from '../components/Layout'
import OfficerIcon from '../components/OfficerIcon'
import OfficerJson from '../components/Officer.json'

const Line = ({}) => (
  <hr
    style= {{
      //color: "#b8b8b8",
      //backgroundColor: "#b8b8b8",
      height: 2.5,
      width: "70%",
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
    </div>

    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
