import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
		unique: true,
    },
    email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
    password: {
        type: String,
        required: true,
        select : false

    },	
    role: {
		type: String,
		default: "user",
		enum: ["user", "admin"],
	},
    followers: [
        {
            type:mongoose.Schema.ObjectId,
            ref : "User"
        }
    ],
    followeds: [
        {
            type:mongoose.Schema.ObjectId,
            ref : "User"
        }
    ],
	createdAt : {
        type : Date,
        default: Date.now
    },
	title : {
        type : String
    },
    about : {
        type : String
    },
    place : {
        type : String
    },
    website : {
        type : String
    },
    profile_image : {
        type : String,
        default : "default.jpg"
    },
    blocked : {
        type : Boolean,
        default : false
    },
})

UserSchema.pre("save", async function (next) {
	try {
		if (this.isNew) {
			const salt = await bcrypt.genSalt(10);
			const hashed = await bcrypt.hash(this.password, salt);
			this.password = hashed;
		}

		next();
	} catch (e) {
		next(error);
	}
});

UserSchema.methods.isValidPass = async function (pass,hashedPassword) {
	return bcrypt.compareSync(pass, hashedPassword);

};
const User = mongoose.model("user", UserSchema);

export default  User;