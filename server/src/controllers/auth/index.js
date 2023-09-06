import { signAccessToken } from '../../helpers/jwt.js';
import User from '../../models/User/index.js'


const Register = async (req, res, next) => {
	const input = req.body;

	try {
		const isEmailExists = await User.findOne({ email: input.email });
		const isUsernameExists = await User.findOne({ username: input.username });

		if (isEmailExists) {
			return(
				res.json({
					status:true,
					success:false,
					message:"This e-mail is already using."
				})
			)


		} 
		else if (isUsernameExists) {
			return(
				res.json({
					status:true,
					success:false,
					message:"This username is already using."
				})
			)
		}

		const user = new User(input);
		const data = await user.save();
		const userData = data.toObject();

		delete userData.password;
		delete userData.__v;

		const accessToken = await signAccessToken({
			user_id: user._id,
			role: user.role,
		});

		res.json({
			success:true,
			status:true,
			message:"Your account has been created!",
			user: userData,
			accessToken,
		});
	} catch (e) {
		next(e);
	}
};

const Login = async(req,res,next) =>{
    const response = req.body;
    try {
        const user = await User.findOne({email: response.email})
        if(!user) {
            res.json({
                status:true,
                success:false,
                message:"The email address was not found."
            })
        }
        const isMatched = await user.isValidPass(response.password);
        if (!isMatched) {

			res.json({
					status:true,
					success:false,
					message:"This password is not correct!"
				})
			}
		
        const accessToken = await signAccessToken({
			user_id: user._id,
			role: user.role,
		});
        const userData = user.toObject();
		delete userData.password;
		delete userData.__v;

        res.json({ 
			success:true,
			status:true,
			message:"You are sign in successfuly",
			user: userData, 
			accessToken 
		});


    } catch (error) {
        return next(error)
    }
}

const Verified = async (req, res, next) => {
	const { user_id } = req.payload;

	try {
		const user = await User.findById(user_id).select("-password -__v");

		res.json({user,success:true});
	} catch (e) {
		next(e);
	}
};
// const saveTodo = async(req,res)=>{
//     const {todo} = req.body
//     Model.create({todo})
//     .then(()=> res.set(201).send('Saved'))
//     .catch((err)=>{console.log(err)})
// };

// const deleteTodo = async(req,res)=>{
//     const{_id } = req.body;
//      Model.findByIdAndDelete(_id)
//     .then(()=>res.set(201).send("Deleted"))
// };

// const updateTodo = async (req,res)=>{
//     const {_id,todo} = req.body
//     Model.findByIdAndUpdate(_id,{todo})
//     .then(()=> res.set(201).send("Updated"))
//     .catch((e)=>{console.log(e)})
// };
// const updateActivity = async (req,res)=>{
//     const {_id,done} = req.body
//     Model.findByIdAndUpdate(_id,{done})
//     .then(()=> res.set(201).send("Done"))
// };

export {Login,Register,Verified} 