import React, { useEffect, useState } from "react";
import "./Shoes.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Navigation } from "swiper/modules";

import Btn from "../../Button/Btn";

const Shoes = ({ shoesData }) => {
  const [data, setData] = useState('');

  return (
    <section className="shoes section">
      <svg
        className="svg"
        height="707"
        viewBox="0 0 2106 707"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 706H341.986L407.478 660V173.5L341.986 123.5H1V53H651.649L727.107 1H1719.45L1794.2 53H2059.73V123.5H1794.2V626H2106"
          stroke="url(#paint0_radial_162_38)"
          stroke-opacity="0.5"
        />
        <defs>
          <radialGradient
            id="paint0_radial_162_38"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1355.69 241) rotate(129.399) scale(555.166 1319.27)"
          >
            <stop stop-color="white" stop-opacity="0.74" />
            <stop offset="0.541667" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0.34" />
          </radialGradient>
        </defs>
      </svg>
      <h1 className="title__shoes">{data.title}</h1>
      <div className="container">
        <div className="container__product">
          <img src={data.fonImage} alt="" />
          <div className="product__title">
            <h2 className="title">{data.title}</h2>
            <div className="information__product">
              <span className="price">${data.price}</span>
              <div className="size__product">
                <span className="size__span">Size</span>
                <span></span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_46_861)">
                    <path
                      d="M18 5.99998H16C16 3.78998 14.21 1.99998 12 1.99998C9.79 1.99998 8 3.78998 8 5.99998H6C4.9 5.99998 4 6.89998 4 7.99998V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V7.99998C20 6.89998 19.1 5.99998 18 5.99998ZM12 3.99998C13.1 3.99998 14 4.89998 14 5.99998H10C10 4.89998 10.9 3.99998 12 3.99998ZM18 20H6V7.99998H8V9.99998C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 9.99998V7.99998H14V9.99998C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 9.99998V7.99998H18V20Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_46_861">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <Btn items="More Details" />
          </div>
        </div>
        <div className="slider">
          <Swiper
            grabCursor={true}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Navigation]}
            breakpoints = {{
              1600: {
                slidesPerView: 4,
              },
              1150: {
                slidesPerView: 4,
              },
              928: {
                slidesPerView: 3,
              },
              769: {
                slidesPerView: 3,
              },
              569: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 2,
              }
          }}
            className="slider__product"
          >
            {shoesData.map((shoes, id) => {
              return (
                <SwiperSlide key={id} id={id} >
                  <Card data={data} setData={setData} shoes={shoes}  />
                </SwiperSlide>
              );
            })}
            <div className="container__btn">
              <button className="swiper-button-prev btn__prev">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0531 16L19.7731 11.28C20.0214 11.0302 20.1608 10.6923 20.1608 10.34C20.1608 9.98777 20.0214 9.64983 19.7731 9.40001C19.6491 9.27504 19.5017 9.17585 19.3392 9.10816C19.1767 9.04047 19.0024 9.00562 18.8264 9.00562C18.6504 9.00562 18.4761 9.04047 18.3137 9.10816C18.1512 9.17585 18.0037 9.27504 17.8798 9.40001L12.2264 15.0533C12.1015 15.1773 12.0023 15.3248 11.9346 15.4872C11.8669 15.6497 11.832 15.824 11.832 16C11.832 16.176 11.8669 16.3503 11.9346 16.5128C12.0023 16.6753 12.1015 16.8227 12.2264 16.9467L17.8798 22.6667C18.0043 22.7903 18.1521 22.888 18.3146 22.9544C18.477 23.0207 18.651 23.0544 18.8264 23.0533C19.0019 23.0544 19.1759 23.0207 19.3383 22.9544C19.5008 22.888 19.6485 22.7903 19.7731 22.6667C20.0214 22.4169 20.1608 22.0789 20.1608 21.7267C20.1608 21.3744 20.0214 21.0365 19.7731 20.7867L15.0531 16Z"
                    fill="white"
                  />
                </svg>
                <span>Previous</span>
              </button>
              <button className="swiper-button-next btn__next">
                <span>Next</span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9467 16L12.2267 20.72C11.9783 20.9699 11.8389 21.3078 11.8389 21.66C11.8389 22.0123 11.9783 22.3502 12.2267 22.6C12.3506 22.725 12.4981 22.8242 12.6606 22.8919C12.823 22.9596 12.9973 22.9944 13.1733 22.9944C13.3493 22.9944 13.5236 22.9596 13.6861 22.8919C13.8486 22.8242 13.996 22.725 14.12 22.6L19.7733 16.9467C19.8983 16.8228 19.9975 16.6753 20.0652 16.5128C20.1329 16.3503 20.1677 16.1761 20.1677 16C20.1677 15.824 20.1329 15.6498 20.0652 15.4873C19.9975 15.3248 19.8983 15.1773 19.7733 15.0534L14.12 9.33338C13.9954 9.20981 13.8477 9.11204 13.6852 9.04569C13.5228 8.97933 13.3488 8.9457 13.1733 8.94671C12.9979 8.9457 12.8239 8.97933 12.6615 9.04569C12.499 9.11204 12.3512 9.20981 12.2267 9.33338C11.9783 9.5832 11.8389 9.92113 11.8389 10.2734C11.8389 10.6256 11.9783 10.9636 12.2267 11.2134L16.9467 16Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
      <div className="container__bottom">
        <div className="flex__flask">
          <span>flask</span>
          <span>flask</span>
          <span>flask</span>
          <span>flask</span>
        </div>
        <div className="flex__flask">
          <span>flask</span>
          <span>flask</span>
          <span>flask</span>
          <span>flask</span>
        </div>
      </div>
    </section>
  );
};

const Card = ({shoes, data, setData}) => {

  const shoesData = () => {
    setData(shoes)
  }

  useEffect(() => {
    shoesData()
  }, [])

  return (
    <div className="card__shoes" onClick={() => shoesData()}>
      <img src={shoes.image} alt="" />  
      <h4>{shoes.title}</h4>
    </div>
  );
};

export default Shoes;
