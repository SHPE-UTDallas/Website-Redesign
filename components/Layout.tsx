import React, { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div id="parentDiv">
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

            <a className="navbar-item" href="/about">
              About
            </a>

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
                <a className="navbar-item">Technology Team</a>
              </div>
            </div>
          </div>

          <div className="navbar-end"></div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="/login">
                  Log in
                </a>
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
              <div className="column has-text-left">
                <h1 className="footer-title is-uppercase">Contact</h1>
                <p className="footer-text">
                  800 W Campbell Rd. <br></br>Richardson, TX 75080 <br></br>
                  United States of America <br></br>
                  <br></br>
                  <a href="mailto:utdshpe@gmail.com">utdshpe@gmail.com</a>
                </p>
              </div>
              <div className="column has-text-centered">
                <h1 className="footer-title is-uppercase">
                  Navigation
                </h1>
                <p className="footer-text has-text-left">
                  <a href="/">Home</a>
                  <br></br>
                  <a href="/about">About</a>
                  <br></br>
                  <a href="/events">Events</a>
                  <br></br>
                  <a href="/membership">Membership</a>
                  <br></br>
                  <a href="/getInvolved">Get Involved</a>
                  <br></br>
                  <a href="https://docs.google.com/document/d/1S8wOE2FgdFuP_aYYOY3IAjjr81RvK2TfYMYzC9vDMQY/edit">
                    Bylaws
                  </a>
                  <br></br>
                </p>
              </div>
              <div className="column has-text-right">
                <h1 className="footer-title is-uppercase">Follow Us</h1>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Layout;
