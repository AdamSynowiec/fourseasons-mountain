import React from 'react'
import Hero from '../components/hero/Hero'
import AboutUs from '../components/aboutUs/AboutUs'
import Features from '../components/features/Features'
import Apartaments from '../components/apartaments/Apartaments'
import Comfort from '../components/comfort/Comfort'
import Localization from '../components/localization/Localization'
import Attractions from '../components/attractions/Attractions'
import Gallery from '../components/gallery/Gallery'
import Deweloper from '../components/deweloper/Deweloper'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navBar/NavBar'
import Packages from '../components/packages/Packages'
import Chat from '../components/chat/Chat'
import { Package } from 'lucide-react'
import Cta from '../components/cta/Cta'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
      <Features />
      <Apartaments />
      <Cta />
      <Packages />
      <Comfort data={
        {
          header: "Udogodnienia",
          subHeader: "Four Seasons Mountain Apartments to nie tylko miejsce do spania, to kompletne doświadczenie wypoczynku w górach. W budynku znajdą się:",
          items: [
            {
              id: "1",
              header: "Recepcja",
              span: "Profesjonalna obsługa gości"
            },
            {
              id: "2",
              header: "Strefa relaksu",
              span: "Miejsce do wypoczynku z sauną i jacuzzi"
            },
            {
              id: "3",
              header: "Narciarnia/rowerownia",
              span: "Bezpieczne miejsce do przechowywania sprzętu sportowego"
            },
            {
              id: "4",
              header: "Miejsca parkingowe",
              span: "Dla każdego apartamentu"
            },
            {
              id: "5",
              header: "Ładowarka dla samochodów elektrycznych",
              span: "Myślimy o przyszłości"
            },
            {
              id: "6",
              header: "Apartament dla osób niepełnosprawnych",
              span: "Dbamy o dostępność dla wszystkich"
            },
            {
              id: "7",
              header: "Usługa zarządzania wynajmem",
              span: "Dla właścicieli zainteresowanych czerpaniem przychodu z inwestycji"
            },
          ]
        }
      } />
      <Localization />
      <Attractions />
      <Comfort data={
        {
          header: "Inwestycja",
          subHeader: "APARTAMENTY Z POTENCJAŁEM - Zakup apartamentu w Four Seasons Mountain Apartments to nie tylko miejsce do własnego wypoczynku, ale również mądra inwestycja z potencjałem:",
          items: [
            {
              id: "1",
              header: "Popularność",
              span: "Rosnąca popularność Szczyrku - jako całorocznego kurortu wypoczynkowego"
            },
            {
              id: "2",
              header: "Ograniczona podaż",
              span: "Ograniczona podaż nowych apartamentów - w atrakcyjnych lokalizacjach"
            },
            {
              id: "3",
              header: "Elastyczność",
              span: "Elastyczny model użytkowania - korzystaj sam lub zarabiaj na wynajmie"
            },
            {
              id: "4",
              header: "Zarządzanie",
              span: "Współpracujemy z doświadczoną firmą zarządzającą wynajmem"
            },
            {
              id: "5",
              header: "Preferencyjne warunki",
              span: "Preferencyjne warunki - dla właścicieli apartamentów"
            }
          ]
        }
      } />
      <Gallery />
      <Deweloper />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage