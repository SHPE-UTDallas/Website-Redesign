import {
  GoogleLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
} from "react-social-login-buttons";
import Layout from "../../components/Layout";
import { providers, signIn } from 'next-auth/client'

interface Providers {
    providers: {
        google: {
            name: string,
            id: string
        },
        linkedin: {
            name: string,
            id: string
        }
    }
}

const LoginPage = ({providers} : Providers) => (
  <Layout title="SHPE UTD">
    <div className="container">
      <section className="section mt-4">
        <div className="columns is-centered is-vcentered">
          <div className="column is-half">
            <figure className="center-image is-flex is-4 image is-256x256">
              <img className="is-rounded" src="/imgs/SHPE_Icon.png" />
            </figure>
            <p className="title is-1 is-spaced has-text-centered mt-4">Login</p>
            <div className="field">
              <GoogleLoginButton
                onClick={() =>
                  signIn(providers.google.id)
                }
              />
              <LinkedInLoginButton
                className="mt-4"
                onClick={() =>
                 signIn(providers.linkedin.id)
                }
              />
              <MicrosoftLoginButton
                className="mt-4"
                onClick={() =>
                  alert("Maybe we can login with our school outlooks?")
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

LoginPage.getInitialProps = async () => {
    return {
      providers: await providers()
    }
 }

export default LoginPage;
