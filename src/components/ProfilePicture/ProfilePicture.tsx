import "./ProfilePicture.scss";
import profilePicture from "../../assets/images/profile-pic.png";

type ProfilePictureProps = {
  name: string;
  titleOption: boolean;
  titleLabel: string | null;
  editOption: boolean;
  variant: "light" | "dark";
};

const ProfilePicture = ({
  name,
  titleOption,
  titleLabel,
  editOption,
  variant,
}: ProfilePictureProps) => {
  return (
    <div className="profile">
      <img
        src={profilePicture}
        className="profile__img"
        alt="Profile Picture"
      />
      <h1 className="profile__name">{name}</h1>
      {titleOption && <h3 className="profile__title">{titleLabel}</h3>}
      {editOption && <a className="profile__edit">Edit Client</a>}
    </div>
  );
};

export default ProfilePicture;
