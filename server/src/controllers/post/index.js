import Post from '../../models/Posts/index.js';


const createPost = async (req,res) => {
    const request = req.body;

    try {
        console.log(            {
            ...request.content,
            owner:request.owner._id
    
        })
        const post =   await Post.create(
            {
            ...request.content,
            owner:request.owner._id
    
        }
        );
    
        return res.status(201).json({
            success:true,
            status:true,
            data:todo,
            message:"Post is successfuly added."
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

export {createPost}