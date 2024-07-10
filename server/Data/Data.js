import mongoose from 'mongoose';

const Data = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Connected');
    } catch (error) {
        console.log('DB Connection Error');
    }
}

export default Data;