const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nirmanshandilyaoc_db_user:YfSp6xcDLOoOC9MS@cluster0.xr6en2w.mongodb.net/");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accoutSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,       //reference to user model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model("Account", accoutSchema);

module.exports = {
    User,
    Account
};
