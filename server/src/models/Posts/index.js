import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    post: {
        type: String,
        required:true

    },
    image: {
        type:Array,
    },
	createdAt : {
        type : Date,
        default: Date.now
    }, 
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    likes: [
        {
            type:mongoose.Schema.ObjectId,
            ref : "User"
        }
    ],
    comments: [
        {
            type:mongoose.Schema.ObjectId,
            ref : "User"
        }
    ],

})

const Post = mongoose.model('posts',PostSchema)

export default Post;