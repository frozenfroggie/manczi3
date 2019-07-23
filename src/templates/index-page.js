import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from "styled-components"

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

const BackgroundWallpaper = styled.div`
  background-position: 0%;
  background-size: cover;
  margin-top: -90px;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.imageMobile});
  @media only screen and (min-width: 1088px) {
    background-position: 50%;
    margin-top: -85px;
    background-image: url(${props => props.image});
  }
`

const TitleContainer = styled.span`
  font-size: 10px;
  height: 150px;
  background: none;
  padding: 30px 100px 30px 5px;
  @media only screen and (min-width: 1088px) {
    padding: 30px 100px 30px 30px;
    font-size: 15px;
    height: 150px;
  }
`

const Title = styled.span`
  position: relative;
  letter-spacing: 1px;
  left: -1px;
  font-size: ${props => props.size}em;
  font-weight: ${props => props.weight};
  white-space: pre;
  color: #ED1B68;
  @media only screen and (min-width: 1088px) {
    white-space: normal;
    left: 2px;
  }
`

export const IndexPageTemplate = ({
  image,
  imageMobile,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const pageHeight = typeof window !== 'undefined' && window.innerHeight;
  return (
    <div>
      <BackgroundWallpaper
        image={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
        imageMobile={!!imageMobile.childImageSharp ? imageMobile.childImageSharp.fluid.src : imageMobile}>
        <TitleContainer
          style={{
            position: 'relative',
            top: '150px',
            display: 'flex',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <Title
            weight="300"
            size="7"
            style={{
              color: '#ED1B68',
              lineHeight: '1',
              padding: '0.2em',
              textAlign: 'right',
              fontWeight: '300'
            }}
            className="manczi"
          >
            manczi
          </Title>
          <Title
            weight="300"
            size="2.7"
            style={{
              lineHeight: '1',
              padding: '0.2em 0.5em',
              textAlign: 'right',
            }}
          >
            {title}
          </Title>
          <Title
            weight="400"
            size="2.7"
            style={{
              lineHeight: '1',
              padding: '0.2em 0.5em',
              textAlign: 'right',
              letterSpacing: '1.3px'
            }}
          >
            {subheading}
          </Title>
        </TitleContainer>
        <section id="section10" className="demo">
          <a onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: pageHeight + 50, behavior: 'smooth' })}><span></span></a>
        </section>
      </BackgroundWallpaper>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <div className="tile" style={{width: '80%', textAlign: 'center'}}>
                      <h3 className="subtitle" style={{color: '#009999', fontWeight: '400', marginTop: 50}}>
                        {mainpitch.title}
                      </h3>
                    </div>
                    <div className="manczi">
                      manczi
                    </div>
                    <div style={{marginBottom: 50}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus enim massa, iaculis at porttitor vel, semper id tortor. Fusce vehicula, arcu quis aliquet auctor, urna augue fringilla turpis, in convallis nisl elit at tellus. Cras vel lectus ornare, pretium mauris a, dapibus tellus. Sed a leo facilisis, cursus turpis vitae, blandit enim. In pretium vulputate nibh, ut venenatis eros gravida eget. Nulla facilisi. Donec eget libero nec quam feugiat efficitur non quis sem. Nulla sagittis, nisi ut commodo euismod, magna sapien vehicula enim, vitae vestibulum risus ipsum vel lectus. Donec leo enim, semper sed iaculis ac, molestie eu mauris. Duis non tempus velit, quis dictum dui. Mauris vel malesuada velit. Fusce dolor quam, blandit vitae est non, congue maximus urna.
                    </div>
                    <div className="columns">
                      <div className="column is-12 has-text-centered">
                        <Link className="btn-blue" to="/products">
                          Pokaż więcej
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="column is-12" style={{margin: '150px 0px 100px 0px', padding: 0}}>
                    <h3 className="has-text-weight-semibold is-size-2" style={{color: '#ED1B68', marginBottom: '50px'}}>
                      Aktualności
                    </h3>
                    <BlogRoll />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        imageMobile={frontmatter.imageMobile}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        imageMobile {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
        }
      }
    }
  }
`
