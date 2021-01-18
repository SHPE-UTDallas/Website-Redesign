import Layout from "../components/Layout";
import Link from 'next/link'
const SHPEJR = () => (
<Layout title="About | Next.js + TypeScript Example">
    <h1>SHPE jr</h1>
    <p>This is the jr page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default SHPEJR
