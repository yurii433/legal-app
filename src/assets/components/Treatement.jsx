import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const TreatementSection = styled.section`
  background: url("/images/background-body.jpg");
  display: flex;
  flex-direction: column;
  padding: 30px 15px;
  justify-content: center;
  align-items: center;
  color: #515151;

  .treatement-container {
    display: flex;
    flex-direction: column;
  }

  .section-header {
    font-family: var(--font-primary);
    font-size: var(--text-size-xl);
    padding: 15px;
    text-align: center;
  }

  .el-num,
  .el-subheader {
    font-size: 18px;
  }

  .el-num {
    margin-right: 30px;
    align-self: center;
    font-weight: 600;
  }

  .el-subheader {
    font-family: var(--font-primary);
    margin-bottom: 15px;
    font-weight: 700;
  }

  .el-p {
    font-size: 14px;
  }

  .treatement-el {
    display: flex;
    padding: 30px;
    border-bottom: 1px solid #515151;
  }
  .treatement-el:nth-child(6) {
    border-bottom: none;
  }

  @media screen and (min-width: 576px) {
    padding: 90px 15px;
    .section-header {
      font-size: var(--text-size-2xl);
      margin-bottom: 2rem;
    }
    .el-num,
    .el-subheader {
      font-size: 24px;
    }
    .el-p {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 996px) {
    .treatement-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    .treatement-el {
      max-width: 430px;
    }

    .treatement-el:nth-child(4),
    :nth-child(5),
    :nth-child(6) {
      border-bottom: none;
    }
    .treatement-el:nth-child(1) {
      border-right: 1px solid #515151;
    }
    .treatement-el:nth-child(2) {
      border-right: 1px solid #515151;
    }
    .treatement-el:nth-child(4) {
      border-right: 1px solid #515151;
    }
    .treatement-el:nth-child(5) {
      border-right: 1px solid #515151;
    }
  }
  @media screen and (min-width: 1400px) {
    max-height: 900px;
  }
`;

export default function Treatement() {
  const { t } = useTranslation();

  return (
    <TreatementSection>
      <h2 className="section-header">{t("treatement-header")}</h2>
      <div className="treatement-container">
        <div className="treatement-el">
          <div className="el-num">01</div>
          <div className="el-text-wrap">
            <div className="el-subheader"> {t("treatement-subHeader-1")} </div>
            <div className="el-p">{t("treatement-case-1")}</div>
          </div>
        </div>

        <div className="treatement-el">
          <div className="el-num">02</div>
          <div className="el-text-wrap">
            <div className="el-subheader"> {t("treatement-subHeader-2")} </div>
            <div className="el-p">{t("treatement-case-2")}</div>
          </div>
        </div>

        <div className="treatement-el">
          <div className="el-num">03</div>
          <div className="el-text-wrap">
            <div className="el-subheader"> {t("treatement-subHeader-3")} </div>
            <div className="el-p">{t("treatement-case-3")}</div>
          </div>
        </div>

        <div className="treatement-el">
          <div className="el-num">04</div>
          <div className="el-text-wrap">
            <div className="el-subheader"> {t("treatement-subHeader-4")} </div>
            <div className="el-p">{t("treatement-case-4")}</div>
          </div>
        </div>

        <div className="treatement-el">
          <div className="el-num">05</div>
          <div className="el-text-wrap">
            <div className="el-subheader"> {t("treatement-subHeader-5")} </div>
            <div className="el-p">{t("treatement-case-5")}</div>
          </div>
        </div>

        <div className="treatement-el">
          <div className="el-num">06</div>
          <div className="el-text-wrap">
            <div className="el-subheader"> {t("treatement-subHeader-6")} </div>
            <div className="el-p">{t("treatement-case-6")}</div>
          </div>
        </div>
      </div>
    </TreatementSection>
  );
}
