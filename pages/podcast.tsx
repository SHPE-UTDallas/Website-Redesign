import Layout from "../components/Layout";
import OfficerJson from "../data/Officer.json";

const Podcast = () =>(
    <Layout title="SHPE Podcast">
         <div className="has-text-link-dark has-text-centered title is-1 has-text-weight-bold"
      style={{ marginBottom: ".75em" }}
    >
      Podcast
    </div>
    <div
      className="container"
      >
    <div
      className=" is-flex column is-flex-wrap-wrap" 
    > 
      <div
        className=" is-flex is-half "
      >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xov60UwCQXs" title="YouTube video player" 
        allow="accelerometer  ; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
     </div>
    </div>
  </div>
  
<div className="container" style={{textAlign:"center", marginTop:"2em"}}>
  Get closer to  la familia with the podcast! Listen to fellow member discussing
  and chatting of latest industrial and on-campus news.  
  Get insight on job oppotunity and interview process. 
  </div>  
    </Layout>
);

export default Podcast;