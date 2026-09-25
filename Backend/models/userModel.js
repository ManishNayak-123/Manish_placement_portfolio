//here we will write the field names
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
       avatar: {
       type: String,
       default: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150", // Default avatar placeholder
     }

    },
    {
    timestamps:true,
    }
);

const User = mongoose.model("User",userSchema);
export default User;