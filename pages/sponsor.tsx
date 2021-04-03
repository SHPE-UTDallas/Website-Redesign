import Layout from "../components/Layout";


const SponsorPage = () => (
  <Layout title="SHPE UTD">
    <div className="has-text-link-dark has-text-centered is-size-1 has-text-weight-bold">
      Sponsors
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
      <div className="column is-flex is-one-half-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
        <div className="is-flex is-flex-direction-column" style={{width: "100%", margin: "20px 0"}}>
          <a
            href="https://mufgamericas.com/"
            target="_blank"
          >
            <figure className="center-image image is-215x215">
              <img
                src="/imgs/sponsors/mufg.png"
                alt="MUFG"
              />
            </figure>
          </a>
        </div>
      </div>
      <div className="column is-flex is-one-half-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
        <div className="is-flex is-flex-direction-column" style={{width: "100%", margin: "20px 0"}}>
          <a
            href="https://www.capitalone.com/"
            target="_blank"
          >
            <figure className="center-image image is-215x215">
              <img
                src="/imgs/sponsors/capitalone.png"
                alt="Capital One"
              />
            </figure>
          </a>
        </div>
      </div>
      <div className="column is-flex is-one-half-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
        <div className="is-flex is-flex-direction-column" style={{width: "100%", margin: "20px 0"}}>
          <a
            href="https://www.statefarm.com/"
            target="_blank"
          >
            <figure className="center-image image is-215x215">
              <img
                src="/imgs/sponsors/statefarm.png"
                alt="State Farm"
              />
            </figure>
          </a>
        </div>
      </div>
    </div>
  </Layout>
);


export default SponsorPage;
