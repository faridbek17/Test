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

// Images
import TopImg from "../assets/img/kidsTop.png";
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
import img1 from "../assets/img/kids-1img.png";
import img2 from "../assets/img/kids-2img.png";
import img3 from "../assets/img/kids-3img.png";
import img4 from "../assets/img/kids-4img.png";
import img5 from "../assets/img/kids-5img.png";
import img6 from "../assets/img/kids-6img.png";

function Kids() {
  const kidsProducts = [
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
    <div className="kids container">
      <div className="kids__top">
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

      <div className="kids__links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "kids__link kids__link-active" : "kids__link"
          }
        >
          Новинки
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "kids__link kids__link-active" : "kids__link"
          }
        >
          Популярние
        </NavLink>
        <button>Редактировать </button>
      </div>

      <p className="kids__inf">Последние поступления</p>

      <div className="kids__filt">
        <h1 className="kids__filt-h1">Новые рисунки </h1>

        <div className="kids__filt-1">
          <h1 className="kids__filt-1-h1">Сортировать:</h1>
          <div className="kids__filt-2">
            <h1>Цена повозрастанию</h1>
            <PrewBottomIcon className="kids__filt-2-icon" />
          </div>
        </div>
      </div>

      <div className="kids__products">
        {kidsProducts.map((item) => {
          return (
            <div className="kids__product">
              <div className="kids__product-img">
                <NavLink to="/print">
                  <img src={item.img} alt="img1" />
                </NavLink>
              </div>

              <div className="kids__product-cont">
                <ProductPodIcon className="kids__product-cont-bzicon" />
                <h1 className="kids__product-cont-title">{item.title}</h1>
                <h1 className="kids__product-cont-price">{item.price}</h1>
                <h1 className="kids__product-cont-title">сум</h1>
              </div>

              <div className="kids__product-icons">
                <div>
                  <ProductAddIcon className="kids__product-icons-hearticon" />
                  <TfiShoppingCart className="kids__product-icons-shopicon" />
                </div>

                <NavLink to="/print">
                  <button className="kids__product-icons-btn">
                    {item.btn}
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>

      <button className="kids__btn">Показать Больше</button>

      <div className="kids__brands">
        <div className="kids__brands-title">
          <h1 className="kids__brands-title-1">Популярные бренды</h1>
          <h1 className="kids__brands-title-2">Все бренды</h1>
        </div>

        <div className="kids__brands-products">
          <div className="kids__brands-products-pewbg">
            <PrewLeftIcon className="kids__brands-products-prewleft" />
          </div>
          <img src={NikeImg} alt="img" />
          <img src={AdidasImg} alt="img" />
          <img src={VersacheImg} alt="img" />
          <img src={GucciImg} alt="img" />
          <img src={ChanelImg} alt="img" />
          <div className="kids__brands-products-pewbg">
            <PrewRightIcon className="kids__brands-products-prewright" />
          </div>
        </div>
      </div>

      <div className="kids__dizayners">
        <div className="kids__dizayners-title">
          <h1 className="kids__dizayners-title-1">Популярные дизайнеры</h1>
          <h1 className="kids__dizayners-title-2">Все дизайнеры</h1>
        </div>

        <div className="kids__dizayners-flex">
          {dizayners.map((item) => {
            return (
              <div className="kids__dizayner">
                <img className="kids__dizayner-img" src={item.img} alt="img" />
                <h1 className="kids__dizayner-h1">{item.FulName}</h1>
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

      <div className="kids__aboutus">
        <h1 className="kids__aboutus-title">Почему вибирают именно нас ?</h1>

        <div className="kids__aboutus-contents">
          <div className="kids__aboutus-content">
            <div className="kids__aboutus-content-iconbg">
              <TfiShoppingCart className="kids__aboutus-content-icon" />
            </div>
            <h1 className="kids__aboutus-content-h1">Маркетплейс</h1>
            <p className="kids__aboutus-content-p">
              Компания Lode X - позволяет <br /> людям редактировать свою <br />{" "}
              одежду.
            </p>
          </div>

          <div className="kids__aboutus-content">
            <div className="kids__aboutus-content-iconbg">
              <GalchIcon className="kids__aboutus-content-icon" />
            </div>
            <h1 className="kids__aboutus-content-h1">Оригинал </h1>
            <p className="kids__aboutus-content-p">
              Мы следим за оригинальностью <br /> продаваемых вещей
            </p>
          </div>

          <div className="kids__aboutus-content">
            <div className="kids__aboutus-content-iconbg">
              <SettingIcon className="kids__aboutus-content-icon" />
            </div>
            <h1 className="kids__aboutus-content-h1">Подбор </h1>
            <p className="kids__aboutus-content-p">
              Удобный подбор одежды по всем параметрам
            </p>
          </div>

          <div className="kids__aboutus-content">
            <div className="kids__aboutus-content-iconbg">
              <MoneyIcon className="kids__aboutus-content-icon kids__aboutus-content-moneyicon" />
            </div>
            <h1 className="kids__aboutus-content-h1">Безопасная сделка </h1>
            <p className="kids__aboutus-content-p">
              Безопасность платежей для покупателей и продавцов
            </p>
          </div>
        </div>
      </div>

      <div className="kids__blogs">
        <h1 className="kids__blogs-title">Блог</h1>

        <div className="kids__blogs-contents">
          {blogs.map((item) => {
            return (
              <div className="kids__blogs-content">
                <img
                  className="kids__blogs-content-img"
                  src={item.img}
                  alt="img"
                />
                <h1 className="kids__blogs-content-h1">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Kids;
