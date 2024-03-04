import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

window.addEventListener("resize", calcOffset);

let offSet = -80;
function calcOffset() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    offSet = -130;
  } else {
    offSet = -80;
  }
}

const HeroSection = styled.section`
  color: var(--text-color-black);
  background: url("./images/background-1.png") no-repeat center center / cover;
  background-position: 0 0px;
  padding: 3rem 15px 3rem 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  min-height: 660px;

  ul {
    list-style-type: circle;
    font-size: var(--text-size-m);
    margin-bottom: 1.5rem;
    padding: 0 15px;
  }
  ul li {
    padding: 4px 20px;
  }

  @media screen and (min-width: 990px) {
    height: calc(100vh-130px);
    padding: 0rem 15px 0rem 15px;
    height: calc(100vh-130px);
    .hero-container {
      display: flex;
      gap: 50px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      max-width: 1300px;
      align-self: center;
    }
  }
  @media screen and (min-width: 1400px) {
    max-height: 900px;
  }
`;

const HeroTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex-basis: 45%;
  padding: var(--element-padding);

  h1 {
    font-size: var(--text-size-xl);
    font-family: var(--font-primary);
    margin: var(--element-margin);
    line-height: 28px;
  }

  a {
    position: relative;
    display: inline-block;
    padding: 20px 60px;
    border: 2px solid var(--text-color-navy);
    color: black;
    width: fit-content;
    align-self: center;
    overflow: hidden;
    transition: padding 0.3s ease-in-out, border-width 0.3s ease-in-out;
  }

  a::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateX(50%);
    left: 0;
    width: 30px;
    height: 1px;
    background-color: #5a5a5a;
    transition: width 0.3s ease-in-out;
  }

  a:hover {
    padding: 20px 80px;
  }

  a:hover::before {
    width: 40px;
  }

  @media screen and (min-width: 576px) {
    h1 {
      font-size: var(--text-size-2xl);
      line-height: 36px;
    }
    li {
      font-size: var(--text-size-l);
    }
  }
`;

const HeroBottom = styled.div`
  flex-basis: 35%;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 30px 25px 40px 25px;
  margin: 0 30px;
  text-align: left;

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 1rem 0 0 0;

    :nth-child(1),
    :nth-child(2) {
      padding: 1em 1.5em;
      border: 1px solid lightgray;
    }
    label {
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 1em;
      border: 1px solid lightgray;
      padding: 1rem;
    }
    button {
      padding: 1rem 2rem;
      width: fit-content;
      align-self: center;
      color: var(--text-color-black);
      border: 2px solid #5a5a5a;
      font-weight: 600;
    }
    h6 {
      font-size: 14px;
      font-weight: 500;
      align-self: center;
      border: 2.5px solid #46b450;
      padding: 2px 10px;
      color: #5a5a5a;
    }
  }
  @media screen and (min-width: 576px) {
    form > h6 {
      font-size: 16px;
    }
  }
`;

const HeroBottomText = styled.div`
  h4 {
    font-family: var(--font-primary);
    font-size: var(--text-size-xl);
    font-weight: 800;
    margin-bottom: 1em;
  }
  p {
    font-size: var(--text-size-m);
    color: var(--text-color-gray);
  }
  @media screen and (min-width: 576px) {
    h4 {
      font-size: 24px;
      line-height: 36px;
    }
    p {
      font-size: 16px;
    }
    input {
      font-size: 26px;
    }
  }
`;

const Hero = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    privacy: false,
  });

  const { t } = useTranslation();

  const [formIsSend, setFormIsSend] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[\d()+ -]+$/;
    return phoneRegex.test(number);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const formElement = event.target;
    if (!formElement.checkValidity()) {
      console.log("Please fill in all fields correctly");
      return;
    }

    if (!validatePhoneNumber(formData.phone)) {
      console.log("Please enter a valid phone number");
      return;
    }

    if (!validateName(formData.firstname)) {
      console.log("Please enter only alphabetic symbols for the name");
      return;
    }

    console.log("Form submitted successfully");
    setFormIsSend(true);
  };

  return (
    <HeroSection id="hero">
      <div className="hero-container">
        <HeroTop>
          <h1>
            {t("heroHeader-1")}
            <br />
            {t("heroHeader-2")}
            <br />
            {t("heroHeader-3")}
            <br />
            {t("heroHeader-4")}
          </h1>
          <div>
            <ul>
              <li>{t("heroLi-1")}</li>
              <li>{t("heroLi-2")}</li>
              <li>{t("heroLi-3")}</li>
              <li>{t("heroLi-4")}</li>
              <li>{t("heroLi-5")}</li>
            </ul>
          </div>

          <Link
            className="menu-link"
            to="advantages"
            spy={true}
            smooth={true}
            offset={offSet}
            duration={500}
          >
            {t("hero-advantages")}
          </Link>
        </HeroTop>
        <HeroBottom>
          <HeroBottomText>
            <h4>{t("hero-bottom-header")}</h4>
            <p>{t("hero-bottom-p")}</p>
          </HeroBottomText>
          <form onSubmit={submitForm}>
            <input
              type="text"
              name="firstname"
              placeholder={t("hero-form-name")}
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t("hero-form-phone")}
              pattern="[\d()+ -]+"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {formData.phone !== "" && !validatePhoneNumber(formData.phone) && (
              <ValidationMessage>{t("hero-form-phoneAlert")}</ValidationMessage>
            )}
            {formData.firstname !== "" && !validateName(formData.firstname) && (
              <ValidationMessage>{t("hero-form-nameAlert")}</ValidationMessage>
            )}
            <label>
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
              />{" "}
              {t("hero-form-data")}
            </label>
            <button type="submit">{t("hero-form-button")}</button>
            {formIsSend && <h6>{t("hero-form-notification")}</h6>}
          </form>
        </HeroBottom>
      </div>
    </HeroSection>
  );
};

const ValidationMessage = styled.div`
  font-size: 14px;
  color: red;
  margin-top: 5px;
`;

export default Hero;
