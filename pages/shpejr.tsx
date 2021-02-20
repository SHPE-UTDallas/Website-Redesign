import Layout from "../components/Layout";
import Link from 'next/link'
import OfficerJson from "../data/Officer.json";


type Props = {
  jrName: string;
  jrEmail: string;
 
};


const SHPEJR = ({jrName,jrEmail}:Props) => ( 
<Layout title="SHPEjr">
    <h1 
        className="title is-3"
     style={{marginLeft: "2%",marginBottom:"2%",marginTop:'2%'}}
    >
     SHPEjr 
    </h1>

    <p className="subtitle is-6"
       style ={{marginLeft:"2%", marginTop:"1%", }}    
    >
      For prospectisve Engineer
      
    </p>

    <hr
            style={{
              height: 0.5,
              borderWidth: 10,
              border: "1px solid rgba(0, 0, 0, 0.17)",
            }}
          ></hr>
  <div
    className='columns'
  >
    <div
      className='column'
    >
  <div
    style={{marginLeft:".5%", marginBottom:"2em"}}
  >
   <header 
      className = "is-size-4"
      style={{color:"blue"}}
    >
       Want to promote STEM to local high school students?    
     
   </header>

    <body>
      Join the SHPE Jr. Committee!
    </body>
    </div>
  
    <ul className="actions"
      style={{marginLeft:".5%", marginTop:"15px"}}
    >
       <li>
         <a href="https://docs.google.com/forms/d/1piiE0I5lyUuZWxgP0DRDyi1vlRLDlkhnuwAAPQdqQec" className="button is-primary is-outlined" target="_blank">
            Fill out this form
         </a>
            </li>
      </ul>
   
    <p
    style={{marginTop:"10px"}}
    >
      You can also contact the SHPE Jr. Officers
    </p>
   
    <div
       style={{marginRight:"80%", marginLeft:"1em"}}
    >
    <button 
       className="button is-round, is-link" 
      onClick={()=> {navigator.clipboard.writeText(jrEmail)}}> 
      Contact {jrName} -copied
    </button>
     </div>
    </div>
      
   <div
    className='column'
    style={{marginRight:"10%",fontSize:"120%"}}
   >
     <p
     // style ={{marginLeft:'80%'}}
     >
     At SHPE UTD, SHPE Jr is our high school outreach program, 
     where we work with local SHPE Jr chapters to organize engineering projects, 
     provide academic/professional guidance, and help students foster a successful future in STEM. 
     The Noche de Ciencias is our premier event, where a whole evening is dedicated to both 
     the high schoolers and their parents. For the students, 
     we have sessions with professional engineers and engineering workshops.
      At the same time, events are held for the parents, 
     answering their questions and discussing the benefits and 
     easability of their children going into higher education and STEM.
     </p>

   </div>
  </div>
    
      <p>
    
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>

  </Layout>
)
export async function getStaticProps() {
  let jrEmail = "";
  let jrName = "";
  OfficerJson.map((obj) => {
    const { name, position, email } = obj;
    if (position === "SHPE Jr. Chair") {
      jrEmail = email;
      jrName = name;
    }
  });
  return {
    props: {
      jrEmail,
      jrName,
    },
  };
}
export default SHPEJR
