import SearchBox from "../SearchBox/SearchBox";
import "./QueryBar.scss";

type QueryBarProps = {
  label: string;
  searchTerm: string;
  hasFilter: boolean;
  handleInput: () => void;
  columnViewClick: () => void;
  gridViewClick: () => void;
  sortClick: () => void;
  filterClick: () => void;
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
        <img className="querybar__views--column" src="images/column-view.png" onClick={columnViewClick}/>
        <img className="querybar__views--grid" src="images/grid-view.png" onClick={gridViewClick} />
      </div>
      <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
      <div className="querybar__sort" onClick={sortClick}>
        <img className="querybar__sort--img" src="images/sort.png" />
        <p className="querybar__sort--text">Sort</p>
      </div>
      {hasFilter && (
        <div className="querybar__filter" onClick={filterClick}>
          <img className="querybar__filter--img" src="images/filter.png" />
          <p className="querybar__filter--text">Filter</p>
        </div>
      )}
    </div>
  );
};

export default QueryBar;
