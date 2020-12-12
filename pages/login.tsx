import { GoogleLoginButton, LinkedInLoginButton, MicrosoftLoginButton } from 'react-social-login-buttons'
import Layout from '../components/Layout'

const LoginPage = () => (
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
                            <GoogleLoginButton onClick={() => alert('This will log you in through Google eventually')}/>
                            <LinkedInLoginButton className="mt-4" onClick={() => alert('This will log you in through LinkedIn eventually')} />
                            <MicrosoftLoginButton className="mt-4" onClick={() => alert("Maybe we can login with our school outlooks?")} />
                            {/* <label className="label is-medium">Email</label>
                            <p className="control has-icons-left has-icons-right">
                                <input className="input is-medium" type="email" placeholder="Email" />
                                <span className="icon is-small is-left">
                                    <i className="fa fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fa fa-check"></i>
                                </span>
                            </p>
                            <label className="label is-medium mt-3">Password</label>
                            <p className="control has-icons-left has-icons-right">
                                <input className="input is-medium" type="email" placeholder="Password" />
                                <span className="icon is-small is-left">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </p>
                            <div className="field mt-3 has-text-centered">
                                <p className="control">
                                    <button className="button is-success is-medium">
                                    Login
                                    </button>
                                </p>
                            </div> */}
                            {/* <div className="field">
                            <label className="label">Email</label>
                            <p className="control has-icons-left has-icons-right">
                            <input className="input is-danger" type="text" placeholder="Email input" value="hello@" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fa fa-warning"></i>
                            </span>
                            </p>
                            <p className="help is-danger">This email is invalid</p>
                        </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
  </Layout>
)

export default LoginPage
