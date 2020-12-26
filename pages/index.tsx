import Layout from "../components/Layout";
import { useSession } from "next-auth/client";

const IndexPage = () => {
  const [session, loading] = useSession();
  console.log(session);
  return (
    <Layout title="SHPE UTD">
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          {!session && (
            <>
              Not signed in <br />
            </>
          )}
          {session && (
            <>
              Signed in as {session.user.email} <br />
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
