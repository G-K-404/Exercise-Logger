import mongoose, {Schema} from "mongoose"

const userSchema = Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
    },
    plan:{
        type:String,
        required: true,
        unique: true
    },
    profile:{
        type: String, //cloudinary or multer
        default: "randomplaceholderurl",
    }
}, {timestamps:true})