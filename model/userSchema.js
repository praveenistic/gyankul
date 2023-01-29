import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    firstname:{
        type: String,
        require:true,
        trim:true
    },
    lastname:{
        type: String,
        require:true,
        trim:true
    },
    username:{
        type: String,
        require:true,
        trim:true,
        index:true,
        unique:true,
        lowercase:true
    },
    email:{
        type: String,
        require:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type: String,
        require:true,
    }
});

const user = mongoose.model('user', userSchema);

export default user;