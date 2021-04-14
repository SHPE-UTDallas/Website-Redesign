import Layout from "../components/Layout";
import OfficerJson from "../data/Officer.json";


type Props = {
  jrName: string;
  jrEmail: string;
 
};


const SHPEJR = ({jrName,jrEmail}:Props) => ( 
<Layout title="SHPE Jr.">
    <div className="has-text-link-dark has-text-centered is-size-1 has-text-weight-bold"
      style={{marginBottom:".7em"}}
    >
      SHPEjr
    </div>
<div
  className="container"
>     
     <p
      style ={{textAlign:"justified", marginBottom:".5em", marginLeft:"20%",marginRight:"20%",fontSize:"18px"}}
     >
     &emsp;&emsp;At SHPE UTD, SHPE Jr is our high school outreach program, where we work with local SHPE Jr chapters 
   	 to organize engineering projects, provide academic/professional guidance, and help students foster 
	   a successful future in STEM. The Noche de Ciencias is our premier event, where a whole evening is 
	   dedicated to both the high schoolers and their parents. For the students, we have sessions with 
	   professional engineers and engineering workshops. At the same time, events are held for the parents, 
     answering their questions and discussing the benefits and feasability of their children going into higher education and STEM.
     </p>
     </div>
   <header 
      className = "is-size-4"
      style={{color:"blue",marginLeft:"42%",marginBottom:"1em"}}
    >
        Promote STEM in your HIgh School!
   </header>

   <div
    className="level"
    style={{marginLeft:"42% ", marginRight:"30%"}}
   > 
    <ul className=" level-left"
      //style={{marginRight:"10%"}}
    >
         <a href="https://docs.google.com/forms/d/1piiE0I5lyUuZWxgP0DRDyi1vlRLDlkhnuwAAPQdqQec"
          //className="button is-primary is-rounded"  
          target="_blank"
        //  style={{color:"white"}}
          >
            <button
                className="button is-primary is-rounded"  
              >      
                    Join Committee Member!
            </button>

         </a>
      </ul>
   
      <ul
        className="actions  level-right"
      //  style={{marginRight:"20%"}}
      > 
      <a
          href={`mailto:${jrEmail}`}
        >
        <button
         className="button is-primary is-rounded"
         >
                    Contact {jrName}
          </button>
        </a>
    </ul>
     </div> 
     
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
