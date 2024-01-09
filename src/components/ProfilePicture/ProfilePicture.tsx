import "./ProfilePicture.scss";

type ProfilePictureProps = {
    profileImg: string,
    memberName: string,
}

const ProfilePicture = ({profileImg, memberName}: ProfilePictureProps) => {
    return (
    <div className="profile">
        <img src= {profileImg} className="profile__img" alt="Profile Picture"/>
        <h1 className="profile__name">{memberName}</h1>
    </div>
    )
}

export default ProfilePicture;