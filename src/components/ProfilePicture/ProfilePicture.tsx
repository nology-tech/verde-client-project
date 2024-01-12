import "./ProfilePicture.scss";
import profilePicture from "../../assets/images/profile-picture.png";

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
    <div className={`profile profile--${variant}`}>
      <img
        src={profilePicture}
        className={`profile__img profile__img--${variant}`}
        alt="Profile Picture"
      />
      <h1 className={`profile__name profile__name--${variant}`}>{name}</h1>
      {titleOption && <h3 className={`profile__title profile__title--${variant}`}>{titleLabel}</h3>}
      {editOption && <a className={`profile__edit profile__edit--${variant}`}>Edit Client</a>}
    </div>
  );
};

export default ProfilePicture;
