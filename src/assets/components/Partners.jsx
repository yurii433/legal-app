import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import SimpleSlider from "./SimpleSlider";
const PartnersSection = styled.section`
  padding: 30px 15px;
  min-heigh: 350px;
  background: url("/images/background-body.jpg");
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .partners-section-wrap {
    max-width: 100%;
  }

  .partners-el {
    padding: 15px;
  }

  .partners-header {
    font-size: var(--text-size-xl);
    font-family: var(--font-primary);
    margin-bottom: 15px;
  }
  .partners-text {
    font-size: var(--text-size-l);
  }

  @media screen and (min-width: 576px) {
    padding: 90px 0;
    .partners-header {
      font-size: var(--text-size-2xl);
    }
  }

  @media screen and (min-width: 1300px) {
    .partners-section-wrap {
      max-width: 1300px;
    }
  }
`;

export default function Partners() {
  const { t } = useTranslation();

  return (
    <PartnersSection id="partners">
      <div className="partners-section-wrap">
        <div className="partners-el partners-text">
          <h2 className="partners-header">{t("partners-header")}</h2>
          <p>{t("partners-text")}</p>
        </div>
      </div>
      <SimpleSlider />
    </PartnersSection>
  );
}
