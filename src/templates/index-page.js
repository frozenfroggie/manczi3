import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled, { keyframes } from "styled-components"

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

const Title = styled.span`
  position: relative;
  letter-spacing: 1px;
  left: -1px;
  font-size: 1em;
  font-weight: ${props => props.weight};
  white-space: pre;
  @media only screen and (min-width: 1088px) {
    white-space: normal;
    left: 2px;
    font-size: 1.24em;
  }
`

export const IndexPageTemplate = ({
  image,
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
      <div
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `center`,
          backgroundSize: 'cover',
          marginTop: '-85px',
          width: '100%',
          height: '100vh'
        }}
      >
        <div
          style={{
            paddingTop: '300px',
            paddingRight: '70px',
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <Title
            weight="300"
            style={{
              color: '#ED1B68',
              lineHeight: '1',
              padding: '0.2em',
              textAlign: 'right',
              fontSize: '7em',
              fontWeight: '300'
            }}
            className="manczi"
          >
            manczi
          </Title>
          <Title
            weight="300"
            style={{
              color: '#ED1B68',
              lineHeight: '1',
              padding: '0.2em 0.5em',
              textAlign: 'right',
              fontSize: '2.7em',
              fontWeight: '300'
            }}
          >
            {title}
          </Title>
          <Title
            weight="300"
            style={{
              color: '#ED1B68',
              lineHeight: '1',
              padding: '0.2em 0.5em',
              textAlign: 'right',
              fontSize: '2.7em',
              fontWeight: '400',
              letterSpacing: '1.3px'
            }}
          >
            {subheading}
          </Title>
        </div>
        <section id="section10" className="demo">
          <a onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: pageHeight + 50, behavior: 'smooth' })}><span></span></a>
        </section>
      </div>
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
                        <Link className="btn" to="/products">
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
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
