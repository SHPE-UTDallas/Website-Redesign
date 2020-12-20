import { GoogleLoginButton, LinkedInLoginButton, MicrosoftLoginButton } from 'react-social-login-buttons'
import Layout from '../components/Layout'

const LoginPage = () => (
  <Layout title="SHPE UTD">
        <section className="section mt-4">
            <div className="columns is-centered is-vcentered">
                <div className="column is-half">
                    <figure className="center-image is-flex is-4 image is-256x256">
                        <img className="is-rounded" src="/imgs/SHPE_Icon.png" />
                    </figure>
                    <p className="title is-1 is-spaced has-text-centered mt-4">Login</p>
                    <div className="field">
                        <GoogleLoginButton onClick={() => alert('This will log you in through Google eventually')}/>
                        <LinkedInLoginButton className="mt-4" onClick={() => alert('This will log you in through LinkedIn eventually')} />
                        <MicrosoftLoginButton className="mt-4" onClick={() => alert("Maybe we can login with our school outlooks?")} />
                    </div>
                </div>
            </div>
        </section>
  </Layout>
)

export default LoginPage