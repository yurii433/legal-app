import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const AdvantagesSection = styled.section`
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  background: url("/images/background-body.jpg");

  .section-container {
    align-self: center;
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 576px) {
    padding: 90px 15px;
  }

  @media screen and (min-width: 990px) {
    padding: 90px 0;
    .section-container {
      flex-direction: row;
      justify-content: center;
      max-width: 1300px;
    }
  }
`;

const Advantage = styled.div`
  padding: 15px;
  display: flex;
  gap: 2rem;
  color: rgb(81, 81, 81);

  img {
    width: 80px;
    height: 80px;
  }
  div > h3 {
    font-family: var(--font-primary);
    margin-bottom: 1rem;
    font-size: 18px;
  }
  div > p {
    font-size: 14px;
  }

  @media screen and (min-width: 576px) {
    div > h3 {
      font-size: 24px;
    }
    div > p {
      font-size: 16px;
    }
  }
`;

const Advantages = () => {
  const { t } = useTranslation();

  return (
    <AdvantagesSection id="advantages">
      <div className="section-container">
        <Advantage>
          <img src="/images/icon-partners.png" alt="" />
          <div className="advantage-text">
            <h3>{t("advantages-header-1")}</h3>
            <p>{t("advantages-text-1")}</p>
          </div>
        </Advantage>
        <Advantage>
          <img
            className="advantage-img"
            src="/images/icon-agreement.png"
            alt=""
          />
          <div className="advantage-text">
            <h3>{t("advantages-header-2")}</h3>
            <p>{t("advantages-text-2")}</p>
          </div>
        </Advantage>
        <Advantage>
          <img className="advantage-img" src="/images/icon-avatar.png" alt="" />
          <div className="advantage-text">
            <h3>{t("advantages-header-3")}</h3>
            <p>{t("advantages-text-3")}</p>
          </div>
        </Advantage>
      </div>
    </AdvantagesSection>
  );
};

export default Advantages;
