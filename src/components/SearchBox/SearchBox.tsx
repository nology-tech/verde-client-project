import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({ searchTerm, handleInput }: SearchBoxProps) => {
  return (
    <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          onInput={handleInput}
          className="search-box__input"
        />
        <img className="search-box__img" src="images/search.png" />
    </div>
  );
};

export default SearchBox;
