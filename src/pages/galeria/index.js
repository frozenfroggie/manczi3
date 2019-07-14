import React from 'react'

import Layout from '../../components/Layout'
import OfferWallpaper from '../../img/offerWallpaper.jpg'

export default class GalleryIndexPage extends React.Component {
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
              Galeria
            </h2>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-9">
                </div>
                <div className="column is-3">
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
