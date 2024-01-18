import { ChangeEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  searchTerm: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ searchTerm, handleInput }: SearchBoxProps) => {
  return (
    <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInput}
          className="search-box__input"
        />
    </div>
  );
};

export default SearchBox;
