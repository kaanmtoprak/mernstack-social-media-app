import React from 'react'
import './post.scss';

const Post = ({post,image,owner,likes,comments}) => {
  return (
    <div className='post'>
        <div className="post__head">
            <div className="post__head__user">
                <figure>
                    <img src="images/profile-img.png" alt="profile" />
                </figure>
                <span>Kaan Toprak</span>
            </div>
            <div className="post__head__actions">
            <span className='icon'> <i className='icon-three-dot'></i></span>
            </div>
        </div>
        <div className="post__content">
            <div>{post}</div>
        </div>
        <div className="post__actions">
            <div className='post__actions__group'>
                <span className='icon'><i className='icon-heart'></i></span>
                <span className='icon'><i className='icon-comment'></i></span>
            </div>
            <span className='icon'><i className='icon-bookmark'></i></span>
        </div>

    </div>
  )
}

export default Post