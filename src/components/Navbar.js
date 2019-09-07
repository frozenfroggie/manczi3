import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Manczi" style={{ maxHeight: '70px', width: 'auto' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <Link
              activeClassName="active"
              className="navbar-item" to="/">
              STRONA GŁÓWNA
            </Link>
            <Link
              activeClassName="active"
              className="navbar-item" to="/oferta">
              OFERTA
            </Link>
            <Link
              activeClassName="active"
              className="navbar-item" to="/osiagniecia">
              OSIĄGNIĘCIA
            </Link>
            <Link
              activeClassName="active"
              className="navbar-item" to="/tags/porady/">
              PORADY
            </Link>
            <Link
              activeClassName="active"
              className="navbar-item" to="/nasz-zespol">
              NASZ ZESPÓŁ
            </Link>
            <Link
              activeClassName="active"
              className="navbar-item" to="/galeria">
              GALERIA
            </Link>
            <Link
              activeClassName="active"
              className="navbar-item" to="/kontakt">
              KONTAKT
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
