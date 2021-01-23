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

  <div
    style={{marginLeft:".5%"}}
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
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default SHPEJR
