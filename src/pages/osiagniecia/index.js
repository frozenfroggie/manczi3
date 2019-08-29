import React from 'react'
import styled from "styled-components"

import BlogRoll from '../../components/BlogRoll'
import OfferWallpaper from '../../img/offerWallpaper.jpg'
import Layout from '../../components/Layout'
import Aside from '../../components/Aside'

export default class AboutUsIndexPage extends React.Component {
  render() {
    return (

      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${OfferWallpaper})`
          }}>
          <div style={{
            background: 'linear-gradient(to top right, #009999, 10%, transparent, 90%, #ED1B68)',
            color: '#fff',
            padding: '2rem 6rem',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end'
          }}>
            <h2 className="has-text-weight-bold is-size-1">
              Osiągnięcia
            </h2>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <Aside />
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}