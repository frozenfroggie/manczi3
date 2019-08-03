import React from 'react'
import Layout from '../../../components/Layout'
import OfferWallpaper from '../../../img/offerWallpaper.jpg'

const GalleryFolder = props => {
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
            Nasze usługi - kąpiel
          </h2>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="content" style={{padding: '30px 150px'}}>
            <p>
              <h3 className="is-2">Kąpiel</h3>
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
            <p>
              <h3 className="is-2">Kąpiel z kosmetyką</h3><br/>
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
            <p>
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
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default GalleryFolder
