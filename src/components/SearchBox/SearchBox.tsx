import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({searchTerm, handleInput }: SearchBoxProps) => {

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
      <div className="search-box__img-container">
        <img className='search-box__img-container--img' src='images/search.png' />
      </div>
    </div>
  );
};

export default SearchBox;
