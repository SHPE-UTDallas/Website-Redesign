import Layout from "../components/Layout";

const Podcast = () =>(
    <Layout title="SHPE Podcast">
         <div className="has-text-link-dark has-text-centered title is-1 has-text-weight-bold"
      style={{ marginBottom: ".75em" }}
    >
      Podcast
    </div>
    <div
      className="container podcastVideo  "
      >
    <div
      className="  is-felx column is-flex-wrap-wrap" 
      style={{marginLeft:"10%"}}
      
    > 
      <div
        className=" is-flex  is-half"
      >
      <iframe width="650" height="315" src="https://www.youtube-nocookie.com/embed/xov60UwCQXs" title="YouTube video player"
       frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="website"></iframe>
     </div>
    </div>
    </div>
  
<div className="container is-flex is-half" style={{textAlign:"center", marginTop:"2em",marginLeft:"20%",marginRight:"15%",fontSize:"125%" }}>
  Get closer to  la familia with the podcast! Listen to fellow member discussing
  and chatting on latest industrial and on-campus news.  
  Along with that get insight on job oppotunity and interview process. 
  </div>  

    </Layout>
);

export default Podcast;