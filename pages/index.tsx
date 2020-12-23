import { relative } from 'path'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="SHPE UTD">
  <section className="section gradient-background">
    <div className="columns" style={{marginLeft: "5%", marginRight: "5%"}}>
    <div className="intro column has-text-centered">
    <div className="welcome-text">
      <h1 className="welcome-text" style={{color: "rgba(0, 0, 0, 0.32)"}}>
        Welcome to
      </h1>
      <h1 className="welcome-text" style={{color: "#0070C0",}}>
        SHPE UTD
      </h1>

      <p className="subtitle" style={{marginTop: ".75em", marginBottom: "2em"}}>
      Value proposition Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>

      <div className="intro-buttons" style={{marginTop: "2em"}}>
      <button className="button is-primary center">Subscribe to our Newsletter</button>
      <button className="button is-primary center" >Become a sponsor</button>
      </div>
    </div>
    </div>

    <div className="homepage-tile column"></div>
    </div>
  </section>

  <section className="section level">
      <div className="" style={{position: "relative", width:"100%", margin:"4%"}}> 
        <hr style={{height: .5, borderWidth: 10, display:"block", border: "1px solid rgba(0, 0, 0, 0.17)"}}></hr>
      
        <div className="container" style={{position: "relative", width: "10%", minWidth:"200px", margin:"0 auto", top: "-200px"}}>
          <img  src="/imgs/Temoc_BW.svg" alt="Temoc icon" ></img>
      </div>
      </div>

  </section>
  </Layout>
)

export default IndexPage
