import React from 'react'
import styled from "styled-components"

import Layout from '../../components/Layout'
import OfferWallpaper from '../../img/offerWallpaper.jpg'

const Strip = styled.div`
  width: 100vw;
  height: 200px;
  background-color: #BDE3DE;
  display: flex;
  margin: 100px 0px;
`

const StripTitle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 5em;
  display: flex;
  align-items: center;
  font-family: Manczi;
`

const StripImage = styled.img`
  position: relative;
  top: -25px;
  width: 250px;
  height: 250px;
  border: 1px solid red;
  border-radius: 50%;
  padding: 0px 50px;
`

const EmployeeName = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -30px;
  div {
    span {
      position: relative;
      top: 100px;
      font-size: 4em;
    }
  }
`

const EmployeeNameSurname = styled.div`
  position: relative;
  top: -150px;
  left: ${props => props.positionLeft}px;
`

export default class OurTeamIndexPage extends React.Component {
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
              Nasz zespół
            </h2>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-3">
                  <a href="#magdalena">
                    <div className="btn-blue">
                      Magdalena Manczikowska
                    </div>
                  </a>
                </div>
                <div className="column is-3">
                  <a href="#klaudia">
                    <div className="btn-blue">
                      Klaudia Babińska
                    </div>
                  </a>
                </div>
                <div className="column is-3">
                  <a href="#grazyna">
                    <div className="btn-blue">
                      Grażyna Babińska
                    </div>
                  </a>
                </div>
                <div className="column is-3">
                  <a href="#edyta">
                    <div className="btn-blue">
                      Edyta Manczikowska
                    </div>
                  </a>
                </div>
              </div>
              <p style={{marginTop: 30}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas, nisl sed mollis laoreet, orci velit dapibus nibh, et efficitur ipsum eros a ipsum. Nullam eleifend eleifend libero, nec dictum justo condimentum eget. Suspendisse potenti. Phasellus id vehicula nibh, at pulvinar erat. Pellentesque placerat, ex et rutrum aliquet, massa lorem semper urna, vel feugiat est quam dictum tellus. Nam vel ligula condimentum dui fringilla placerat id ut tellus.
              </p>
            </div>
          </div>
        </section>
        <Strip id="magdalena">
          <div className="container" style={{display: 'flex'}}>
            <StripTitle>
              <EmployeeName>
                <div><span>m</span>agdalena</div>
                <EmployeeNameSurname positionLeft={220}>manczikowska</EmployeeNameSurname>
              </EmployeeName>
            </StripTitle>
            <StripImage>
            </StripImage>
          </div>
        </Strip>
        <section className="section">
          <div className="container">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, nunc eget rhoncus fermentum, erat est finibus dolor, eu dapibus enim elit sit amet dolor. Fusce aliquet lacus ac sapien viverra sagittis. Sed tempor rutrum nisl. Sed in purus ac diam hendrerit euismod. Mauris eget enim lacinia, pulvinar lorem ut, ornare ex. Praesent volutpat ultricies quam, id fringilla justo eleifend at. Duis consectetur faucibus laoreet.
            </div>
          </div>
        </section>
        <Strip id="klaudia">
          <div className="container" style={{display: 'flex'}}>
            <StripTitle>
              <EmployeeName>
                <div><span>k</span>laudia</div>
                <EmployeeNameSurname positionLeft={150}>babińska</EmployeeNameSurname>
              </EmployeeName>
            </StripTitle>
            <StripImage>
            </StripImage>
          </div>
        </Strip>
        <section className="section">
          <div className="container">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, nunc eget rhoncus fermentum, erat est finibus dolor, eu dapibus enim elit sit amet dolor. Fusce aliquet lacus ac sapien viverra sagittis. Sed tempor rutrum nisl. Sed in purus ac diam hendrerit euismod. Mauris eget enim lacinia, pulvinar lorem ut, ornare ex. Praesent volutpat ultricies quam, id fringilla justo eleifend at. Duis consectetur faucibus laoreet.
            </div>
          </div>
        </section>
        <Strip id="grazyna">
          <div className="container" style={{display: 'flex'}}>
            <StripTitle>
              <EmployeeName>
                <div><span>g</span>rażyna</div>
                <EmployeeNameSurname positionLeft={200}>babińska</EmployeeNameSurname>
              </EmployeeName>
            </StripTitle>
            <StripImage>
            </StripImage>
          </div>
        </Strip>
        <section className="section">
          <div className="container">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, nunc eget rhoncus fermentum, erat est finibus dolor, eu dapibus enim elit sit amet dolor. Fusce aliquet lacus ac sapien viverra sagittis. Sed tempor rutrum nisl. Sed in purus ac diam hendrerit euismod. Mauris eget enim lacinia, pulvinar lorem ut, ornare ex. Praesent volutpat ultricies quam, id fringilla justo eleifend at. Duis consectetur faucibus laoreet.
            </div>
          </div>
        </section>
        <Strip id="edyta">
          <div className="container" style={{display: 'flex'}}>
            <StripTitle>
              <EmployeeName>
                <div><span>e</span>dyta</div>
                <EmployeeNameSurname positionLeft={170}>manczikowska</EmployeeNameSurname>
              </EmployeeName>
            </StripTitle>
            <StripImage>
            </StripImage>
          </div>
        </Strip>
        <section className="section" style={{marginBottom: 100}}>
          <div className="container">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, nunc eget rhoncus fermentum, erat est finibus dolor, eu dapibus enim elit sit amet dolor. Fusce aliquet lacus ac sapien viverra sagittis. Sed tempor rutrum nisl. Sed in purus ac diam hendrerit euismod. Mauris eget enim lacinia, pulvinar lorem ut, ornare ex. Praesent volutpat ultricies quam, id fringilla justo eleifend at. Duis consectetur faucibus laoreet.
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
