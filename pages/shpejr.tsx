import Layout from "../components/Layout";
import Link from 'next/link'
const SHPEJR = () => (
<Layout title="SHPEjr | Next.js + TypeScript Example">
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

      <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default SHPEJR
