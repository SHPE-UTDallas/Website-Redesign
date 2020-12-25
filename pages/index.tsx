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

      <p className="subtitle is-4" style={{marginTop: ".75em", marginBottom: "2em", color: "rgba(0, 0, 0, 0.61)"}}>
      Value proposition Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>

      <div className="columns" style={{marginTop: "100px"}}>
        <div className="column is-half">
        <button className="button is-primary center">Subscribe to our Newsletter</button>
        </div>
        <div className="column is-half">
        <button className="button is-primary center" >Become a sponsor</button>
        </div>
      </div>
    </div>
    </div>

    <div className="column">
      <div className="homepage-tile" style={{marginLeft: "auto", marginRight: "0"}}></div>
    </div>
    </div>

  </section>

  <section className="section">
  <div className="temoc-level">
      <div style={{position: "relative", width:"100%", paddingLeft:"2%", paddingRight: "2%", height: 10}}> 
        <hr style={{height: .5, borderWidth: 10, border: "1px solid rgba(0, 0, 0, 0.17)"}}></hr>
      
        <div className="container" style={{position: "relative", width: "10%", minWidth:"200px", margin:"0 auto", top: "-200px"}}>
          <img  src="/imgs/Temoc_BW.svg" alt="Temoc icon" ></img>
      </div>
      </div>
  </div>

  <div className="columns is-mobile" style={{paddingLeft: "7%", paddingRight: "7%"}}>
      <div className="column"><h1 className="benefits-text" style={{textAlign: 'left'}}>Community</h1></div>
      <div className="column"><h1 className="benefits-text" style={{textAlign: 'center'}}>Networking</h1></div>
      <div className="column"><h1 className="benefits-text" style={{textAlign: 'right'}}>Career Development</h1></div>
  </div>

  <p className="is-size-4 benefits-p">Benefits Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

  <div className="temoc-level">
      <div style={{position: "relative", width:"100%", paddingLeft:"2%", paddingRight: "2%", height: 10, paddingTop: "4%"}}> 
        <hr style={{height: .5, borderWidth: 10, border: "1px solid rgba(0, 0, 0, 0.17)"}}></hr>
      
        <div className="container" style={{position: "relative", width: "10%", minWidth:"200px", margin:"0 auto", top: "-200px"}}>
        
      </div>
      </div>
  </div>
  </section>

  <section className="section" style={{minHeight: "2vw"}}>
    <div className="container">
      <p style={{textAlign: "center"}}>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=bWFubmVkbG93YUBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y2xhc3Nyb29tMTAxNTUyMjg0NjI0OTgyNjUwMDc0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%234a148c&amp;color=%230B8043" style={{borderWidth:0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
    </p>
    </div>
  </section>
  </Layout>
)

export default IndexPage
