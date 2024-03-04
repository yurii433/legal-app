import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const whatsAppImg = (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#25d366" height="512" rx="15%" width="512" />
    <path
      d="m123 393 14-65a138 138 0 1 1 50 47z"
      fill="#25d366"
      stroke="#fff"
      strokeWidth="26"
    />
    <path
      d="m308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
      fill="#fff"
    />
  </svg>
);

const telegramImg = (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#37aee2" height="512" rx="15%" width="512" />
    <path d="m199 404c-11 0-10-4-13-14l-32-105 245-144" fill="#c8daea" />
    <path d="m199 404c7 0 11-4 16-8l45-43-56-34" fill="#a9c9dd" />
    <path
      d="m204 319 135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25l-321 124c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
      fill="#f6fbfe"
    />
  </svg>
);

const FooterSection = styled.footer`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 30px 0;
  min-heigh: 550px;
  background: #232323;
  color: white;

  .footer-container {
    padding: 0 15px;
    max-heigth: 100%;
  }
  .footer-top {
    padding: 15px;
  }

  .footer-branding {
    border-bottom: 1px solid black;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
  }

  .site-logo {
    height: 50px;
    width: 50px;
    filter: brightness(0) invert(1);
  }

  .site-info {
    list-style-type: none;
  }

  .site-branding {
    display: flex;
    gap: 30px;
  }

  .site-name {
    font-family: var(--font-primary);
    font-size: var(--text-size-l);
    color: white;
    font-weight: 800;
  }

  .site-description {
    color: var(--text-color-white);
    font-size: var(--text-size-s);
  }

  .footer-contacts {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: var(--text-size-m);
    svg {
      height: 20px;
      width: 20px;
      margin: 0;
      padding: 0;
    }

    .links-wrap {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .contacts-messenger-wrap {
      display: flex;
      gap: 5px;
      align-items: center;
      width: fit-content;
    }

    h4 {
      font-size: var(--text-size-l);
      font-family: var(--font-primary);
    }
    a {
      color: white;
    }
  }

  .footer-bottom {
    iframe {
      max-width: 100%;
      max-height: 100%;
    }
  }

  @media screen and (min-width: 576px) {
    padding: 30px 0px;
    .footer-contacts {
      h4 {
        font-size: 24px;
      }
      p,
      a {
        font-size: 16px;
      }
    }
    .clients-header {
      font-size: var(--text-size-2xl);
    }
    .el-num,
    .el-subheader {
      font-size: 24px;
    }
    .el-p {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 776px) {
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
  @media screen and (min-width: 996px) {
    min-height: calc(100vh - 130px);
    justify-content: space-between;

    .footer-container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media screen and (min-width: 1400px) {
    .footer-container {
      max-width: 1350px;
    }
  }
  @media screen and (min-width: 1800px) {
    min-height: 0;
    max-height: 1100px;
  }
`;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <FooterSection id="footer-sec">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-branding">
            <a href="#" className="site-branding" rel="home">
              <img src="./images/logo-1.png" className="site-logo" />
              <ul className="site-info">
                <li className="site-name">{t("appTitle")}</li>
                <li className="site-description">{t("appDescription")}</li>
              </ul>
            </a>
          </div>
          <div className="footer-contacts">
            <h4>{t("footer-our-contacts")}</h4>
            <div className="links-wrap">
              <a
                href="https://wa.me/41766037164"
                target="_blank"
                className="contacts-messenger-wrap"
              >
                {whatsAppImg} <p>WhatsApp: +41 76 603 71 64</p>
              </a>
              <a
                href="https://t.me/finvelsta"
                target="_blank"
                className="contacts-messenger-wrap"
              >
                {telegramImg} <p>Telegram: +41 77 537 23 42</p>
              </a>
            </div>

            <a href="mailto: legaldepartment@fin-velsta.com">
              legaldepartment@fin-velsta.com
            </a>
            <p>
              {t("footer-regNumber")} <br />
              CHE-411.167.066
            </p>
            <p>
              {t("footer-regDate")} <br />
              09.29.2014
            </p>
            <p>
              {t("footer-regAddress")} <br />
              c/o TMed SA Rue Dr-Alfred-Vincent 5 1201 Genève, Switzerland
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.047710658685!2d6.146875376042001!3d46.209505883403665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c65244b1c2109%3A0xa784337e1b529941!2zUnVlIERvY3RldXItQWxmcmVkLVZpbmNlbnQgNSwgMTIwMSBHZW7DqHZlLCDQqNCy0LXQudGG0LDRgNGW0Y8!5e0!3m2!1suk!2sde!4v1699983835144!5m2!1suk!2sde"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </FooterSection>
  );
}
