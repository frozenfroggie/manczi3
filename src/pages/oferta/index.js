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

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ArrowContainer = styled.div`
  width: auto;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 769px) {
    display: flex;
  }

`

const Service = styled.div`
  position: relative;
  border-radius: 50%;
  width: 185px;
  height: 185px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  &:hover .front {
    transform: rotateY(180deg);
  }
  &:hover .back {
    transform: rotateY(0deg);
  }
`

const ServiceFront = styled.div`
  position: absolute;
  height: 185px;
  width: 185px;
  backface-visibility: hidden;
  border-radius: 50%;
  box-sizing: border-box;
  border: 4px solid #009999;
  transition: all .4s;
  /* transition-timing-function: cubic-bezier(.175, .885, .32, 1.275); */
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
  /* transition-timing-function: cubic-bezier(.175, .885, .32, 1.275); */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transform-style: preserve-3d;
  perspective: 1000px;
`

const Img = styled.img`
  width: 185px;
  height: 185px;
  position: relative;
`

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

const ServiceName = styled.div`
  padding-top: 25px;
  font-size: 1em;
  text-align: center;
`

export default class OfferIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: 0
    }
  }
  previous = () => {
    if(this.state.positionX == 0) {
      this.setState(prevState => ({
        positionX: parseFloat((prevState.positionX - 99.9).toFixed(1))
      }))
    } else {
      this.setState(prevState => ({
        positionX: parseFloat((prevState.positionX + 33.3).toFixed(1))
      }))
    }
  }
  next = () => {
    if(this.state.positionX == -99.9) {
      this.setState(prevState => ({
        positionX: parseFloat((prevState.positionX + 99.9).toFixed(1))
      }))
    } else {
      this.setState(prevState => ({
        positionX: parseFloat((prevState.positionX - 33.3).toFixed(1))
      }))
    }
  }
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
            <h2 className="has-text-weight-bold is-size-1 except-mobile">
              Nasze usługi
            </h2>
          </div>
        </div>
        <section className="section" style={{padding: 0, height: '100%'}}>
          <h2 className="has-text-weight-bold is-size-1 only-mobile" style={{marginTop: 50, textAlign: 'center', color: '#ED1B68'}}>
            Nasze usługi
          </h2>
          <div className="container" style={{margin: 0, width: '100vw', maxWidth: '100%'}}>
            <div className="content">
              <div className="columns" style={{margin: 0}}>
                <div className="column is-1" style={{backgroundColor: 'white', zIndex: 101}}>
                  <ArrowContainer onClick={this.previous}>
                    <FaChevronLeft size="4em" alt="Left" style={{top: -6, left: -6}} />
                  </ArrowContainer>
                </div>
                <div className="column is-10" style={{zIndex: 100, backgroundColor: 'white'}}>
                  <div className="columns is-tablet" style={{padding: '0px 20px', transition: 'transform .5s ease-in-out', transform: `translateX(${this.state.positionX}%)`}}>
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
                      </ServiceWrapper>
                    </div>
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
                      </ServiceWrapper>
                    </div>
                  </div>
                </div>
                <div className="column is-1" style={{backgroundColor: 'white', zIndex: 101}}>
                  <ArrowContainer onClick={this.next} style={{right: 0}}>
                    <FaChevronRight size="4em" alt="Right" style={{top: -6, left: -6}} />
                  </ArrowContainer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
