import Layout from "../components/Layout";
import OfficerJson from "../data/Officer.json";

const Podcast = () =>(
    <Layout title="SHPE Podcast">
         <div className="has-text-link-dark has-text-centered title is-1 has-text-weight-bold"
      style={{ marginBottom: ".7em" }}
    >
      Podcast
    </div>
<div className="tile ">
  <div className="tile is-10 box">
    <div className="has-test-centere">
      empty
    </div>
  </div> 
</div>


<section className="section">
<div className="container" style={{textAlign:"center"}}>
  Listen your fellow SHPE member and officer talk about future events.
  Discussion of latest tech and tools used in the industry.
</div>
</section>
    </Layout>
);

export default Podcast;