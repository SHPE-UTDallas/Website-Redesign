import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="SHPE UTD">
  <section className="section tile level gradient-background">
    <div className="container has-text-centered" style={{paddingRight:"20em"}}>
    <div className="welcome-text" style={{marginLeft: "2em"}}>
      <h1 className="welcome-text" style={{color: "rgba(0, 0, 0, 0.32)"}}>
        Welcome to
      </h1>
      <h1 className="welcome-text" style={{color: "#0070C0",}}>
        SHPE UTD
      </h1>

      <p className="subtitle" style={{marginTop: ".75em", marginBottom: "2em"}}>
      Value proposition Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </div>

      <button className="button is-primary" style={{margin: "1em"}}>Subscribe to our Newsletter</button>
      <button className="button is-primary" style={{margin: "1em"}}>Become a sponsor</button>
    </div>

    <div className="container" style={{paddingRight:"10em"}}>
      <div className="homepage-tile tile">
        
      </div>
    </div>
  </section>
  </Layout>
)

export default IndexPage
