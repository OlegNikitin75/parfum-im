import React, {useState} from 'react';
import './NavBar.css';
import InputSearch from "./InputSearch";
import {Link} from "react-router-dom";
import vk from '../img/icons/icons-header/vk.svg';
import inst from '../img/icons/icons-header/instagram.svg';
import tel from '../img/icons/icons-header/telegram.svg';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
  }


  return (
    <header className="header">
      <div className={click?"navbar--disabled":"navbar _container"}>
        <div className="header__inner">
          <div className="header__menu">
            <button className="btn btn__header btn__burger" onClick={handelClick}/>
            <button className="btn btn__catalog">Каталог</button>
          </div>

          <div className="header__user">
            <InputSearch/>
            <div className="user-profile">
              <button className="btn btn__header btn__favorites"/>
              <button className="btn btn__header btn__cart"/>
              <button className="btn btn__header btn__user"/>
            </div>
          </div>
        </div>
      </div>
      <div className={click
          ? "menu menu--active"
          : "menu"}>
        <div className="menu__wrapper _container">
          <div className="menu__box">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link className="nav__link" to="/">Главная</Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link" to="/about">О компании</Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link" to="/contacts">Контакты</Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link" to="/shipping">Доставка</Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link" to="/payment">Оплата</Link>
                </li>
              </ul>
            </nav>
            <div className="social">
              <a href="/" className="social__link">
                <img className="social__item" src={vk} alt="icon"/>
              </a>
              <a href="/" className="social__link">
                <img className="social__item" src={inst} alt="icon"/>
              </a>
              <a href="/" className="social__link">
                <img className="social__item" src={tel} alt="icon"/>
              </a>
            </div>
          </div>
          <div className="menu__box">
            <button className="btn btn__menu btn__close" onClick={handelClick}/>
            <a className="menu__link-phone nav__link" href="tel:+372(33)659-85-74">+372 (33) 659 - 85 - 74</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
