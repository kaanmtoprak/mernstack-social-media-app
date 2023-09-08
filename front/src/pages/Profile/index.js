import React from 'react'
import { useAuth } from '../../context/AuthContext';
import './profile.scss';
import { IconButton } from '../../components';

const Profile = () => {
    const { user } = useAuth();
    const userInfo = user.user;
    console.log(user.user.profile_image)
  return (
    <div className='profile-page'>
        <div className="profile-page__head">
            <div className="profile-page__head__title">
                Your Profile
            </div>
            <div className="profile-page__head__actions">
                <IconButton color="green" icon="pencil"/>
                <IconButton color="black" icon="settings"/>
            </div>

        </div>
        <div className="profile-page__info">
            <div className="profile-page__info__profile">
                <figure className='image'>
                    <img src={`images/${user.user.profile_image}`} alt='profile'/>
                </figure>
                <span className='name'>{userInfo.name} {userInfo.surname}</span>
                {userInfo.about &&<div className='bio'>{userInfo.about}</div>}
                {userInfo.place &&<div className='place'><i className='icon-location'></i>{userInfo.place}</div>}
                
                
            </div>
        </div>
</div>
  )
}

export default Profile