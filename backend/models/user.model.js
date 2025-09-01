import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true,
    },
    email: {
        type: String,
        maxlength: 60,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phone: String,
    transactions: Array,
    role: {
        type: String,
        enum: ['user', 'admin', 'superadmin'],
        default: 'admin'
    },
}, { timestamps: true }
);

const userModel = mongoose.model('users', userSchema);
export default userModel;