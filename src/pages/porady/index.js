import React from 'react'
import styled from "styled-components"

import BlogRoll from '../../components/BlogRoll'
import OfferWallpaper from '../../img/offerWallpaper.jpg'
import Layout from '../../components/Layout'
import Aside from '../../components/Aside'

export default class TipsIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: 'porady'
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
