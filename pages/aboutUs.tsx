import Layout from "../components/Layout";

const AboutUsPage = () => (
    <Layout title="SHPE UTD">
        <div className="has-text-link-dark has-text-centered is-size-1 has-text-weight-bold">
            Who We Are
      </div>
      <div className="column">
                <h6 className="benefits-text" style={{ textAlign: "center" }}>
                    Origin and Purpose
          </h6>
            </div>

        <div
            className="columns is-mobile"
            style={{ paddingLeft: "7%", paddingRight: "7%" , paddingBlockStart: "3%"}}
        >

            <div className="column">
                <h1 className="benefits-text" style={{ textAlign: "center" }}>
                    Mission
          </h1>
            </div>
        </div>

        <p className="is-size-4 benefits-p" style={{paddingBlockStart: "0%"}}>
            SHPE changes lives by empowering the Hispanic community to realize their fullest potential and impacts the world through STEM awareness, access, support and development.
      </p>

        <div
            className="columns is-mobile"
            style={{ paddingLeft: "7%", paddingRight: "7%", paddingBlockStart: "3%" }}
        >

            <div className="column">
                <h1 className="benefits-text" style={{ textAlign: "center" }}>
                    Vision
          </h1>
            </div>
        </div>

        <p className="is-size-4 benefits-p" style={{paddingBlockStart: "0%"}}>
            SHPE's vision is a world where Hispanics are highly valued and influential as the leading innovators, scientists, mathematicians and engineers.     
     </p>

        <div
            className="columns is-mobile"
            style={{ paddingLeft: "7%", paddingRight: "7%", paddingBlockStart: "3%" }}
        >

            <div className="column">
                <h1 className="benefits-text" style={{ textAlign: "center" }}>
                    General Information
          </h1>
            </div>
        </div>

        <p className="is-size-4 benefits-p" style={{paddingBlockStart: "0%"}}>
            The Society of Hispanic Professional Engineers (SHPE) was founded in Los Angeles, California, in 1974 by a group of engineers employed by the city of Los Angeles. Their objective was to form a national organization of professional engineers to serve as role models in the Hispanic community.
            The concept of Networking was the key basis for the organization. SHPE quickly established two student chapters to begin the network that would grow to encompass the nation as well as reach countries outside the United States. Today, SHPE enjoys a strong but independent network of professional and student chapters throughout the nation.
      </p>

      <div
            className="columns is-mobile"
            style={{ paddingLeft: "7%", paddingRight: "7%", paddingBlockStart: "3%" }}
        >

            <div className="column">
                <h1 className="benefits-text" style={{ textAlign: "center" }}>
                    Our SHPE Bylaws and Constitution at UT Dallas
          </h1>
            </div>
        </div>

        <div 
            className="columns is-mobile"
            style={{ alignSelf: "center"}}
        >
            <div className="buttons">
                <button className="button is-large is-info">ByLaws</button>
            </div>
        </div>

    </Layout>
);

export default AboutUsPage;