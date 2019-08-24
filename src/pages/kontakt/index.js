import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import { FaEnvelope, FaUser, FaPhone, FaMapMarkerAlt, FaAngleDown, FaAngleUp, FaMoneyCheck, FaFacebookF } from 'react-icons/fa';
import styled from "styled-components"

const Row = styled.div`
  display: flex;
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section" style={{minHeight: 'calc(100vh - 90px)'}}>
          <div className="container" style={{height: '100%'}}>
            <div className="content" style={{height: '100%'}}>
              <div className="columns" style={{minHeight: '450px'}}>
                <div className="column is-6">
                  <div style={{fontSize: '1.5em', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <p style={{fontSize: '32px', marginBottom: '50px'}}>W celu umówienia się na wizytę prosimy o kontakt telefoniczny:</p>
                    <Row>
                      <FaPhone style={{marginRight: 25, position: 'relative', top: 4}} />
                      <div>
                        +48 504 237 358<br/>
                      </div>
                    </Row>
                    <Row>
                      <FaEnvelope style={{marginRight: 25, position: 'relative', top: 4}} />
                      <div>
                        example@gmail.com
                      </div>
                    </Row>
                    <Row>
                      <FaMapMarkerAlt style={{marginRight: 25, position: 'relative', top: 4}} />
                      <div>
                        ul. Pocztowa 13/9<br/>
                        89-600 Chojnice<br/>
                      </div>
                    </Row>
                  </div>
                </div>
                <div className="column is-6" style={{height: '100%'}}>
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                  style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                        placeholder="Twoje imię"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                        placeholder="Twój e-mail"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                    </label>
                    <div className="control">
                      <textarea
                        placeholder="Wiadomość"
                        className="textarea"
                        name={'message'}
                        rows="3"
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="btn-blue" type="submit">
                      Wyślij
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
