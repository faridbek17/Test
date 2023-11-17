import React from "react";

// Icons
import { TfiShoppingCart } from "react-icons/tfi";
import GalchIcon from "../components/icons/GalchIcon";
import SettingIcon from "../components/icons/SettingIcon";
import MoneyIcon from "../components/icons/MoneyIcon";

function Safe() {
  return (
    <div className="safe container">
      <div className="safe__top">
        <h1 className="safe__top-h1">
          Пользовательское <br /> соглашение
        </h1>
        <p className="safe__top-p">
          Все, что вам нужно, чтобы найти идеальный предмет одежды, есть в{" "}
          <br /> Lode X. Мы предлагаем одежду ведущих брендов и редактирование{" "}
          <br /> изображений на ней.
        </p>
      </div>
      
      <p className="safe__lorem">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
        non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
        voluptate velit esse quam nihil molestiae consequatur, vel illum qui
        dolorem eum fugiat quo voluptas nulla pariatur. exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur.{" "}
      </p>

      <div className="safe__aboutus">
        <h1 className="safe__aboutus-title">Почему вибирают именно нас ?</h1>

        <div className="safe__aboutus-contents">
          <div className="safe__aboutus-content">
            <div className="safe__aboutus-content-iconbg">
              <TfiShoppingCart className="safe__aboutus-content-icon" />
            </div>
            <h1 className="safe__aboutus-content-h1">Маркетплейс</h1>
            <p className="safe__aboutus-content-p">
              Компания Lode X - позволяет <br /> людям редактировать свою <br />{" "}
              одежду.
            </p>
          </div>

          <div className="safe__aboutus-content">
            <div className="safe__aboutus-content-iconbg">
              <GalchIcon className="safe__aboutus-content-icon" />
            </div>
            <h1 className="safe__aboutus-content-h1">Оригинал </h1>
            <p className="safe__aboutus-content-p">
              Мы следим за оригинальностью <br /> продаваемых вещей
            </p>
          </div>

          <div className="safe__aboutus-content">
            <div className="safe__aboutus-content-iconbg">
              <SettingIcon className="safe__aboutus-content-icon" />
            </div>
            <h1 className="safe__aboutus-content-h1">Подбор </h1>
            <p className="safe__aboutus-content-p">
              Удобный подбор одежды по всем параметрам
            </p>
          </div>

          <div className="safe__aboutus-content">
            <div className="safe__aboutus-content-iconbg">
              <MoneyIcon className="safe__aboutus-content-icon safe__aboutus-content-moneyicon" />
            </div>
            <h1 className="safe__aboutus-content-h1">Безопасная сделка </h1>
            <p className="safe__aboutus-content-p">
              Безопасность платежей для покупателей и продавцов
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safe;
