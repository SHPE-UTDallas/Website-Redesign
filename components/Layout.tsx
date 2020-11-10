import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>

  <nav className="level top-bar m-0">
  <div className="level-item has-text-centered">
      {
      //TODO GET ICONS FOR MAIL AND LOCATION HERE 
      }
      <p className="m-1">utdshpe@gmail.com</p>
      <p className="m-1">800 W Campbell Rd, Richardson, TX 75080</p>
  </div>
  </nav>

  <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
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
        <a className="navbar-link">
          Events
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            Calendar
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            General Meetings
          </a>
          <a className="navbar-item">
            Conferences
          </a>
        </div>
      </div>

      <a className="navbar-item">
        Membership
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Get Involved
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            Mentor Program
          </a>
          <a className="navbar-item">
            SHPE Jr.
          </a>
          <a className="navbar-item">
            Technology Team
          </a>
        </div>
      </div>

      <a className="navbar-item" href="/users">
        Users List
      </a>

      <a className="navbar-item" href="/api/users">
        Users API
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    </header>
    {children}
    <footer>
      <div className="content has-text-centered">
      <hr />
      <span>
        I'm here to stay (Footer) 
        Maybe add some of the contact info here?
      </span>
      </div>
    </footer>
  </div>
)

export default Layout
