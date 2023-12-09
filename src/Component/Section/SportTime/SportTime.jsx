import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SportTime.scss";

import Card from "../../Card/SportTime/Card";

const SportTime = ({ shoesData, setItem }) => {
  const [active, setActive] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);

  return (
    <section className="sport__time section">
      <div className="container">
        <h2 className="title">Sports Time</h2>
        <div
          className={active ? "shoes__container active" : "shoes__container"}
        >
          {shoesData.map((shoes, id) => {
            return (
              <Card
                setItem={setItem}
                id={id}
                shoes={shoes}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="shoes"
              />
            );
          })}
        </div>
        <div
          className={
            active
              ? "shoes__container-mobile active"
              : "shoes__container-mobile"
          }
        >
          {shoesData.map((shoes, id) => {
            return <Card setItem={setItem} id={id} shoes={shoes} />;
          })}
        </div>
        <div className="btn__flex">
          <BtnSport
            active={active}
            setActive={setActive}
            items="Lets Discover More"
          />
          <Link className="btn__link" to="/shop-shoes">
            <BtnSport
              active={activeTwo}
              setActive={setActiveTwo}
              items="go to products"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SportTime;

const BtnSport = ({ items, active, setActive }) => {
  return (
    <button
      className={active ? "btn active" : "btn"}
      onClick={() => setActive(!active)}
    >
      <span>{items}</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8183 8.53941C16.7129 8.46053 16.5929 8.40325 16.4653 8.37084L9.5755 6.78019C9.44702 6.75053 9.31395 6.74647 9.1839 6.76823C9.05385 6.78999 8.92936 6.83716 8.81754 6.90703C8.5917 7.04815 8.43117 7.2732 8.37127 7.53268C8.34161 7.66116 8.33754 7.79422 8.3593 7.92427C8.38107 8.05432 8.42823 8.17881 8.49811 8.29064C8.63922 8.51647 8.86428 8.677 9.12375 8.73691L13.6657 9.77825L7.22906 13.8003C7.00414 13.9409 6.84427 14.165 6.78461 14.4234C6.72495 14.6819 6.77039 14.9534 6.91093 15.1783C7.05147 15.4032 7.27561 15.5631 7.53403 15.6228C7.79245 15.6824 8.06398 15.637 8.2889 15.4964L14.7256 11.4743L13.6705 16.0132C13.6402 16.1417 13.6358 16.2749 13.6573 16.4051C13.6788 16.5354 13.7259 16.6601 13.7959 16.772C13.8658 16.884 13.9572 16.981 14.0649 17.0574C14.1725 17.1338 14.2942 17.1882 14.4229 17.2174C14.5514 17.2476 14.6847 17.2521 14.8149 17.2306C14.9452 17.209 15.0699 17.162 15.1818 17.092C15.2938 17.022 15.3908 16.9306 15.4672 16.823C15.5436 16.7154 15.598 16.5937 15.6272 16.4649L17.2178 9.57507C17.2446 9.44617 17.2457 9.31325 17.221 9.18393C17.1768 8.92446 17.0321 8.69288 16.8183 8.53941Z"
          fill="white"
        />
      </svg>
    </button>
  );
};
