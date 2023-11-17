import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__nav container">
        <div className="footer__links">
          <div className="footer__links-1">
            <h1 className="footer__links-title">Категории </h1>
            <div className="footer__links-flex">
              <a className="footer__links-a" href="">
                Мужское{" "}
              </a>
              <a className="footer__links-a" href="">
                Женское{" "}
              </a>
              <a className="footer__links-a" href="">
                Детское{" "}
              </a>
            </div>
          </div>

          <div className="footer__links-1">
            <h1 className="footer__links-title">О нас </h1>
            <div className="footer__links-flex">
              <a className="footer__links-a" href="">
                Контакты{" "}
              </a>
              <a className="footer__links-a" href="">
                О компании{" "}
              </a>
              <a className="footer__links-a" href="">
                Правила пользования{" "}
              </a>
            </div>
          </div>

          <div className="footer__links-1">
            <h1 className="footer__links-title">Мой аккаунт </h1>
            <div className="footer__links-flex">
              <a className="footer__links-a" href="">
                Войти{" "}
              </a>
              <a className="footer__links-a" href="">
                Заказы{" "}
              </a>
              <a className="footer__links-a" href="">
                Список желаний{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="footer__contacts">
          <h1 className="footer__links-title">+998 ( 99 ) 280 75 76</h1>

          <div className="footer__links-flex">
            <a className="footer__links-a" href="#">
              example@gmail.com
            </a>
            <a className="footer__links-a" href="#">
              example@mail.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
