import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const whatsAppImg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2489"
    height="2500"
    viewBox="0 0 737.509 740.824"
    fill="white"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M630.056 107.658C560.727 38.271 468.525.039 370.294 0 167.891 0 3.16 164.668 3.079 367.072c-.027 64.699 16.883 127.855 49.016 183.523L0 740.824l194.666-51.047c53.634 29.244 114.022 44.656 175.481 44.682h.151c202.382 0 367.128-164.689 367.21-367.094.039-98.088-38.121-190.32-107.452-259.707m-259.758 564.8h-.125c-54.766-.021-108.483-14.729-155.343-42.529l-11.146-6.613-115.516 30.293 30.834-112.592-7.258-11.543c-30.552-48.58-46.689-104.729-46.665-162.379C65.146 198.865 202.065 62 370.419 62c81.521.031 158.154 31.81 215.779 89.482s89.342 134.332 89.311 215.859c-.07 168.242-136.987 305.117-305.211 305.117m167.415-228.514c-9.176-4.591-54.286-26.782-62.697-29.843-8.41-3.061-14.526-4.591-20.644 4.592-6.116 9.182-23.7 29.843-29.054 35.964-5.351 6.122-10.703 6.888-19.879 2.296-9.175-4.591-38.739-14.276-73.786-45.526-27.275-24.32-45.691-54.36-51.043-63.542-5.352-9.183-.569-14.148 4.024-18.72 4.127-4.11 9.175-10.713 13.763-16.07 4.587-5.356 6.116-9.182 9.174-15.303 3.059-6.122 1.53-11.479-.764-16.07-2.294-4.591-20.643-49.739-28.29-68.104-7.447-17.886-15.012-15.466-20.644-15.746-5.346-.266-11.469-.323-17.585-.323-6.117 0-16.057 2.296-24.468 11.478-8.41 9.183-32.112 31.374-32.112 76.521s32.877 88.763 37.465 94.885c4.587 6.122 64.699 98.771 156.741 138.502 21.891 9.45 38.982 15.093 52.307 19.323 21.981 6.979 41.983 5.994 57.793 3.633 17.628-2.633 54.285-22.19 61.932-43.616 7.646-21.426 7.646-39.791 5.352-43.617-2.293-3.826-8.41-6.122-17.585-10.714"
    />
  </svg>
);

const telegramImg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 50 50"
    fill="white"
  >
    <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
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
  color: #818287;
  font-family: var(--font-primary);

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
    color: #818287;
    font-weight: 800;
  }

  .site-description {
    color: #818287;
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
      color: #818287;
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
              <ul className="site-info">
                <li className="site-name">{t("appTitle")}</li>
                <li className="site-description">{t("appDescription")}</li>
              </ul>
            </a>
          </div>
          <div className="footer-contacts">
            <h4>{t("footer-our-contacts")}</h4>
            <div className="links-wrap">
              <p style={{ paddingBottom: "10px" }}>
                {t("footer-regAddress")} <br />
                25 Massachusetts Ave NW, Washington, DC 20001
              </p>
              <a
                href="https://wa.me/11111111111"
                target="_blank"
                className="contacts-messenger-wrap"
              >
                {whatsAppImg} <p>WhatsApp: +11 11 111 11 11</p>
              </a>
              <a
                href="https://t.me/11111111111"
                target="_blank"
                className="contacts-messenger-wrap"
              >
                {telegramImg} <p>Telegram: +11 11 111 11 11</p>
              </a>
            </div>

            <a href="mailto: contact@apexlaw.com">contact@apexlaw.com</a>
            <p>
              {t("footer-regNumber")} <br />
              AAA-111.111.111
            </p>
            <p>
              {t("footer-regDate")} <br />
              01.01.2001
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1139665886403!2d-77.01534581353306!3d38.89850907374392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b78a008349e3%3A0x4ff4ce0eca493349!2sGoogle%20DC%2C%2025%20Massachusetts%20Ave%20NW%2C%20Washington%2C%20DC%2020001!5e0!3m2!1suk!2sus!4v1709571827592!5m2!1suk!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </FooterSection>
  );
}
