import Layout from "../components/Layout";

const points = () => (
    <Layout title="SHPE UTD">
        <section className="section gradient-background">
            <div className="has-text-link-dark has-text-centered is-size-1 has-text-weight-bold">
                Member Point Leaderboard
            </div>
            <div className="columns is-mobile is-centered">
                <div className="column is-one-third" style={{paddingLeft:"8%"}}>
                    <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTx_0kC_p2JAnHabBExnfXDjiHYbb46xgR6unqKsAuCfb7BVmW9qB1kTDBP37-E1IOWeIfa_oQ5CH-G/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A:F"
                        width="80%"
                        height="600"
                        frameBorder="0"
                        >
                    </iframe>
                </div>
            </div>
         
        </section>
    </Layout>
);


export default points;