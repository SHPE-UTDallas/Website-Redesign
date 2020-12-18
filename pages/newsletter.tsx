import Layout from '../components/Layout'


const Newsletter = () => (
    <Layout title="SHPE UTD">
        <div className="container">
            <section className="section mt-4">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-half">
                        <p className="title is-1 is-spaced has-text-centered mt-4">Join our Newsletter</p>
                        <div className="field">
                            <p>First name</p>
                            <input type = "text" id="fname" name="fname"></input>
                        </div>
                        <div className="field">
                            <p>Last name</p>
                            <input type = "text" id="lname" name="lname"></input>
                        </div>
                        <div className="field">
                            <p>UTD email</p>
                            <input type = "text" id="email" name="email"></input>
                        </div>
                        <div className="field">
                            
                            <input type = "submit" value="Submit" ></input>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  </Layout>
  )

  export default Newsletter