import User from '../../models/User/index.js';


const controlUser = async (req,res) => {
    const _id = req.body;
try {
    const userData = await User.findOne({_id});

    return res.status(201).json({
        success:true,
        status:true,
        data:userData,
        message:"User is here."
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

const getUser = async (req,res) => {
    const username = req.query.username;
    try {
        const userData = await User.findOne({username});

        if (!usernameControl) {
            return res.status(404).json({
                success:false,
                status:true,
                error:"error",
                message:"There is not a person who is have that username."
            })
        }
        else {
            return res.status(201).json({
                success:true,
                status:true,
                data:userData,
                message:"Successful"
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            status:true,
            error:error,
            message:"There is an error."
        })
    }
}

export {controlUser,getUser}