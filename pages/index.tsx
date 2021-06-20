// import { relative } from "path";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import Calendar from "../components/Calendar";
import InstagramFeed from "../components/InstagramFeed";

const IndexPage = () => (
  <Layout title="SHPE UTD">
    <section className="section gradient-background">
      <div
        className="columns is-mobile"
        style={{ marginLeft: "5%", marginRight: "5%" }}
      >
        <div className="intro column has-text-centered">
          <div className="welcome-text">
            <h1
              className="welcome-text"
              style={{ color: "rgba(0, 0, 0, 0.32)" }}
            >
              Welcome to
            </h1>
            <h1 className="welcome-text" style={{ color: "#0070C0" }}>
              SHPE UTD
            </h1>

            <p
              className="subtitle is-4"
              style={{
                marginTop: ".75em",
                marginBottom: "2em",
                color: "rgba(0, 0, 0, 0.61)",
              }}
            >
              Welcome to SHPE at UTD's brand new website! We are a chapter built
              to empower our members to pursue their passions Whether you are a
              student looking to get involved or a company representative seeing
              how you may support us, we invite you to take a look around at all
              the exciting things we do.
            </p>

            <div className="columns" style={{ marginTop: "100px" }}>
              {/* <div className="column is-half"> */}
              <div className="column is-full">
                <a href="https://shpeutd.us20.list-manage.com/subscribe/post?u=2d719e9a41d3800f0ce0cd6cd&id=aa49373eb8" target="_blank">
                  <button className="button is-primary center">
                    Become a member
                  </button>
                </a>
              </div>
              {/* <div className="column is-half">
                <button className="button is-primary center">
                  Become a sponsor
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div
          className="big-res-social-media-component"
          style={{ paddingRight: "7%" }}
        >
          <InstagramFeed />
        </div>
      </div>
    </section>

    <section className="section small-res-social-media-component container">
      <div>
       <InstagramFeed />
      </div>
    </section>

    <section className="section" style={{ paddingTop: "150px" }}>
      <div className="temoc-level">
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingLeft: "2%",
            paddingRight: "2%",
            height: 10,
          }}
        >
          <hr
            style={{
              height: 0.5,
              borderWidth: 10,
              border: "1px solid rgba(0, 0, 0, 0.17)",
            }}
          ></hr>

          <div
            className="container"
            style={{
              position: "relative",
              width: "10%",
              minWidth: "200px",
              margin: "0 auto",
              top: "-200px",
            }}
          >
            <img src="/imgs/Temoc_BW.svg" alt="Temoc icon"></img>
          </div>
        </div>
      </div>

      <div
        className="columns is-mobile"
        style={{ paddingLeft: "7%", paddingRight: "7%" }}
      >
        <div className="column">
          <h1 className="benefits-text" style={{ textAlign: "left" }}>
            Community
          </h1>
        </div>
        <div className="column">
          <h1 className="benefits-text" style={{ textAlign: "center" }}>
            Networking
          </h1>
        </div>
        <div className="column">
          <h1 className="benefits-text" style={{ textAlign: "right" }}>
            Career Development
          </h1>
        </div>
      </div>

      <p className="is-size-4 benefits-p">
        The Society of Hispanic Professional Engineers (SHPE) is the largest
        association in the nation for Hispanics in the STEM community. This
        organization offers both students and professionals mentorship,
        training, and programming. SHPE's mission is to change lives by
        empowering the Hispanic community to realize its fullest potential and
        to impact the world through STEM awareness, access, support, and
        development.
      </p>

      <div className="temoc-level">
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingLeft: "2%",
            paddingRight: "2%",
            height: 10,
            paddingTop: "4%",
          }}
        >
          <hr
            style={{
              height: 0.5,
              borderWidth: 10,
              border: "1px solid rgba(0, 0, 0, 0.17)",
            }}
          ></hr>

          <div
            className="container"
            style={{
              position: "relative",
              width: "10%",
              minWidth: "200px",
              margin: "0 auto",
              top: "-200px",
            }}
          ></div>
        </div>
      </div>
    </section>

    {/* <section className="section" style={{ minHeight: "2vw" }}>
      <Calendar />
    </section> */}
  </Layout>
);

export default IndexPage;
