import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Advantages from "./assets/components/Advantages";
import Promoinfo from "./assets/components/Promoinfo";
import Treatement from "./assets/components/Treatement";
import Clients from "./assets/components/Clients";
import Partners from "./assets/components/Partners";
import Footer from "./assets/components/Footer";

function App() {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <>
        <Header changeLanguage={changeLanguage} />
        <main>
          <Hero />
          <Advantages />
          <Promoinfo />
          <Treatement />
          <Clients />
          <Partners />
        </main>
        <Footer />
      </>
    </I18nextProvider>
  );
}

export default App;
