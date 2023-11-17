import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import PrewBottomIcon from "../components/icons/PrewBottomIcon";
import ProductPodIcon from "../components/icons/ProductPodIcon";
import ProductAddIcon from "../components/icons/ProductAddIcon";
import PrewLeftIcon from "../components/icons/PrewLeftIcon";
import PrewRightIcon from "../components/icons/PrewRightIcon";
import { TfiShoppingCart } from "react-icons/tfi";
import GalchIcon from "../components/icons/GalchIcon";
import SettingIcon from "../components/icons/SettingIcon";
import MoneyIcon from "../components/icons/MoneyIcon";

// Images
import TopImg from "../assets/img/womenTop.png";
import NikeImg from "../assets/img/Nike.png";
import AdidasImg from "../assets/img/Adidas.png";
import VersacheImg from "../assets/img/Versache.png";
import GucciImg from "../assets/img/Gucci.png";
import ChanelImg from "../assets/img/Chanel.png";
import Dizayner from "../assets/img/dizayner.png";
import BlogImg1 from "../assets/img/blogImg1.png";
import BlogImg2 from "../assets/img/blogImg2.png";
import BlogImg3 from "../assets/img/blogImg3.png";
import BlogImg4 from "../assets/img/blogImg4.png";

// Product Images
import img1 from "../assets/img/women-1img.png";
import img2 from "../assets/img/women-2img.png";
import img3 from "../assets/img/women-3img.png";
import img4 from "../assets/img/women-4img.png";
import img5 from "../assets/img/women-5img.png";
import img6 from "../assets/img/women-6img.png";

function Womens() {
  const womenProducts = [
    {
      id: 1,
      img: img1,
      title: "Kelldone ",
      price: 30000,
      btn: "Подробнее",
    },
    {
      id: 2,
      img: img2,
      title: "Kenzo Paris ",
      price: 32000,
      btn: "Подробнее",
    },
    {
      id: 3,
      img: img3,
      title: "Moschino",
      price: 45000,
      btn: "Подробнее",
    },
    {
      id: 4,
      img: img4,
      title: "Palm Angels",
      price: 35000,
      btn: "Подробнее",
    },
    {
      id: 5,
      img: img5,
      title: "Balmain Paris",
      price: 32000,
      btn: "Подробнее",
    },
    {
      id: 6,
      img: img6,
      title: "Palm Angels",
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
    <div className="women container">
      <div className="women__top">
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

      <div className="women__links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "women__link women__link-active" : "women__link"
          }
        >
          Новинки
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "women__link women__link-active" : "women__link"
          }
        >
          Популярние
        </NavLink>
        <button>Редактировать </button>
      </div>

      <p className="women__inf">Последние поступления</p>

      <div className="women__filt">
        <h1 className="women__filt-h1">Новые рисунки </h1>

        <div className="women__filt-1">
          <h1 className="women__filt-1-h1">Сортировать:</h1>
          <div className="women__filt-2">
            <h1>Цена повозрастанию</h1>
            <PrewBottomIcon className="women__filt-2-icon" />
          </div>
        </div>
      </div>

      <div className="women__products">
        {womenProducts.map((item) => {
          return (
            <div className="women__product">
              <div className="women__product-img">
                <NavLink to="/print">
                  <img src={item.img} alt="img1" />
                </NavLink>
              </div>

              <div className="women__product-cont">
                <ProductPodIcon className="women__product-cont-bzicon" />
                <h1 className="women__product-cont-title">{item.title}</h1>
                <h1 className="women__product-cont-price">{item.price}</h1>
                <h1 className="women__product-cont-title">сум</h1>
              </div>

              <div className="women__product-icons">
                <div>
                  <ProductAddIcon className="women__product-icons-hearticon" />
                  <TfiShoppingCart className="women__product-icons-shopicon" />
                </div>

                <NavLink to="/print">
                  <button className="women__product-icons-btn">
                    {item.btn}
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>

      <button className="women__btn">Показать Больше</button>

      <div className="women__brands">
        <div className="women__brands-title">
          <h1 className="women__brands-title-1">Популярные бренды</h1>
          <h1 className="women__brands-title-2">Все бренды</h1>
        </div>

        <div className="women__brands-products">
          <div className="women__brands-products-pewbg">
            <PrewLeftIcon className="women__brands-products-prewleft" />
          </div>
          <img src={NikeImg} alt="img" />
          <img src={AdidasImg} alt="img" />
          <img src={VersacheImg} alt="img" />
          <img src={GucciImg} alt="img" />
          <img src={ChanelImg} alt="img" />
          <div className="women__brands-products-pewbg">
            <PrewRightIcon className="women__brands-products-prewright" />
          </div>
        </div>
      </div>

      <div className="women__dizayners">
        <div className="women__dizayners-title">
          <h1 className="women__dizayners-title-1">Популярные дизайнеры</h1>
          <h1 className="women__dizayners-title-2">Все дизайнеры</h1>
        </div>

        <div className="women__dizayners-flex">
          {dizayners.map((item) => {
            return (
              <div className="women__dizayner">
                <img className="women__dizayner-img" src={item.img} alt="img" />
                <h1 className="women__dizayner-h1">{item.FulName}</h1>
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

      <div className="women__aboutus">
        <h1 className="women__aboutus-title">Почему вибирают именно нас ?</h1>

        <div className="women__aboutus-contents">
          <div className="women__aboutus-content">
            <div className="women__aboutus-content-iconbg">
              <TfiShoppingCart className="women__aboutus-content-icon" />
            </div>
            <h1 className="women__aboutus-content-h1">Маркетплейс</h1>
            <p className="women__aboutus-content-p">
              Компания Lode X - позволяет <br /> людям редактировать свою <br />{" "}
              одежду.
            </p>
          </div>

          <div className="women__aboutus-content">
            <div className="women__aboutus-content-iconbg">
              <GalchIcon className="women__aboutus-content-icon" />
            </div>
            <h1 className="women__aboutus-content-h1">Оригинал </h1>
            <p className="women__aboutus-content-p">
              Мы следим за оригинальностью <br /> продаваемых вещей
            </p>
          </div>

          <div className="women__aboutus-content">
            <div className="women__aboutus-content-iconbg">
              <SettingIcon className="women__aboutus-content-icon" />
            </div>
            <h1 className="women__aboutus-content-h1">Подбор </h1>
            <p className="women__aboutus-content-p">
              Удобный подбор одежды по всем параметрам
            </p>
          </div>

          <div className="women__aboutus-content">
            <div className="women__aboutus-content-iconbg">
              <MoneyIcon className="women__aboutus-content-icon women__aboutus-content-moneyicon" />
            </div>
            <h1 className="women__aboutus-content-h1">Безопасная сделка </h1>
            <p className="women__aboutus-content-p">
              Безопасность платежей для покупателей и продавцов
            </p>
          </div>
        </div>
      </div>

      <div className="women__blogs">
        <h1 className="women__blogs-title">Блог</h1>

        <div className="women__blogs-contents">
          {blogs.map((item) => {
            return (
              <div className="women__blogs-content">
                <img
                  className="women__blogs-content-img"
                  src={item.img}
                  alt="img"
                />
                <h1 className="women__blogs-content-h1">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Womens;
