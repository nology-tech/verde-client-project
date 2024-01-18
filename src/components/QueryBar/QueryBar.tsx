import SearchBox from "../SearchBox/SearchBox";
import sortImg from "./../../assets/images/sort-query-bar.png"
import filterImg from "./../../assets/images/filter.png"
import columnImg from "./../../assets/images/column-view.png"
import gridImg from "./../../assets/images/grid-view.png"

import "./QueryBar.scss";
import {ChangeEventHandler } from "react";

type QueryBarProps = {
  label: string;
  searchTerm: string;
  hasFilter: boolean;
  handleInput: ChangeEventHandler<HTMLInputElement>;
  columnViewClick?: () => void;
  gridViewClick?: () => void;
  sortClick: () => void;
  filterClick?: () => void;
  variant: "light" | "dark";
};

const QueryBar = ({
  label,
  searchTerm,
  hasFilter,
  sortClick,
  filterClick,
  handleInput,
  columnViewClick,
  gridViewClick,
  variant
}: QueryBarProps) => {
  return (
    <div className={`querybar querybar--${variant}`}>
      <h3 className="querybar__title">{label}</h3>
      <div className="querybar__views">
        <img className="querybar__views--column" src={columnImg} onClick={columnViewClick}/>
        <img className="querybar__views--grid" src={gridImg} onClick={gridViewClick} />
      </div>
      <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
      <div className="querybar__sort" onClick={sortClick}>
        <img className="querybar__sort--img" src={sortImg} />
        <p className="querybar__sort--text">Sort</p>
      </div>
      {hasFilter && (
        <div className="querybar__filter" onClick={filterClick}>
          <img className="querybar__filter--img" src={filterImg} />
          <p className="querybar__filter--text">Filter</p>
        </div>
      )}
    </div>
  );
};

export default QueryBar;
