import "./ProfilePicture.scss";

type ProfilePictureProps = {
  image: string;
  name: string;
  titleOption: boolean;
  titleLabel: string | null;
  editOption: boolean;
};

const ProfilePicture = ({
  image,
  name,
  titleOption,
  titleLabel,
  editOption,
}: ProfilePictureProps) => {
  return (
    <div className="profile">
      <img src={image} className="profile__img" alt="Profile Picture" />
      <h1 className="profile__name">{name}</h1>
      {titleOption && <h3 className="profile__title">{titleLabel}</h3>}
      {editOption && <a className="profile__edit">Edit Client</a>}
    </div>
  );
};

export default ProfilePicture;
