import React from 'react'
import { posts } from '../../utilities/dummies'
import { Post } from '../index'
import './post-container.scss';

const PostContainer = () => {
  return (
    <div className='post-container'>
        {
            posts.map((index,key)=>(
                <Post key={key} likes={index.likes} owner={index.owner} post={index.post} comments={index.comments} image={index.image}/>
            ))
        }
    </div>
  )
}

export default PostContainer