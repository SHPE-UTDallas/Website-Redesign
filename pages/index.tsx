import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="SHPE UTD">
  <section className="section tile level gradient-background">
    <div className="container has-text-centered">
      <h1 className="title">
        Hello World
      </h1>
      
      <p className="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>

      <button className="button is-primary" style={{marginRight: "1em"}}>Subscribe to our Newsletter</button>
      <button className="button is-primary">Become a sponsor</button>
    </div>

    <div className="container">
      <h1 className="title">
        Hello World
      </h1>
      <p className="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  </Layout>
)

export default IndexPage
