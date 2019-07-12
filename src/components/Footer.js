import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from "styled-components"

import logo from '../img/logo.png'
import facebook from '../img/fb-icon.png'

const FacebookIcon = styled.img`
  width: 48px;
  height: 48px;
  transition: all .4s;
  &:hover {
    cursor: pointer;
    transform: rotate(360deg);
  }
`

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <section style={{height: '100%'}}>
                  <div className="content" style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img
                      src={logo}
                      alt="Kaldi"
                      style={{ width: '10em', height: 'auto' }}
                    />
                  </div>
                </section>
              </div>
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Oferta
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        O nas
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Nasz zespół
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Galeria
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a title="facebook" href="https://facebook.com"  style={{display: 'flex', height: '48px', width: '48px', justifyContent: 'center', alignItems: 'center'}}>
                  <FacebookIcon
                    src={facebook}
                    alt="Facebook"
                  />
                </a>
              </div>
              <div className="column is-3">
                <section className="contact" style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: '2.2em'}}>
                  <p>
                    ul. Pocztowa 13/9<br/>
                    89-600 Chojnice<br/>
                    +48 504 237 358<br/>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
