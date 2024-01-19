import { ChangeEvent, useState } from "react";
import "./ItemRequestCard.scss";
import Button from "../Button/Button";
import { ResourceCard } from "../../types/ResourceCardTypes";
import Modal from "../Modal/Modal";

type ItemRequestCardProps = {
  id: number;
  placeholder?: string;
  variant: "light" | "dark";
  resource: ResourceCard;
  isRequestCard: boolean;
};

const ItemRequestCard = ({
  id,
  placeholder,
  variant,
  resource,
  isRequestCard,
}: ItemRequestCardProps) => {
  const [editMode, setEditMode] = useState<boolean>(isRequestCard);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [autoRenew, setAutoRenew] = useState<boolean>(
    resource.autoPurchase === "YES"
  );
  const [resourceName, setResourceName] = useState<string>(
    isRequestCard ? "" : resource.resourceName
  );
  const [staffMember, setStaffMember] = useState<string>(
    isRequestCard ? "" : resource.staffName
  );
  const [autoPurchaseLevel, setAutoPurchaseLevel] = useState<string>(
    isRequestCard ? "" : resource.autoPurchaseLevel
  );

  const handleResourceNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setResourceName(event.currentTarget.value);
  };

  const handleStaffMemberInput = (event: ChangeEvent<HTMLInputElement>) => {
    setStaffMember(event.currentTarget.value);
  };

  const handleAutoPurchaseLevelInput = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setAutoPurchaseLevel(event.currentTarget.value);
  };

  const closeEditMode = () => {
    if (!noEmptyInputs()) {
      alert("Fill in all fields");
    } else {
      isRequestCard ? setShowModal(!showModal) : setEditMode(false);
    }
  };

  const openEditMode = () => {
    setEditMode(true);
  };

  const handleRadioClicked = () => {
    setAutoRenew(!autoRenew);
  };

  const noEmptyInputs = () => {
    return resourceName && staffMember && autoPurchaseLevel;
  };

  const inputClassName = `item-container__input-box item-container__input-box--${
    editMode ? "edit-mode" : ""
  }`;

  const containerName = `item-container ${
    editMode ? "edit-mode" : ""
  } item-container--${variant}`;

  const pTagClassName = `radio-container__text radio-container__text--${
    editMode ? "edit-mode" : ""
  } radio-container--${variant}`;

  const modalButton: React.ReactNode[] = [
    <Button label="Home" variant="yellow" path="/home" />,
  ];

  const pageHtml = (
    <>
      <div className={containerName}>
        <div className="item">
          <label className={`item-container__name`}>Category Name</label>
          <select className={inputClassName} disabled={!editMode}>
            <option value="">Health</option>
            <option value="">Stationary</option>
          </select>
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
            <p className={pTagClassName}>Yes</p>
            <input
              type="radio"
              name="yes"
              id={`${id}`}
              disabled={!editMode}
              checked={autoRenew}
              onClick={handleRadioClicked}
              className="item__radio"
            ></input>
          </div>
          <div className="radio-container">
            <p className={pTagClassName}>No</p>
            <input
              type="radio"
              name="no"
              id={`${id}`}
              disabled={!editMode}
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
        <div className="items-container__button-desktop">
          <Button
            onClick={editMode ? closeEditMode : openEditMode}
            label={editMode ? "Save" : "Edit"}
            variant={"yellow"}
            size="small"
          />
        </div>
      </div>
      <div className="items-container__button-mobile">
        <Button
          onClick={editMode ? closeEditMode : openEditMode}
          label={editMode ? "Save" : "Edit"}
          variant={"yellow"}
          size="large"
        />
      </div>
    </>
  );

  return (
    <div className="div">
      {showModal ? (
        <Modal
          title="Request Complete"
          variant={variant}
          buttons={modalButton}
        />
      ) : (
        pageHtml
      )}
    </div>
  );
};

export default ItemRequestCard;
