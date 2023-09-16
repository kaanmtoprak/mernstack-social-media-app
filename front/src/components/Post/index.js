import React from 'react'
import './post.scss';
import { Image } from 'antd';
import {IconButton} from '../index';

const Post = ({post,image,owner,likes,comments}) => {

  return (
    <div className='post'>
        <div className="post__head">
            <div className="post__head__user">
                <figure>
                    <img src="images/profile-img.png" alt="profile" />
                </figure>
                <span>{owner.name} {owner.surname}</span>
            </div>
            <div className="post__head__actions">
            <IconButton size="small" color="black" icon="three-dot"/>
            </div>
        </div>
        <div className="post__content">
            <div className='text'>{post}</div>
            <div className="images">
                {image && image.map((index,key)=>(
                <Image
                    key={key}
                    src={`images/${index}.jpg`}
                />
                ))}
            </div>
        </div>
        <div className="post__actions">
            <div className='post__actions__group'>
                <IconButton size="small" color="black" icon="heart-line"/>
                <IconButton size="small" color="black" icon="comment"/>
            </div>
            <IconButton size="small" color="black" icon="bookmark"/>
        </div>

    </div>
  )
}

export default Post