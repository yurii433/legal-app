import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const PromoSection = styled.section`
  display: flex;
  flex-direction: row;
  background: #2b3d59;
  color: white;
  gap: 1.5rem;

  ul {
    list-style: inside circle;
  }
  img {
    max-width: 50%;
  }
`;

const PromoImage = styled.div`
  display: none;
  background: url("/images/background-2.png") center;
  width: 50%;
  background-size: cover;
  @media screen and (min-width: 990px) {
    display: block;
  }
`;

const PromoText = styled.div`
  padding: 45px 30px;
  font-size: var(--text-size-m);
  line-height: 1.5;
  text-align: justify;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    font-family: var(--font-primary);
    font-size: var(--text-size-xl);
    line-height: 1;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media screen and (min-width: 990px) {
    padding: 90px 30px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p,
    ul {
      max-width: 510px;
    }
  }
  @media screen and (min-width: 1400px) {
    max-height: 900px;
  }
`;

const Promoinfo = () => {
  const { t } = useTranslation();

  return (
    <PromoSection>
      <PromoImage />

      <PromoText>
        <h2>
          {t("promo-header-1")} <br />
          {t("promo-header-2")}
          <br />
          {t("promo-header-3")}
        </h2>
        <p>{t("promo-p-1")}</p>
        <ul>
          <li>{t("promo-li-1")}</li>
          <li>{t("promo-li-2")}</li>
          <li>{t("promo-li-3")}</li>
          <li>{t("promo-li-4")}</li>
        </ul>
        <p>{t("promo-p-2")}</p>
        <p>{t("promo-p-3")}</p>
      </PromoText>
    </PromoSection>
  );
};

export default Promoinfo;
