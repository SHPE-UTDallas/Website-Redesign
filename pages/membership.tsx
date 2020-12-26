import Link from 'next/link'
import Layout from '../components/Layout'

const MembershipPage = () => (
  <Layout title="SHPE UTD">
    <h1>Membership</h1>
    <p>This is the membership page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default MembershipPage
