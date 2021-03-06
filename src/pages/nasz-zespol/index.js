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
  display: flex;
  align-items: center;
  font-family: Manczi;
  font-size: 3.5em;
  @media only screen and (min-width: 1088px) {
    font-size: 5em;
  }
`

const StripImage = styled.img`
  position: relative;
  top: -25px;
  width: 250px;
  height: 250px;
  border: 1px solid red;
  border-radius: 50%;
  padding: 0px 50px;
  display: none;
  @media only screen and (min-width: 1088px) {
    display: block;
  }
`

const EmployeeName = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0px;
  z-index: 1;
  @media only screen and (min-width: 1088px) {
    top: -30px;
  }
  div {
    position: relative;
    @media only screen and (max-width: 1087px) {
      left: 20px;
    }
    span {
      position: relative;
      top: 20px;
      font-size: 1.8em;
      @media only screen and (min-width: 1088px) {
        top: 100px;
        font-size: 4em;
      }
    }
  }
`

const EmployeeNameSurname = styled.div`
  position: relative;
  top: -20px;
  left: 20px;
  @media only screen and (min-width: 1088px) {
    top: -150px;
    left: ${props => props.positionLeft}px;
  }
`

const Bold = styled.span`
  font-weight: 600;
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
            color: '#009999',
            padding: '2rem 5rem',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <h2 className="has-text-weight-bold is-size-1 is-size-3-mobile has-text-centered manczi-font">
              nasz zespół
            </h2>
          </div>
        </div>
        <section className="section">
          <div className="container" style={{zIndex: 10}}>
            <div className="content">
              <p style={{marginTop: 20, marginBottom: 40, fontSize: '1.5em', textAlign: 'center'}}>
                Nie możemy się doczekać, aby poznać Ciebie i Twoje zwiarzaki, a Ty już
                teraz możesz poznać nas :)
              </p>
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
              <p className="is-size-5">
                Właścicielka salonu. Grooming jest jej życiem od kilkunastu lat.
                Największą frajdę sprawiają jej <Bold>stylizacje azjatyckie i creative</Bold>. Pasjonuje się <Bold>groomingiem wystawowym</Bold> bichon frise oraz
                pudla.
                <br/>
                <br/>
                Pupilami Magdy są kilkunastoletni pudel toy Abi oraz wystawowe pieski - bichon frise Star Wars Princess z Nieba i czarny
                pudel średni Nikolajew Swan of Poland (w domu - Skywalker).
              </p>
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
              <p className="is-size-5">
                Specjalizuje się w <Bold>strzyżeniu klasycznym</Bold>.
                Ekspertka w pielęgnacj ras dużych.
                Perfekcjonistka w przygotowaniu włosa i w starciach z kołtunami.
                <br/>
                <br/>
                Prywatnie właścicielka kota, Irenki, a jej wielkim marzeniem jest
                posiadanie pudla standardowego.
              </p>
            </div>
          </div>
        </section>
        <Strip id="grazyna">
          <div className="container" style={{display: 'flex'}}>
            <StripTitle>
              <EmployeeName>
                <div><span>g</span>rażyna</div>
                <EmployeeNameSurname positionLeft={185}>babińska</EmployeeNameSurname>
              </EmployeeName>
            </StripTitle>
            <StripImage>
            </StripImage>
          </div>
        </Strip>
        <section className="section">
          <div className="container">
            <div className="content">
              <p className="is-size-5">
                Zajmie się przygotowaniem Twojego pupila do strzyżenia.
                Kąpiel i modelowanie włosa nie mają dla niej tajemnic. Jej konikiem jest <Bold>trymowanie psów krótkowłosych</Bold>.
                <br/>
                <br/>
                W domu czekają na nią po pracy 3 mordeczki: ratlerek Lili,
                yorkshire terrier Arni i hawańczyk Coco.
              </p>
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
