import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import PrewBottomIcon from "../components/icons/PrewBottomIcon";
import ProductPodIcon from "../components/icons/ProductPodIcon";
import { TfiShoppingCart } from "react-icons/tfi";
import ProductAddIcon from "../components/icons/ProductAddIcon";
import PrewLeftIcon from "../components/icons/PrewLeftIcon";
import PrewRightIcon from "../components/icons/PrewRightIcon";
import GalchIcon from "../components/icons/GalchIcon";
import SettingIcon from "../components/icons/SettingIcon";
import MoneyIcon from "../components/icons/MoneyIcon";

// Imgs
import TopImg from "../assets/img/maleTop.png";
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

import img1 from "../assets/img/male-1img.png";
import img2 from "../assets/img/male-2img.png";
import img3 from "../assets/img/male-3img.png";
import img4 from "../assets/img/male-4img.png";
import img5 from "../assets/img/male-5img.png";
import img6 from "../assets/img/male-6img.png";

function Male() {
  const maleProducts = [
    {
      id: 1,
      img: img1,
      title: "Белый Boncai",
      price: 30000,
      btn: "Подробнее",
    },
    {
      id: 2,
      img: img2,
      title: "Белый Plade",
      price: 32000,
      btn: "Подробнее",
    },
    {
      id: 3,
      img: img3,
      title: "Deta Plade",
      price: 45000,
      btn: "Подробнее",
    },
    {
      id: 4,
      img: img4,
      title: "North Face",
      price: 35000,
      btn: "Подробнее",
    },
    {
      id: 5,
      img: img5,
      title: "Plain Godzilla",
      price: 32000,
      btn: "Подробнее",
    },
    {
      id: 6,
      img: img6,
      title: "Plain Sharky",
      price: 45000,
      btn: "Подробнее",
    },
  ];

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
    <div className="male container">
      <div className="male__top">
        <img src={TopImg} alt="img" />
        <div>
          <h1>
            Универсальное решение <br /> для ваших нужд в <br /> одежде
          </h1>
          <p>
            Все, что вам нужно, чтобы найти идеальный предмет одежды, есть в{" "}
            <br /> Lode X. Мы предлагаем одежду ведущих брендов и редактирование{" "}
            <br /> изображений на ней.
          </p>
        </div>
      </div>

      <div className="male__links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "male__link male__link-active" : "male__link"
          }
        >
          Новинки
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "male__link male__link-active" : "male__link"
          }
        >
          Популярние
        </NavLink>
        <button>Редактировать </button>
      </div>

      <p className="male__inf">Последние поступления</p>

      <div className="male__filt">
        <h1 className="male__filt-h1">Новые рисунки </h1>

        <div className="male__filt-1">
          <h1 className="male__filt-1-h1">Сортировать:</h1>
          <div className="male__filt-2">
            <h1>Цена повозрастанию</h1>
            <PrewBottomIcon className="male__filt-2-icon" />
          </div>
        </div>
      </div>

      <div className="male__products">
        {maleProducts.map((item) => {
          return (
            <div className="male__product">
              <div className="male__product-img">
                <NavLink to="/print">
                  <img src={item.img} alt="img1" />
                </NavLink>
              </div>

              <div className="male__product-cont">
                <ProductPodIcon className="male__product-cont-bzicon" />
                <h1 className="male__product-cont-title">{item.title}</h1>
                <h1 className="male__product-cont-price">{item.price}</h1>
                <h1 className="male__product-cont-title">сум</h1>
              </div>

              <div className="male__product-icons">
                <div>
                  <ProductAddIcon className="male__product-icons-hearticon" />
                  <TfiShoppingCart className="male__product-icons-shopicon" />
                </div>

                <NavLink to="/print">
                  <button className="male__product-icons-btn">
                    {item.btn}
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>

      <button className="male__btn">Показать Больше</button>

      <div className="male__brands">
        <div className="male__brands-title">
          <h1 className="male__brands-title-1">Популярные бренды</h1>
          <h1 className="male__brands-title-2">Все бренды</h1>
        </div>

        <div className="male__brands-products">
          <div className="male__brands-products-pewbg">
            <PrewLeftIcon className="male__brands-products-prewleft" />
          </div>
          <img src={NikeImg} alt="img" />
          <img src={AdidasImg} alt="img" />
          <img src={RebookImg} alt="img" />
          <img src={PumaImg} alt="img" />
          <img src={LacosteImg} alt="img" />
          <div className="male__brands-products-pewbg">
            <PrewRightIcon className="male__brands-products-prewright" />
          </div>
        </div>
      </div>

      <div className="male__dizayners">
        <div className="male__dizayners-title">
          <h1 className="male__dizayners-title-1">Популярные дизайнеры</h1>
          <h1 className="male__dizayners-title-2">Все дизайнеры</h1>
        </div>

        <div className="male__dizayners-flex">
          {dizayners.map((item) => {
            return (
              <div className="male__dizayner">
                <img className="male__dizayner-img" src={item.img} alt="img" />
                <h1 className="male__dizayner-h1">{item.FulName}</h1>
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

      <div className="male__aboutus">
        <h1 className="male__aboutus-title">Почему вибирают именно нас ?</h1>

        <div className="male__aboutus-contents">
          <div className="male__aboutus-content">
            <div className="male__aboutus-content-iconbg">
              <TfiShoppingCart className="male__aboutus-content-icon" />
            </div>
            <h1 className="male__aboutus-content-h1">Маркетплейс</h1>
            <p className="male__aboutus-content-p">
              Компания Lode X - позволяет <br /> людям редактировать свою <br />{" "}
              одежду.
            </p>
          </div>

          <div className="male__aboutus-content">
            <div className="male__aboutus-content-iconbg">
              <GalchIcon className="male__aboutus-content-icon" />
            </div>
            <h1 className="male__aboutus-content-h1">Оригинал </h1>
            <p className="male__aboutus-content-p">
              Мы следим за оригинальностью <br /> продаваемых вещей
            </p>
          </div>

          <div className="male__aboutus-content">
            <div className="male__aboutus-content-iconbg">
              <SettingIcon className="male__aboutus-content-icon" />
            </div>
            <h1 className="male__aboutus-content-h1">Подбор </h1>
            <p className="male__aboutus-content-p">
              Удобный подбор одежды по всем параметрам
            </p>
          </div>

          <div className="male__aboutus-content">
            <div className="male__aboutus-content-iconbg">
              <MoneyIcon className="male__aboutus-content-icon male__aboutus-content-moneyicon" />
            </div>
            <h1 className="male__aboutus-content-h1">Безопасная сделка </h1>
            <p className="male__aboutus-content-p">
              Безопасность платежей для покупателей и продавцов
            </p>
          </div>
        </div>
      </div>

      <div className="male__blogs">
        <h1 className="male__blogs-title">Блог</h1>

        <div className="male__blogs-contents">
          {blogs.map((item) => {
            return (
              <div className="male__blogs-content">
                <img
                  className="male__blogs-content-img"
                  src={item.img}
                  alt="img"
                />
                <h1 className="male__blogs-content-h1">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Male;
