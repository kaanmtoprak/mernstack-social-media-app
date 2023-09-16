import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import './profile.scss';
import { IconButton, PostContainer } from '../../components';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/slices/Posts/actions';

const Profile = () => {
    const { user } = useAuth();
    // const [posts,setPosts] = useState(null)
    const dispatch = useDispatch()
    const userInfo = user.user;
    console.log(user.user.profile_image)
    const owner = user.user._id
    const posts = useSelector(state=> state.posts.posts)


    const handleGoBack = () => {
        window.history.back(); 
      };

    useEffect(()=>{
        dispatch(getPosts(owner))
    },[dispatch,owner])

    

  return (
    <div className='profile-page'>
        <div className="profile-page__head">
            <div className="profile-page__head__title">
            <IconButton onClick={handleGoBack} color="black" icon="arrow-left">Back</IconButton>
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
        <div className="profile-page__posts">
            <PostContainer posts={posts.data}/>
        </div>
</div>
  )
}

export default Profile