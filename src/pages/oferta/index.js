import React from 'react'
import styled from "styled-components"

import Layout from '../../components/Layout'
import OfferWallpaper from '../../img/offerWallpaper.jpg'

import Clipping from '../../img/clipping.png'
import Dripping from '../../img/dripping.png'
import Combing from '../../img/combing.png'
import Trimming from '../../img/trimming.png'
import Exhibitions from '../../img/exhibitions.png'
import Coloring from '../../img/coloring.png'

const Service = styled.div`
  position: relative;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover .front {
    transform: rotateY(180deg);
  }
  &:hover .back {
    transform: rotateY(0deg);
  }
`

const ServiceFront = styled.div`
  position: absolute;
  height: 200px;
  width: 200px;
  backface-visibility: hidden;
  border-radius: 50%;
  box-sizing: border-box;
  border: 4px solid #009999;
  transition: all .4s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transform-style: preserve-3d;
  perspective: 1000px;
`

const ServiceBack = styled.div`
  position: absolute;
  height: calc(99% + 4px);
  width: calc(99% + 4px);
  background-color: #009999;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6em;
  padding: 25px;
  transition: all .4s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transform-style: preserve-3d;
  perspective: 1000px;
`

const Img = styled.img`
  width: 200px;
  height: 200px;
  position: relative;
`

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`

const ServiceName = styled.div`
  padding-top: 25px;
  font-size: 1em;
  text-align: center;
`

export default class OfferIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${OfferWallpaper})`
          }}>
          <div style={{
            background: 'linear-gradient(to top right, rgba(237,27,104, 0.4), 6%, transparent)',
            color: '#fff',
            padding: '2rem 6rem',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end'
          }}>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <h2 className="has-text-weight-bold is-size-1" style={{textAlign: 'center', color: '#ED1B68'}}>
                    Nasze usługi
                  </h2>
                  <div className="columns is-12" style={{padding: '0px 20px'}}>
                    <div className="column is-4">
                      <ServiceWrapper>
                        <Service>
                          <ServiceFront className="front">
                            <Img src={Clipping} alt="Clipping" style={{top: -6, left: -6}}/>
                          </ServiceFront>
                          <ServiceBack className="back">
                            Strzyżenie
                          </ServiceBack>
                        </Service>
                        <ServiceName>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat vehicula viverra. Praesent fermentum, massa a egestas eleifend, erat eros iaculis nulla.
                        </ServiceName>
                      </ServiceWrapper>
                    </div>
                    <div className="column is-4">
                      <ServiceWrapper>
                        <Service>
                          <ServiceFront className="front">
                            <Img src={Dripping} alt="Dripping" style={{top: -5}} />
                          </ServiceFront>
                          <ServiceBack className="back">
                            Kąpanie
                          </ServiceBack>
                        </Service>
                        <ServiceName>
                          Proin fermentum elit non ex tristique, finibus semper felis aliquet. Mauris quis venenatis nisl. Quisque convallis quam id quam imperdiet, id tempor felis sollicitudin.
                        </ServiceName>
                      </ServiceWrapper>
                    </div>
                    <div className="column is-4">
                      <ServiceWrapper>
                        <Service>
                          <ServiceFront className="front">
                            <Img src={Combing} alt="Combing" style={{top: -5}} />
                          </ServiceFront>
                          <ServiceBack className="back">
                            Wyczesywanie
                          </ServiceBack>
                        </Service>
                        <ServiceName>
                          Nunc auctor sit amet dolor quis egestas. Integer ullamcorper tellus nec lorem iaculis, id molestie quam ullamcorper.
                        </ServiceName>
                      </ServiceWrapper>
                    </div>
                  </div>
                  <div className="columns is-12"  style={{padding: 20}}>
                    <div className="column is-4">
                      <ServiceWrapper>
                        <Service>
                          <ServiceFront className="front">
                            <Img src={Trimming} alt="Trimming" />
                          </ServiceFront>
                          <ServiceBack className="back">
                            Trymowanie
                          </ServiceBack>
                        </Service>
                        <ServiceName>
                          Vestibulum finibus laoreet eros at blandit. Nam bibendum finibus mollis. Duis porta sem enim, vel consequat augue tincidunt sollicitudin.
                        </ServiceName>
                      </ServiceWrapper>
                    </div>
                    <div className="column is-4">
                      <ServiceWrapper>
                        <Service>
                          <ServiceFront className="front">
                            <Img src={Exhibitions} alt="Preparing for exhibitions" style={{top: -11}} />
                          </ServiceFront>
                          <ServiceBack className="back">
                            Przygotowanie do wystaw
                          </ServiceBack>
                        </Service>
                        <ServiceName>
                          Sed eu velit luctus, condimentum massa non, fringilla augue. Suspendisse at elementum nunc, ut hendrerit quam.
                        </ServiceName>
                      </ServiceWrapper>
                    </div>
                    <div className="column is-4">
                      <ServiceWrapper>
                        <Service>
                          <ServiceFront className="front">
                            <Img src={Coloring} alt="Coloring" style={{top: -11, left: -5}}/>
                          </ServiceFront>
                          <ServiceBack className="back">
                            Farbowanie
                          </ServiceBack>
                        </Service>
                        <ServiceName>
                          Suspendisse elit quam, sagittis eget molestie quis, aliquam at sapien. Aenean aliquet, ex id mollis blandit, lectus ex imperdiet augue, sit amet sagittis ante dui sit amet tortor.
                        </ServiceName>
                      </ServiceWrapper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{height: 50}}></div>
      </Layout>
    )
  }
}
