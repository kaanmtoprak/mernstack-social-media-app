import Post from '../../models/Posts/index.js';


const createPost = async (req,res) => {
    const request = req.body;

    try {

        const post =   await Post.create({
            ...request,
            owner:request.owner
        }
        );

        return res.status(201).json({
            success:true,
            status:true,
            data:post,
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
const getAllPosts = async (req,res) => {
    const owner = req.query.owner;
    try {
        const posts = await Post.find({owner});

        return res.status(201).json({
            success:true,
            status:true,
            data:posts,
            message:"Posts are here."
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

export {createPost,getAllPosts}