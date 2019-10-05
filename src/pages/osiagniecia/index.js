import React from 'react'
import styled from "styled-components"

import BlogRoll from '../../components/BlogRoll'
import OfferWallpaper from '../../img/offerWallpaper.jpg'
import Layout from '../../components/Layout'
import Aside from '../../components/Aside'

export default class AboutUsIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: undefined
    }
  }
  filterPostsBy = (tag) => {
    this.setState({
      tag
    })
  }
  render() {
    return (
      <Layout>
        {
          this.state.tag === undefined &&
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url(${OfferWallpaper})`
            }}>
            <div style={{
              background: 'linear-gradient(to top right, rgba(0,153,153,0.7), 10%, transparent, 90%, rgba(0,153,153,0.5))',
              color: '#009999',
              padding: '2rem 6rem',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h2 className="has-text-weight-bold is-size-1 has-text-centered">
                Osiągnięcia
              </h2>
            </div>
          </div>
        }
        <section className="section" style={{padding: 0, height: '100%'}}>
          <div className="container">
            <div className="content">
              <Aside tag={this.state.tag} filterPostsBy={(tag) => this.filterPostsBy(tag)}/>
              <BlogRoll tag={this.state.tag}/>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
