import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Menu = styled.div``;
const LangSelector = styled.div`
  button {
    font-family: var(--font-primary);
    background: white;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 3px;
    cursor: pointer;
  }
  button:hover {
    background: var(--text-color-navy);
    color: white;
    border: 1px solid var(--text-color-navy);
  }
`;

let offSet = -80;
let offSet2 = -180;
window.addEventListener("resize", calcOffset);

function calcOffset() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    offSet = -130;
  } else {
    offSet = -80;
  }
}

export default function NavBar({ changeLanguage }) {
  const { t } = useTranslation();

  return (
    <Menu>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li className="menu-item ">
          <Link
            className="menu-link"
            to="hero"
            spy={true}
            smooth={true}
            offset={offSet2}
            duration={500}
          >
            {t("navAbout")}
          </Link>
        </li>
        <li className="menu-item">
          <Link
            className="menu-link"
            to="advantages"
            spy={true}
            smooth={true}
            offset={offSet}
            duration={500}
          >
            {t("navAdvantages")}
          </Link>
        </li>

        <li className="menu-item ">
          <Link
            className="menu-link"
            to="reviews"
            spy={true}
            smooth={true}
            offset={offSet}
            duration={500}
          >
            {t("navReviews")}
          </Link>
        </li>
        <li className="menu-item ">
          <Link
            className="menu-link"
            to="partners"
            spy={true}
            smooth={true}
            offset={offSet}
            duration={500}
          >
            {t("navPartners")}
          </Link>
        </li>
        <li className="menu-item">
          <Link
            className="menu-link"
            to="footer-sec"
            spy={true}
            smooth={true}
            offset={130}
            duration={500}
          >
            {t("navContacts")}
          </Link>
        </li>
        <li>
          <LangSelector
            className="language-buttons"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <button onClick={(e) => changeLanguage(e.target.value)} value="en">
              ENG
            </button>
            <button
              onClick={(e) => changeLanguage(e.target.value)}
              value="ru"
              defaultValue
            >
              RUS
            </button>
            <button onClick={(e) => changeLanguage(e.target.value)} value="pl">
              POL
            </button>
          </LangSelector>
        </li>
      </ul>
    </Menu>
  );
}

/* ALTERNATIVE FOR LANGUAGE SELECTOR */
{
  /* <SelectLanguage
className="language-dropdown"
onChange={(e) => changeLanguage(e.target.value)}
>
<Option value="en">ENG</Option>
<Option value="ru" defaultValue>
  RUS
</Option>
<Option value="pl">POL</Option>
</SelectLanguage> */
}

/* const SelectLanguage = styled.select`
  display: inline-block;
  padding: 7px 10px;
  width: 50px;
  height: fit-content;
  appearance: none;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background: transparent;
  color: white;
`;

const Option = styled.option`
  background-color: #f0f0f0;
  color: #333;
  font-size: 16px;
`; */
