import { ChangeEvent, ChangeEventHandler, useState } from "react";
import "./ItemRequestCard.scss";
import Button from "../Button/Button";
import { ResourceCard } from "../../types/ResourceCardTypes";

type ItemRequestCardProps = {
  id: number;
  placeholder?: string;
  variant: "light" | "dark";
  resource: ResourceCard
};

const ItemRequestCard = ({
  id,
  placeholder,
  variant,
  resource
}: ItemRequestCardProps) => {
  const [editMode, setEditMode] = useState<boolean>(true);
  const [autoRenew, setAutoRenew] = useState<boolean>(resource.autoPurchase === "YES");
  const [resourceName, setResourceName] = useState<string>(resource.resourceName);
  const [staffMember, setStaffMember] = useState<string>(resource.staffName);
  const [autoPurchaseLevel, setAutoPurchaseLevel] = useState<string>(resource.autoPurchaseLevel);

  const handleResourceNameInput = (event: ChangeEvent<HTMLInputElement>) =>{
    setResourceName(event.currentTarget.value);
  }

  const handleStaffMemberInput = (event: ChangeEvent<HTMLInputElement>) =>{
    setStaffMember(event.currentTarget.value);
  }

  const handleAutoPurchaseLevelInput = (event: ChangeEvent<HTMLInputElement>) =>{
    setAutoPurchaseLevel(event.currentTarget.value);
  } 

  const closeEditMode = () => {
    setEditMode(false);
  };
  const openEditMode = () => {
    setEditMode(true);
  };

  const handleRadioClicked = () => {
    setAutoRenew(!autoRenew);
  };

  const inputClassName = `item-container__input-box item-container__input-box--${
    editMode ? "edit-mode" : ""
  }`;

  const containerName = `item-container ${
    editMode ? "edit-mode" : ""
  } item-container--${variant}`;

  return (
    <div className="div">
      <div className={containerName}>
        <div className="item">
          <label className={`item-container__name`}>Category Name</label>
          <select className={inputClassName} disabled={!editMode}>
            <option value="">Health</option>
            <option value="">Stationary</option>
          </select>
          {/* <input
            type="text"
            id={`${id}`}
            readOnly={!editMode}
            placeholder={placeholder}
            className={inputClassName}
          /> */}
        </div>
        <div className="item">
          <label className={`${id}`}>Staff Member</label>
          <input
            type="text"
            id={`${id}`}
            readOnly={!editMode}
            value={staffMember}
            placeholder={placeholder}
            className={inputClassName}
            onChange={handleStaffMemberInput}

          />
        </div>
        <div className="item">
          <label className={`${id}`}>Resource Name</label>
          <input
            type="text"
            id={`${id}`}
            readOnly={!editMode}
            value={resourceName}
            placeholder={placeholder}
            className={inputClassName}
            onChange={handleResourceNameInput}
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
              className="item__radio"
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
              className="item__radio"
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
            className={inputClassName}
            onChange={handleAutoPurchaseLevelInput}
            value={autoPurchaseLevel}
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
