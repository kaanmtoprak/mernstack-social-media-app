import Todo from '../../models/Todos/index.js';


const createTodo = async (req,res) => {
    const request = req.body;

    try {
        console.log(            {
            ...request.content,
            owner:request.owner._id
    
        })
        const todo =   await Todo.create(
            {
            ...request.content,
            owner:request.owner._id
    
        }
        );
    
        return res.status(201).json({
            success:true,
            status:true,
            data:todo,
            message:"Todo is successfuly added."
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            status:true,
            error:error,
            message:"There is an error."
        })
    }

}

export {createTodo}