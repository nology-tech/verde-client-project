import SearchBox from "../SearchBox/SearchBox";
import "./QueryBar.scss";

type QueryBarProps = {
  label: string;
  hasFilter: boolean;
  onClick: () => void;
  handleInput: () => void;
};

const QueryBar = ({
  label,
  hasFilter,
  onClick,
  handleInput,
}: QueryBarProps) => {
  return (
    <div className="querybar">
      <h3 className="querybar__title">{label}</h3>
      <div className="querybar__views">
        <img className="querybar__views--column" src="images/column-view.png" />
        <img className="querybar__views--grid" src="images/grid-view.png" />
      </div>
      <SearchBox />
      <div className="querybar__sort">
        <img className="querybar__sort--img" src="images/sort.png" />
        <p className="querybar__sort--text">Sort</p>
      </div>
      {hasFilter && (
        <div className="querybar__filter">
          <img className="querybar__filter--img" src="images/filter.png" />
          <p className="querybar__filter--text">Filter</p>
        </div>
      )}
    </div>
  );
};

export default QueryBar;
