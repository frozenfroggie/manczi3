import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from "styled-components"
import { FaInfo, FaInfoCircle } from 'react-icons/fa';
import homeJumbotron from "../img/home-jumbotron.jpg";
import homeJumbotronMobile from "../img/home-jumbotron-mobile.jpg";

import Layout from '../components/Layout'
import NewsRoll from '../components/NewsRoll'
import InfoDescription from '../components/InfoDescription'

const BackgroundWallpaper = styled.div`
  background-position: 0%;
  background-size: cover;
  margin-top: -90px;
  width: 100%;
  height: 100vh;
  background-image: url(${homeJumbotronMobile});
  @media only screen and (min-width: 1088px) {
    background-position: 50%;
    margin-top: -85px;
    background-image: url(${homeJumbotron});
  }
`

const TitleContainer = styled.span`
  font-size: 10px;
  height: 100px;
  background: none;
  padding: 30px 100px 30px 5px;
  @media only screen and (min-width: 1088px) {
    padding: 30px 100px 30px 30px;
    font-size: 15px;
    height: 170px;
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
  info,
  infoDescription,
  subheading,
  mainpitch,
  description,
  intro,
  infoImage
}) => {
  const pageHeight = typeof window !== 'undefined' && window.innerHeight;
  return (
    <div>
      <BackgroundWallpaper>
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
            Podaruj swojemu psu luksus,
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
            na jaki zasługuje!
          </Title>
          <Title
            weight="400"
            size="1.5"
            style={{
              lineHeight: '1',
              padding: '0.2em 0.5em',
              textAlign: 'center'
            }}>
            <InfoDescription
              info={info}
              infoDescription={infoDescription}
              image={!!infoImage.childImageSharp ? infoImage.childImageSharp.fluid.src : infoImage}>
            </InfoDescription>
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
                    <div className="tile" style={{width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                      <h3 className="subtitle" style={{fontSize: '2em', textAlign: 'center', color: '#009999', fontWeight: '300', marginTop: 40, marginBottom: 50, lineHeight: 1.6}}>
                        Salon pielęgnacji psów Manczi <br/>
                        to <span style={{fontWeight: 600}}>kompleksowa kosmetyka</span> Twojego psa
                      </h3>
                    </div>
                    <div style={{marginBottom: 50, textAlign: 'justify', lineHeight: '1.6em'}}>
                      <p style={{textAlign: 'justify'}}>
                        Wygląd Twojego psa jest naszą pasją! Sprawimy, że będzie zachwycał piękną fryzurą.<br/><br/>
                        Nie radzisz sobie z sierścią pupila i przeszkadza Ci błoto wnoszone przez czworonoga?<br/>
                        Na to również znajdziemy rozwiązanie!<br/><br/>
                        Zapraszamy serdecznie do zapoznania się z ofertą, osiągnięciami oraz naszymi pracami.<br/>
                        Do zobaczenia :)
                      </p>
                    </div>
                    <div className="columns is-12 full-width-mobile">
                      <div className="column is-4 has-text-centered">
                        <Link style={{minWidth: 195}} className="btn-pink" to="/kontakt">
                          Umów wizytę
                        </Link>
                      </div>
                      <div className="column is-4 has-text-centered">
                        <Link style={{minWidth: 195}} className="btn-blue" to="/oferta">
                          Pokaż ofertę
                        </Link>
                      </div>
                      <div className="column is-4 has-text-centered">
                        <Link style={{minWidth: 195}} className="btn-blue" to="/galeria">
                          Zobacz galerię
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="column is-12" style={{margin: '150px 0px 100px 0px', padding: 0}}>
                    <h3 className="has-text-weight-semibold is-size-2" style={{color: '#ED1B68', marginBottom: '50px'}}>
                      Aktualności
                    </h3>
                    <NewsRoll />
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
        info={frontmatter.info}
        infoImage={frontmatter.infoImage}
        infoDescription={frontmatter.infoDescription}
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
        infoImage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        info
        infoDescription
      }
    }
  }
`
