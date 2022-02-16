import React from 'react';
import './InputSearch.css';

const InputSearch = () => {
  return (
    <div className="search">
      <input className="search__input" type="text" />
      <button className="btn btn__header btn__search" />
    </div>
  );
};

export default InputSearch;
