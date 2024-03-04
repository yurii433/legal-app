import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSnapCarousel } from "react-snap-carousel";

const ClientsSection = styled.section`
  .reviews-wrap {
    max-width: 100%;
    padding: 15px;
  }

  padding: 30px 15px;
  min-heigh: 350px;
  background: #2b3d59;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  .clients-section-wrap {
    max-width: 100%;
  }

  .section-el {
    max-width: 100%;
  }

  .clients-header {
    font-size: var(--text-size-xl);
    font-family: var(--font-primary);
    margin-bottom: 15px;
  }
  .clients-text {
    padding: 15px;
    font-size: var(--text-size-l);
    h2 {
      line-height: 1;
    }
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .swiper {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-color-navy);
    font-size: 25px;
    font-weight: 600;
    cursor: pointer;
  }

  @media screen and (min-width: 576px) {
    padding: 90px 15px;
    .section-header {
      font-size: var(--text-size-2xl);
      margin-bottom: 2rem;
    }

    .el-p {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 576px) {
    padding: 40px 0 0 0;
    .clients-header {
      font-size: var(--text-size-2xl);
    }
  }

  @media screen and (min-width: 1400px) {
    .clients-section-wrap {
      max-width: 1300px;
    }
  }
`;

const Review = styled.div`
  background: #eeeeee;
  color: #5a5a5a;
  padding: 15px;
  text-align: left;
  margin: 10px;
  border: none;
  border-radius: 5px;

  .review-img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-position: center;
  }

  .review-top {
    display: flex;
    margin-bottom: 30px;
    padding-bottom: 30px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    img {
      margin-right: 15px;
    }
    .client-info {
      text-align: left;
    }
    .client-name {
      font-family: var(--font-primary);
      font-size: 18px;
      font-weight: 700;
    }
    .client-job {
      font-size: 14px;
    }
  }

  .review-bottom > p {
    font-size: 14px;
  }

  @media screen and (min-width: 576px) {
    padding: 45px;

    .review-img {
      width: 120px;
      height: 120px;
    }

    .review-top {
      .client-name {
        font-size: 22px;
      }
      .client-job {
        font-size: 16px;
      }
    }
    .review-bottom > p {
      font-size: 16px;
    }
  }
`;

const LiElement = styled.li``;

const AdvancedCarousel = () => {
  const { t } = useTranslation();
  let [twoReviews, setTwoReviews] = useState(false);

  function calcScreenSize() {
    setTwoReviews(window.matchMedia("(max-width: 800px)").matches);
  }

  useEffect(() => {
    calcScreenSize({ currentTarget: window });

    window.addEventListener("resize", calcScreenSize);

    return () => {
      window.removeEventListener("resize", calcScreenSize);
    };
  }, []);

  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
      <div className="nav">
        <button onClick={() => prev()} className="swiper swiper-prev">
          &#60;
        </button>
        <div>
          {" "}
          {activePageIndex + 1} / {pages.length}
        </div>
        <button onClick={() => next()} className="swiper swiper-next">
          &#62;
        </button>
      </div>

      <ul
        ref={scrollRef}
        style={{
          display: "flex",
          overflow: "hidden",
          scrollSnapType: "x mandatory",
        }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <LiElement
            key={i}
            style={{
              width: twoReviews ? "100%" : "50%",
              height: "fit-content",
              flexShrink: 0,
            }}
          >
            <Review className="review">
              <div className="review-top">
                <img
                  className="review-img"
                  src={`images/clients/client-${i + 1}.jpeg`}
                  alt=""
                  height="100px"
                  width="100px"
                />
                <div className="client-info">
                  <div className="client-name">
                    {t(`review-client-name-` + i)}
                  </div>
                  <div className="client-job">
                    {t(`review-client-job-` + i)}
                  </div>
                </div>
              </div>
              <div className="review-bottom">
                <p>{t(`review-client-comment-${i}`)}</p>
                <br />
                <p>{t(`review-client-comment-${i}-1`)}</p>
              </div>
            </Review>
          </LiElement>
        ))}
      </ul>
    </>
  );
};

export default function Clients() {
  const { t } = useTranslation();

  return (
    <ClientsSection id="reviews">
      <div className="clients-section-wrap">
        <div className="section-el clients-text">
          <h2 className="clients-header">{t("clients-header")}</h2>
          <p>{t("clients-text")}</p>
        </div>
        <div className="section-el reviews-container">
          <div className="reviews-wrap">
            <AdvancedCarousel />
          </div>
        </div>
      </div>
    </ClientsSection>
  );
}
