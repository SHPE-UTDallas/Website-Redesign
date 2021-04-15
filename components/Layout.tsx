import React, { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [session, loading] = useSession();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/45266f9559.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <header>
        <nav
          className="navbar is-primary is-transparent"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand" style={{ minHeight: "4em" }}>
            <a
              className="navbar-item"
              href="/"
              style={{ width: "10em", margin: "4px" }}
            >
              <Image
                src={"/SHPE_logo_horiz_White-Wordmark-RGB.png"}
                layout="fill"
                quality="100"
              />
            </a>

            {
              //TODO ADD HAMBURGER HERE
            }
          </div>

          <div id="navbar" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Home
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">About</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="/aboutUs">SHPE</a>
                  <a className="navbar-item" href="/sponsor">Sponsors</a>
                  <a className="navbar-item" href="/officer">Officers</a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Events</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">Calendar</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">General Meetings</a>
                  <a className="navbar-item">Conferences</a>
                </div>
              </div>

              <a className="navbar-item">Membership</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Get Involved</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">Mentor Program</a>
                  <a className="navbar-item">SHPE Jr.</a>
                  <a className="navbar-item" href="/tech-team">Technology Team</a>
                  <a className="navbar-item" href="/newsletter">
                    Newsletter
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  {session && (
                    <>
                      <a
                        className="button is-primary"
                        href={`/users/${session.user.id}`}
                      >
                        <strong>View Profile</strong>
                      </a>
                      <a className="button is-light" onClick={() => signOut()}>
                        Logout
                      </a>
                    </>
                  )}
                  {!session && (
                    <a className="button is-light" onClick={() => signIn()}>
                      Login
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
      </nav>
    </header>
    <div className="_content">
      {children}

      <footer>
        <div className="">
          <hr />
          <div className="container">
            <div className="columns">
              <div id="contact" className="column">
                <div className="centered-div">
                  <h1 className="footer-title is-uppercase">Contact</h1>
                  <p className="footer-text">
                    800 W Campbell Rd. <br></br>Richardson, TX 75080 <br></br>
                    United States of America <br></br>
                    <br></br>
                    <a className="footer-link" href="mailto:utdshpe@gmail.com">utdshpe@gmail.com</a>
                  </p>
                </div>
              </div>
              <div id="navigation" className="column">
                <div className="centered-div">
                  <h1 className="footer-title is-uppercase">Navigation</h1>
                  <p className="footer-text">
                    <a className="footer-link" href="/">
                      Home
                    </a>
                    <br></br>
                    <a className="footer-link" href="/about">
                      About
                    </a>
                    <br></br>
                    <a className="footer-link" href="/events">
                      Events
                    </a>
                    <br></br>
                    <a className="footer-link" href="/membership">
                      Membership
                    </a>
                    <br></br>
                    <a className="footer-link" href="/getInvolved">
                      Get Involved
                    </a>
                    <br></br>
                    <a
                      className="footer-link"
                      href="https://docs.google.com/document/d/1S8wOE2FgdFuP_aYYOY3IAjjr81RvK2TfYMYzC9vDMQY/edit"
                      target="_blank"
                    >
                      Bylaws
                    </a>
                    <br></br>
                  </p>
                </div>
              </div>
              <div id="follow" className="column">
                <div className="centered-div">
                  <h1 className="footer-title is-uppercase">Follow Us</h1>

                  <div
                    className="columns is-mobile"
                    style={{ verticalAlign: "bottom" }}
                  >
                    <div className="column">
                      <a
                        href="https://www.facebook.com/SHPEUTD/"
                        target="_blank"
                      >
                        <img
                          className="social-media-icon"
                          src="/imgs/social-media-logos/facebook-logo.webp"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="column">
                      <a
                        href="https://www.instagram.com/shpeutd/"
                        target="_blank"
                      >
                        <img
                          className="social-media-icon"
                          src="/imgs/social-media-logos/instagram-app-icon.png"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="column">
                      <a
                        href="https://www.linkedin.com/company/shpe-utd/"
                        target="_blank"
                      >
                        <img
                          className="social-media-icon"
                          src="/imgs/social-media-logos/linkedin-in-logo.webp"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="column">
                      <a href="https://twitter.com/shpeutd" target="_blank">
                        <img
                          className="social-media-icon"
                          src="/imgs/social-media-logos/twitter.png"
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Layout;
