import mongoose from 'mongoose';

const USerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true, 
        match: [/\S+@\S+\.\S+/, 'is invalid'] 
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const UserModel = mongoose.model('user', USerSchema);

export default UserModel;