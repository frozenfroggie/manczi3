import React from 'react'
import styled, { keyframes } from "styled-components"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Layout from '../../components/Layout'
import OfferWallpaper from '../../img/offerWallpaper.jpg'

import Emmi from '../../img/emmi.png'
import EmmiText from '../../img/emmi-text.png'
import Courses from '../../img/courses.png'
import CoursesText from '../../img/courses-text.png'
import Clipping from '../../img/clipping.png'
import Dripping from '../../img/dripping.png'
import Combing from '../../img/combing.png'
import Trimming from '../../img/trimming.png'
import Exhibitions from '../../img/exhibitions.png'
import Coloring from '../../img/coloring.png'
import ClippingText from '../../img/clipping-text.png'
import DrippingText from '../../img/dripping-text.png'
import CombingText from '../../img/combing-text.png'
import TrimmingText from '../../img/trimming-text.png'
import ExhibitionsText from '../../img/exhibitions-text.png'
import ColoringText from '../../img/coloring-text.png'

import { FaInfo, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const moveLeft = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const moveRight = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
`;

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
    animation-play-state: paused;
  }
  @media only screen and (min-width: 769px) {
    display: flex;
  }
`

const ArrowContainerLeft = styled(ArrowContainer)`
  animation: ${moveLeft} 1s linear infinite;
`

const ArrowContainerRight = styled(ArrowContainer)`
  animation: ${moveRight} 1s linear infinite;
`

const Service = styled.div`
  position: relative;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  &:hover .text {
    transform: rotate(-360deg);
  }
  &:hover .front {
    transform: rotate(360deg) translateY(-7px);
    transition-delay: .3s;
  }
`
const ServiceText = styled.div`
  position: relative;
  width: 245px;
  height: 245px;
  border-radius: 50%;
`

const ServiceFront = styled.div`
  position: absolute;
  height: 175px;
  width: 175px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 4px solid #009999;
  transition: all .4s;
  /* transition-timing-function: cubic-bezier(.175, .885, .32, 1.275); */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

const ServiceBack = styled.div`
  position: absolute;
  height: calc(100% + 4px);
  width: calc(100% + 4px);
  background-color: #009999;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  padding: 22px;
  transition: all .4s;
  /* transition-timing-function: cubic-bezier(.175, .885, .32, 1.275); */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transform-style: preserve-3d;
  perspective: 1000px;
  &:hover {
    cursor: pointer
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all .4s;
`

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
`

const ServiceName = styled.div`
  padding-top: 25px;
  font-size: 1em;
  text-align: center;
`

const LinkStyled = styled.a`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`

export default class OfferIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.servicesRef = React.createRef();
    this.state = {
      positionX: 0,
      currentOffer: ''
    }
  }
  previous = () => {
    if(this.state.positionX == 0) {
      this.setState(prevState => ({
        positionX: parseFloat((prevState.positionX - 166.5).toFixed(1))
      }))
    } else {
      this.setState(prevState => ({
        positionX: parseFloat((prevState.positionX + 33.3).toFixed(1))
      }))
    }
  }
  next = () => {
    if(this.state.positionX == -166.5) {
      this.setState(prevState => ({
        positionX: parseFloat((prevState.positionX + 166.5).toFixed(1))
      }))
    } else {
      this.setState(prevState => ({
        positionX: parseFloat((prevState.positionX - 33.3).toFixed(1))
      }))
    }
  }
  openOffer = (offer) => {
    this.setState({
      currentOffer: offer
    })
    if(typeof window !== 'undefined' && window.innerWidth < 1087) {
      console.log(this.servicesRef.current.clientHeight)
      const heightToScroll = this.servicesRef.current.clientHeight;
      window.scrollTo({
        top: heightToScroll + 200,
        behavior: 'smooth'
      })
    }
  }
  render() {
    return (
      <Layout>
        {
          this.state.currentOffer === '' &&
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
              <h2 className="has-text-weight-bold is-size-1">
                Nasze usługi
              </h2>
            </div>
          </div>
        }
        <section className="section" style={{padding: 0, height: '100%'}}>
          <div className="container" style={{margin: 0, width: '100vw', maxWidth: '100%'}}>
            <div className="content">
              <div className="columns" style={{margin: 0}}>
                <div className="column is-1" style={{backgroundColor: 'white', zIndex: 101}}>
                  <ArrowContainerLeft onClick={this.previous}>
                    <FaChevronLeft size="4em" alt="Left" style={{position: 'relative', left: 15}} color="#ED1B68" />
                  </ArrowContainerLeft>
                </div>
                <div className="column is-10" style={{zIndex: 100, backgroundColor: 'white'}}>
                  <div ref={this.servicesRef} className="columns is-tablet is-12" style={{padding: '0px 20px', transition: 'transform .5s ease-in-out', transform: `translateX(calc(${this.state.positionX}% - ${40 * (this.state.positionX % 3)}px))`}}>
                    <div className="column is-4">
                      <ServiceWrapper onClick={() => this.openOffer('clipping')}>
                        <Service>
                          <ServiceText>
                            <Img className="text" src={ClippingText} alt="Clipping" />
                          </ServiceText>
                          <ServiceFront className="front">
                            <Img src={Clipping} alt="Clipping" style={{top: -6, left: -6}}/>
                          </ServiceFront>
                          <ServiceBack className="front">
                          <FaInfo size="2em" style={{margin: 15}} />
                          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Kliknij aby dowiedzieć <br/> się więcej!</div>                          </ServiceBack>
                        </Service>
                      </ServiceWrapper>
                    </div>
                    <div className="column is-4">
                      <ServiceWrapper onClick={() => this.openOffer('dripping')}>
                        <Service>
                          <ServiceText>
                            <Img className="text" src={DrippingText} alt="Dripping" />
                          </ServiceText>
                          <ServiceFront className="front">
                            <Img src={Dripping} alt="Dripping" style={{top: -6, left: 0}}/>
                          </ServiceFront>
                          <ServiceBack className="front" style={{display: 'flex', flexDirection: 'column'}}>
                            <FaInfo size="2em" style={{margin: 15}} />
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Kliknij aby dowiedzieć <br/> się więcej!</div>
                          </ServiceBack>
                        </Service>
                      </ServiceWrapper>
                    </div>
                    <div className="column is-4">
                      <ServiceWrapper onClick={() => this.openOffer('combing')}>
                        <Service>
                          <ServiceText>
                            <Img className="text" src={CombingText} alt="Combing" />
                          </ServiceText>
                          <ServiceFront className="front">
                            <Img src={Combing} alt="Combing" style={{top: -3, left: -3}}/>
                          </ServiceFront>
                          <ServiceBack className="front">
                            <FaInfo size="2em" style={{margin: 15}} />
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Kliknij aby dowiedzieć <br/> się więcej!</div>
                          </ServiceBack>
                        </Service>
                      </ServiceWrapper>
                    </div>
                    <div className="column is-4">
                      <ServiceWrapper onClick={() => this.openOffer('trimming')}>
                        <Service>
                          <ServiceText>
                            <Img className="text" src={TrimmingText} alt="Trimming" />
                          </ServiceText>
                          <ServiceFront className="front">
                            <Img src={Trimming} alt="Trimming" style={{top: -2, left: -6}}/>
                          </ServiceFront>
                          <ServiceBack className="front">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius condimentum nisl, a tristique magna placerat sed
                          </ServiceBack>
                        </Service>
                      </ServiceWrapper>
                    </div>
                    <div className="column is-4">
                      <ServiceWrapper onClick={() => this.openOffer('exhibitions')}>
                        <Service>
                          <ServiceText>
                            <Img className="text" src={ExhibitionsText} alt="Exhibitions" />
                          </ServiceText>
                          <ServiceFront className="front">
                            <Img src={Exhibitions} alt="Exhibitions" style={{top: -8, left: 0}}/>
                          </ServiceFront>
                          <ServiceBack className="front">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius condimentum nisl, a tristique magna placerat sed
                          </ServiceBack>
                        </Service>
                      </ServiceWrapper>
                    </div>
                    <div className="column is-4">
                      <ServiceWrapper onClick={() => this.openOffer('coloring')}>
                        <Service>
                          <ServiceText>
                            <Img className="text" src={ColoringText} alt="Coloring" />
                          </ServiceText>
                          <ServiceFront className="front">
                            <Img src={Coloring} alt="Coloring" style={{top: -6, left: -6}}/>
                          </ServiceFront>
                          <ServiceBack className="front">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius condimentum nisl, a tristique magna placerat sed
                          </ServiceBack>
                        </Service>
                      </ServiceWrapper>
                    </div>
                    <div className="column is-4">
                      <ServiceWrapper onClick={() => this.openOffer('emmi')}>
                        <Service>
                          <ServiceText>
                            <Img className="text" src={EmmiText} alt="Emmi-Pet" />
                          </ServiceText>
                          <ServiceFront className="front">
                            <Img src={Emmi} alt="Emmi-Pet" style={{top: -3, left: -6}}/>
                          </ServiceFront>
                          <ServiceBack className="front">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius condimentum nisl, a tristique magna placerat sed
                          </ServiceBack>
                        </Service>
                      </ServiceWrapper>
                    </div>
                    <div className="column is-4">
                      <ServiceWrapper onClick={() => this.openOffer('courses')}>
                        <Service>
                          <ServiceText>
                            <Img className="text" src={CoursesText} alt="Courses" />
                          </ServiceText>
                          <ServiceFront className="front">
                            <Img src={Courses} alt="Courses" style={{top: -3, left: -3}}/>
                          </ServiceFront>
                          <ServiceBack className="front">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius condimentum nisl, a tristique magna placerat sed
                          </ServiceBack>
                        </Service>
                      </ServiceWrapper>
                    </div>
                  </div>
                </div>
                <div className="column is-1" style={{backgroundColor: 'white', zIndex: 101}}>
                  <ArrowContainerRight onClick={this.next} style={{right: 0}}>
                    <FaChevronRight size="4em" alt="Right" color="#ED1B68" style={{position: 'relative', left: -15}} />
                  </ArrowContainerRight>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content" style={{padding: '30px 10%'}}>
            {
              this.state.currentOffer === 'dripping' &&
                <div>
                  <h3 className="is-2">Kąpiel</h3>
                  <p>
                    <br/>
                    Kąpiel to podstawowa usługa jaką można wykonać w naszym Salonie.
                    W zależności od struktury włosa, jego kondycji oraz oczekiwanego efektu dobieramy rodzaj
                    kosmetyków, jakie zastosujemy do pielęgnacji Twojego pupila.<br/>
                    Pracujemy na kosmetykach renomowanych firm przeznaczonych dla psów:<br/>
                    m.in. K9, Botaniqa, Diamex, PSH, Double K.<br/>
                    <br/>
                    Wyróżniamy m.in. kąpiele nawilżające, odżywcze, nabłyszczające, lecznicze, pomagające pozbyć się podszerstka.<br/>
                    <br/>
                    Usługa kąpieli psa zawiera:<br/>
                    • ocenę struktury i stanu szaty oraz skóry<br/>
                    • dobranie odpowiednich kosmetyków w celu uzyskania oczekiwanego efektu<br/>
                    • kąpiel psa w szamponie dogłąbnie myjącym, by pozbyć się brudu z sierści<br/>
                    • kąpiel funkcyjnia z zastosowaniem kosmetyku pielęgnacyjnego<br/>
                    • wysuszenie z modelowaniem szaty<br/>
                    • czyszczenie uszu oraz oczu jeżeli jest to konieczne<br/>
                    • przycięcie pazurów<br/>
                    <br/>
                    Usługa samej kąpieli jest możliwa tylko w przypadku ras nieliniejących oraz psów nieskołtunionych<br/>
                  </p>
                  <br/>
                  <br/>
                  <h3 className="is-2">Kąpiel z kosmetyką</h3><br/>
                  <p>
                    Kąpiel z kosmetyką to propozycja skierowana do właścicieli ras nieliniejących, piesków z szatą długą<br/>
                    (typu maltańczyk, york, bichon, itp.).<br/>
                    <br/>
                    Jest to rozszerzona usługa kąpieli. Zawiera dodatkowo:<br/>
                    • podcięcie okolic oczu, odbytu oraz miejsc intymnych<br/>
                    • wycięcie włosów między poduszkami<br/>
                    • przeczesanie szaty<br/>
                    <br/>
                    Oferta ta skierowana jest do właścicieli, którzy pragną by ich pupil miał zapewniony maksymalny komfort oraz cały czas wyglądał dobrze pomiędzy strzyżeniami.<br/>
                  </p>
                  <div>
                    <br/>
                    <h3 className="is-2">Kąpiele lecznicze</h3>
                    <br/>
                    W ofercie posiadamy kąpiele lecznicze z użyciem innowacyjnego, japońskiego systemu Nagayu.<br/><br/>
                    <h4 className="is-3">Pozbycie się nieprzyjemnego zapachu oraz poprawa kondycji sierści</h4>
                    System Nagayu CO2 działa dużo wydajniej niż standardowa kąpiel środkami do pielęgnacji. Dzięki działaniu
                    jonów wodorowęglanowych oraz jonów wodorowych doskonale radzi sobie ze zmyciem odpadów mineralnych
                    oraz brudu zatkanego w cebulce włosa.<br/>
                    <br/>
                    <h4 className="is-3">Pielęgnacja i wzmocnienie skóry</h4>
                    Kąpiele przy użyciu systemu Nagayu przyspieszają proces gojenia, zwększjąc przepływ krwi, umożliwiając komórkom wchłanianie większej ilości składników odżywczych oraz tlenu w procesie regeneracji komórek. Aby
                    unikąc przesuszenia w wyniku głebokiego czyszczenia skóry, do tabletek Nagayu dodano suplement nawilżający.<br/>
                    <br/>
                    <h4 className="is-3">Jak to działa?</h4>
                    Tabletki Nagayu wydzielają miliony cząsteczek kwasu węglowego oraz jonów wodorowych zmieniając wodę
                    w system SPA z CO2. Cząsteczki dwutlenku węgla przedostają się do naczyń krwionośnych i powodują ich rozszerzenie i zwiększenie przepływu krwi. W ten sposób komórki otrzymują więcej składników odżywczych i tlenu,
                    co przyspiesza metabolizm i przyspiesza proces gojenia.<br/>
                    <br/>
                    By zapoznać się z efektami leczenia sytemem Nagayu zapraszam na stronę producenta:<br/>
                    <br/>
                    <h4 className="is-3"><a href="https://www.nagayu.com/" target="_blank">https://www.nagayu.com/</a></h4>
                    Usługa kąpieli leczniczej z zastosowaniem systemu Nagayu zawiera:<br/>
                    • ocenę stanu skóry oraz sierści<br/>
                    • dobranie odpowiedniej dawki tabletek Nagayu SPA CO2<br/>
                    • kąpiel oczyszczająca w szamponie dogłębnie myjącym<br/>
                    • kąpiel funkcyjna w szamponie leczniczym<br/>
                    • kąpiel z zastosowaniem systemu Nagayu SPA CO2<br/>
                    • suszenie<br/>
                    • czyszczenie oczu oraz uszu jeżeli to konieczne<br/>
                  </div>
                </div>
            }
            {
              this.state.currentOffer === 'clipping' &&
              <div>
                <h3 className="is-2">Strzyżenie</h3>
                <p>
                  <br/>
                  Strzyżenie w naszym salonie obejmuje pakiet kąpieli dobranej do struktury i
                  kondycji włosa oraz przycięcie sierści wedle ustalonych wytycznych.
                  Stale podnosimy standardy usług szkoląc się i śledząc najnowsze trendy na
                  świecie.
                  Nasze prace znajdują uznanie zarówno w kraju jak i za granicą.
                  Zapraszamy do zapoznania się z Galerią oraz Osiągnięciami
                  <br/>
                </p>
              </div>
            }
            {
              this.state.currentOffer === 'combing' &&
                <div>
                  <h3 className="is-2">Wyczesywanie</h3>
                  <p>
                    <br/>
                    Usługa skierowana jest do psów krótkowłosych ras liniejących oaz
                    długowłosych usługa obejmuje kąpiel oraz wyczesywanie sierści.
                    W zależności od potrzeb użyty jest odpowiedni kosmetyk. W przypadku ras
                    krótkowłosych oraz liniejących będą to specjalne kosmetyki pozwalające na
                    wyczesanie maksymalnej ilości sierści, co ułatwi właścicielowi pielęgnacje psa
                    w domu i odciąży go przez jakiś czas w sprzątaniu włosów.
                    W przypadku skołtunień ras długowłosych stosujemy odpowiednie odżywki
                    podczas kąpieli oraz podczas suszenia by zabezpieczyć włosy przed
                    zniszczeniem w trakcie zabiegu.
                    <br/>
                  </p>
                </div>
            }
            {
              this.state.currentOffer === 'coloring' &&
                <div>
                  <h3 className="is-2">Farbowanie i creative</h3>
                  <p>
                    <br/>
                    Znudziło Ci się klasyczne strzyżenie pieska?
                    Chcesz by jego charakter podkreśliła nieszablonowa fryzura?
                    Dobrze trafiłeś! Jesteśmy jednym z niewielu salonów w Polsce, które oferują
                    usługi farbowania oraz kreatywnego strzyżenia.
                    W salonie używamy specjalistycznych środków koloryzujących,
                    przeznaczonych specjalnie dla zwierząt. Są to farby koreańskie oraz
                    amerykańskie z różnym stopniem trwałości - w zależności od potrzeb
                    właściciela, efekt utrzymuje się od kilku dni do kilku miesięcy.
                    Strzyżenie kreatywne polega na dobraniu do psa nieszablonowej fryzury, o
                    niestandardowym kształcie (na przykład wycięcie skrzydeł w sierści,
                    asymetrii głowy lub brokatowego tatuażu na tułowiu)
                    <br/>
                  </p>
                </div>
            }
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
