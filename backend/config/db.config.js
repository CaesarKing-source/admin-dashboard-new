import mongoose from 'mongoose';
export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to DB successfully');
    }
    catch(err) {
        console.error(err.message);
    }
}