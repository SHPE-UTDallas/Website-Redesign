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
    <nav className="navbar" role="navigation" aria-label="main navigation">
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
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
