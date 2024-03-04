import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";

const HeaderSection = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--text-color-black);
  height: 80px;
  padding: 2.5em 2em;

  a {
    text-decoration: none;
  }

  .site-logo {
    height: 50px;
    width: 50px;
  }

  .site-info {
    list-style-type: none;
  }

  .site-branding {
    display: flex;
    gap: 15px;
  }

  .site-name {
    font-family: var(--font-primary);
    font-size: var(--text-size-l);
    color: var(--text-color-navy);
    font-weight: 800;
  }

  .site-description {
    color: var(--text-color-black);
    font-size: var(--text-size-s);
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  @media screen and (min-width: 776px) {
    height: 130px;
    .site-branding {
      gap: 25px;
    }

    .site-logo {
      height: 100px;
      width: 100px;
    }

    .site-name {
      font-size: 44px;
    }

    .site-description {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1300px) {
    .header-container {
      max-width: 1300px;
    }
  }
`;

export default function Header({ changeLanguage }) {
  const { t } = useTranslation();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderSection
      style={{
        background: isSticky
          ? "white"
          : `url("./images/background-1.png") no-repeat center top / cover`,
      }}
      className="main-header"
    >
      <div className="header-container">
        <div>
          <a href="#" className="site-branding" rel="home">
            <img src="./images/logo-1.png" className="site-logo" />
            <ul className="site-info">
              <li className="site-name">{t("appTitle")}</li>
              <li className="site-description">{t("appDescription")}</li>
            </ul>
          </a>
        </div>
        <NavBar changeLanguage={changeLanguage} />
      </div>
    </HeaderSection>
  );
}
