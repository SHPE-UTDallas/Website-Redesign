import React, { ReactNode } from "react";
import Link from "next/link";
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
    <div className="content">
      {children}
      <footer>
        <div className="has-text-centered">
          <hr />
          <span>
            I'm here to stay (Footer) Maybe add some of the contact info here?
          </span>
        </div>
      </footer>
    </div>
  </div>
);

export default Layout;
