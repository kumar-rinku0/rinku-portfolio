import {Schema, model} from "mongoose";

const InfoSchema = new Schema({
    firstname: {
        type : String,
        required: true,
    },
    lastname: {
        type : String,
        required: true,
    },
    phoneno: {
        type : String,
        required: true,
        unique: true,
    },
    email: {
        type : String,
        required: true,
        unique: true,
    },
},{ timestamps: true }
)

export default model("info", InfoSchema);

