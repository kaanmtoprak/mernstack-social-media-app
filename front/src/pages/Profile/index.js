import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import './profile.scss';
import { IconButton, PostContainer } from '../../components';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/slices/Posts/actions';
import { useParams } from 'react-router-dom';
import { getSingleUser } from '../../redux/slices/Users/actions';

const Profile = () => {
    const { user } = useAuth();
    const {username} = useParams()
    const dispatch = useDispatch()
    const [ownProfileControl,setOwnProfileControl] = useState(null)
    const userInfo = user.user;
    const posts = useSelector(state=> state.posts.posts);
    const singleUser = useSelector(state=> state.users.user);
    const singleUserIsLoading = useSelector(state=> state.users.isLoading);
    
    const handleGoBack = () => {
        window.history.back(); 
      };

    useEffect(()=>{
        dispatch(getSingleUser(username))
    },[dispatch,username])



    useEffect(()=>{
        if(singleUser?.data) {
            dispatch(getPosts(singleUser?.data?._id));
        }

    },[dispatch,singleUser]);

    
    useEffect(()=>{
        if(singleUser?.data?._id === userInfo?._id) {
            setOwnProfileControl(true)
        }

    },[setOwnProfileControl,singleUser,userInfo])


    if(singleUserIsLoading) {
        return <div>loading...</div>
    }

  return (
    <div className='profile-page'>
        <div className="profile-page__head">
            <div className="profile-page__head__title">
            <IconButton onClick={handleGoBack} color="black" icon="arrow-left">Back</IconButton>
            </div>
            <div className="profile-page__head__actions">
            {ownProfileControl && <IconButton color="black" icon="pencil"/>}
                <IconButton color="black" icon="settings"/>
            </div>

        </div>
        <div className="profile-page__info">
            <div className="profile-page__info__profile">
                <figure className='image'>
                    <img src={`images/${singleUser.data.profile_image}`} alt='profile'/>
                </figure>

            </div>
            <div className="profile-page__info__about">
                
                <div className='name-div'><span className='name'>{singleUser.data.name} {singleUser.data.surname}</span><span className='username'>@{singleUser.data.username}</span></div>
                {userInfo.about &&<div className='about'>{userInfo.about}</div>}
                <div className='information-div'>
                {userInfo.place &&<span className='location'><i className='icon-location'></i>{singleUser.data.place}</span>}
                <span className='date'><i className='icon-calender'></i>Joined in {moment(singleUser.data.createdAt).format("YY MMM")}</span>
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