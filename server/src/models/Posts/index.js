import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    post: {
        type: String,
        required:true

    },
    likes: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    image: {
        type:Array,
    },
    comments: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
	createdAt : {
        type : Date,
        default: Date.now
    }, 
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }

})

const Post = mongoose.model('posts',PostSchema)

export default Post;