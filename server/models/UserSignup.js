import mongoose from 'mongoose';

const USerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const UserModel = mongoose.model('user', USerSchema);

export default UserModel;