import React from 'react'
import { useAuth } from '../../context/AuthContext';
import './profile.scss';
import { IconButton } from '../../components';
import moment from 'moment'

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

            </div>
            <div className="profile-page__info__about">
                
                <div className='name-div'><span className='name'>{userInfo.name} {userInfo.surname}</span><span className='username'>@{userInfo.username}</span></div>
                {userInfo.about &&<div className='about'>{userInfo.about}</div>}
                <div className='information-div'>
                {userInfo.place &&<span className='location'><i className='icon-location'></i>{userInfo.place}</span>}
                <span className='date'><i className='icon-calender'></i>Joined in {moment(userInfo.createdAt).format("YY MMM")}</span>
                </div>
                <div className='follow'><span>12 Followers</span> <span>43 Followed</span></div><span></span>
            </div>

        </div>
</div>
  )
}

export default Profile