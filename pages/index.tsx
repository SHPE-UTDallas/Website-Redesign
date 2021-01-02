import Layout from '../components/Layout'
import InstagramFeed from '../components/InstagramFeed'

const IndexPage = () => (
  <Layout title="SHPE UTD">
  <section className="section">
    <div className="container">
      <h1 className="title">
        Hello World
      </h1>
      <p className="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
    <div className="container">
      <InstagramFeed/>
    </div>
  </section>
  </Layout>
)

export default IndexPage
