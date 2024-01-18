import { useState } from "react";
import "./ItemRequestCard.scss";
import Button from "../Button/Button";

type ItemRequestCardProps = {
  id: number;
  placeholder?: string;
  variant : "light" | "dark";
};

const ItemRequestCard = ({ id, placeholder }: ItemRequestCardProps) => {
  const [editMode, setEditMode] = useState<boolean>(true);
  const [autoRenew, setAutoRenew] = useState<boolean>(false);

  const closeEditMode = () => {
    setEditMode(false);
  };
  const openEditMode = () => {
    setEditMode(true);
  };

  const handleRadioClicked = () => {
    setAutoRenew(!autoRenew);
  };

  return (
    <div className="div">
      <div className={`item-container ${autoRenew ? "edit-mode" : ""}`}>
        <div className="item">
          <label className={`${id}`}>Category Name</label>
          <input
            type="text"
            id={`${id}`}
            readOnly={!editMode}
            placeholder={placeholder}
          />
        </div>
        <div className="item">
          <label className={`${id}`}>Staff Member</label>
          <input
            type="text"
            id={`${id}`}
            readOnly={!editMode}
            placeholder={placeholder}
          />
        </div>
        <div className="item">
          <label className={`${id}`}>Resource Name</label>
          <input
            type="text"
            id={`${id}`}
            readOnly={!editMode}
            placeholder={placeholder}
          />
        </div>
        <div className="item">
          <label className={`${id}`}>Auto-purchase</label>
          <div className="radio-container">
            <p>Yes</p>
            <input
              type="radio"
              name="yes"
              id={`${id}`}
              readOnly={!editMode}
              checked={autoRenew}
              onClick={handleRadioClicked}
            ></input>
          </div>
          <div className="radio-container">
            <p>No</p>
            <input
              type="radio"
              name="no"
              id={`${id}`}
              readOnly={!editMode}
              checked={!autoRenew}
              onClick={handleRadioClicked}
            ></input>
          </div>
        </div>
        <div className="item">
          <label className={`${id}`}>Auto-purchase Level</label>
          <input
            type="text"
            id={`${id}`}
            readOnly={!editMode}
            placeholder={placeholder}
          />
        </div>
      </div>
      {editMode ? (
        <div>
          <Button
            onClick={closeEditMode}
            label={"Save"}
            variant={"yellow"}
            size="large"
          />
        </div>
      ) : (
        <Button
          onClick={openEditMode}
          label={"Edit"}
          variant={"yellow"}
          size="large"
        />
      )}
    </div>
  );
};

export default ItemRequestCard;
