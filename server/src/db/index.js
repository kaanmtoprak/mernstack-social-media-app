import mongoose from 'mongoose'

export const connectDatabase = () => {  
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('database connection'))
    .catch((err) => console.log(err.message));
};

