import React from 'react';
import './NavBar.css';
import InputSearch from "./InputSearch";

const NavBar = () => {
  return (
    <header className="header">
      <div className="header__inner _container">
        <div className="header__menu">
          <button className="btn btn__header btn__burger"/>
          <button className="btn btn__catalog">Каталог</button>
        </div>

        <div className="header__user">
          <InputSearch />
          <div className="user-profile">
            <button className="btn btn__header btn__favorites"/>
            <button className="btn btn__header btn__cart"/>
            <button className="btn btn__header btn__user"/>
          </div>

        </div>

      </div>


    </header>
  );
};

export default NavBar;
