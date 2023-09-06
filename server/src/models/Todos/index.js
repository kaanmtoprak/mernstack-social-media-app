import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required:true

    },
    priority: {
        type:String,
        required:true
    },
    description: {
        type:String,
    },
    isDone: {
        type:Boolean,
        default:false
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

const Todo = mongoose.model('todos',TodoSchema)

export default Todo;