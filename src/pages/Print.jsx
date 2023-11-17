import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Images
import NikeImg from "../assets/img/Nike.png";
import AdidasImg from "../assets/img/Adidas.png";
import RebookImg from "../assets/img/Reebok.png";
import PumaImg from "../assets/img/Puma.png";
import LacosteImg from "../assets/img/Lacoste.png";
import Dizayner from "../assets/img/dizayner.png";
import BlogImg1 from "../assets/img/blogImg1.png";
import BlogImg2 from "../assets/img/blogImg2.png";
import BlogImg3 from "../assets/img/blogImg3.png";
import BlogImg4 from "../assets/img/blogImg4.png";

// Icons
import PrewLeftIcon from "../components/icons/PrewLeftIcon";
import PrewRightIcon from "../components/icons/PrewRightIcon";
import GalchIcon from "../components/icons/GalchIcon";
import SettingIcon from "../components/icons/SettingIcon";
import MoneyIcon from "../components/icons/MoneyIcon";
import { AiOutlineMenu } from "react-icons/ai";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { HiArrowUturnRight } from "react-icons/hi2";
import { MdCloudUpload } from "react-icons/md";
import { CiTextAlignCenter } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";
import { TfiShoppingCart } from "react-icons/tfi";

function Print() {
  const [active, setActive] = useState(false);

  const dizayners = [
    {
      id: 1,
      img: Dizayner,
      FulName: "Имя Фамилия",
    },
    {
      id: 2,
      img: Dizayner,
      FulName: "Имя Фамилия",
    },
    {
      id: 3,
      img: Dizayner,
      FulName: "Имя Фамилия",
    },
    {
      id: 4,
      img: Dizayner,
      FulName: "Имя Фамилия",
    },
  ];

  const blogs = [
    {
      id: 1,
      img: BlogImg1,
      title:
        "Эта рубашка спасет Вы сэкономите 40$ при себе Следующая онлайн-покупка",
    },
    {
      id: 2,
      img: BlogImg2,
      title: "История позади Lode X: Это Стильное  движение",
    },
    {
      id: 3,
      img: BlogImg3,
      title: "История позади Lode X: Это Стильное  движение",
    },
    {
      id: 4,
      img: BlogImg4,
      title: "История позади Lode X: Это Стильное  движение",
    },
  ];

  return (
    <div className="print">
      <div className="print__bg row">
        <div className="print__row container">
          <h1 className="print__logo">Pattern Print</h1>

          <nav className="print__nav">
            <NavLink className="print__link">Главная /</NavLink>
            <NavLink className="print__link">Мужское /</NavLink>
            <NavLink className="print__link">Футболки /</NavLink>
            <NavLink className="print__link">Pattern Print</NavLink>
          </nav>
        </div>
      </div>

      <div className="print__project">
        <div className="print__project-left">
          <div className="print__project-left-icons">
            <AiOutlineMenu
              onClick={() => setActive(!active)}
              className="print__project-left-icon"
            />
          </div>

          <div className="print__project-left-links">
            <NavLink className="print__project-left-link">Home</NavLink>
          </div>

          <div className="print__project-left-turns">
            <HiArrowUturnLeft className="print__project-left-turn print__project-left-turn-1" />
            <HiArrowUturnRight className="print__project-left-turn" />
          </div>
        </div>

        <div className="print__project-middle">
          <h1>Project title</h1>
        </div>

        <div className="print__project-right">
          <h1 className="print__project-right-h1">Share</h1>
          <MdCloudUpload className="print__project-right-icon" />
        </div>
      </div>

      <div className={` print__contents ${active ? "active" : ""}`}>
        <div className="print__contents-1">
          <h1>Open Sans</h1>
        </div>

        <di className="print__contents-2">
          <div>
            <h1>24</h1>
          </div>
        </di>

        <div className="print__contents-3">
          <u>A</u>
          <b>B</b>
          <h1>I</h1>
          <u>U</u>
          <h1>T</h1>
          <h1>T T</h1>
        </div>

        <div className="print__contents-4">
          <CiTextAlignCenter className="print__contents-4-icons" />
          <FaListUl className="print__contents-4-icons" />
          <h1>T</h1>
          <FaArrowsAltV className="print__contents-4-icon" />
        </div>
      </div>

      <div className="print__cont"></div>

      <div className={` print__panel ${active ? "active" : ""}`}></div>

      <div className="print__container">
        <div className="print__brands">
          <div className="print__brands-title">
            <h1 className="print__brands-title-1">Популярные бренды</h1>
            <h1 className="print__brands-title-2">Все бренды</h1>
          </div>

          <div className="print__brands-products">
            <div className="print__brands-products-pewbg">
              <PrewLeftIcon className="print__brands-products-prewleft" />
            </div>
            <img src={NikeImg} alt="img" />
            <img src={AdidasImg} alt="img" />
            <img src={RebookImg} alt="img" />
            <img src={PumaImg} alt="img" />
            <img src={LacosteImg} alt="img" />
            <div className="print__brands-products-pewbg">
              <PrewRightIcon className="print__brands-products-prewright" />
            </div>
          </div>
        </div>

        <div className="print__dizayners">
          <div className="print__dizayners-title">
            <h1 className="print__dizayners-title-1">Популярные дизайнеры</h1>
            <h1 className="print__dizayners-title-2">Все дизайнеры</h1>
          </div>

          <div className="print__dizayners-flex">
            {dizayners.map((item) => {
              return (
                <div className="print__dizayner">
                  <img
                    className="print__dizayner-img"
                    src={item.img}
                    alt="img"
                  />
                  <h1 className="print__dizayner-h1">{item.FulName}</h1>
                  <div class="radio-input">
                    <input
                      value="value-1"
                      name="value-radio"
                      id="value-1"
                      type="radio"
                      class="star s1"
                    />
                    <input
                      value="value-2"
                      name="value-radio"
                      id="value-2"
                      type="radio"
                      class="star s2"
                    />
                    <input
                      value="value-3"
                      name="value-radio"
                      id="value-3"
                      type="radio"
                      class="star s3"
                    />
                    <input
                      value="value-4"
                      name="value-radio"
                      id="value-4"
                      type="radio"
                      class="star s4"
                    />
                    <input
                      value="value-5"
                      name="value-radio"
                      id="value-5"
                      type="radio"
                      class="star s5"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="print__aboutus">
          <h1 className="print__aboutus-title">Почему вибирают именно нас ?</h1>

          <div className="print__aboutus-contents">
            <div className="print__aboutus-content">
              <div className="print__aboutus-content-iconbg">
                <TfiShoppingCart className="print__aboutus-content-icon" />
              </div>
              <h1 className="print__aboutus-content-h1">Маркетплейс</h1>
              <p className="print__aboutus-content-p">
                Компания Lode X - позволяет <br /> людям редактировать свою{" "}
                <br /> одежду.
              </p>
            </div>

            <div className="print__aboutus-content">
              <div className="print__aboutus-content-iconbg">
                <GalchIcon className="print__aboutus-content-icon" />
              </div>
              <h1 className="print__aboutus-content-h1">Оригинал </h1>
              <p className="print__aboutus-content-p">
                Мы следим за оригинальностью <br /> продаваемых вещей
              </p>
            </div>

            <div className="print__aboutus-content">
              <div className="print__aboutus-content-iconbg">
                <SettingIcon className="print__aboutus-content-icon" />
              </div>
              <h1 className="print__aboutus-content-h1">Подбор </h1>
              <p className="print__aboutus-content-p">
                Удобный подбор одежды по всем параметрам
              </p>
            </div>

            <div className="print__aboutus-content">
              <div className="print__aboutus-content-iconbg">
                <MoneyIcon className="print__aboutus-content-icon print__aboutus-content-moneyicon" />
              </div>
              <h1 className="print__aboutus-content-h1">Безопасная сделка </h1>
              <p className="print__aboutus-content-p">
                Безопасность платежей для покупателей и продавцов
              </p>
            </div>
          </div>
        </div>

        <div className="print__blogs">
          <h1 className="print__blogs-title">Блог</h1>

          <div className="print__blogs-contents">
            {blogs.map((item) => {
              return (
                <div className="print__blogs-content">
                  <img
                    className="print__blogs-content-img"
                    src={item.img}
                    alt="img"
                  />
                  <h1 className="print__blogs-content-h1">{item.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Print;