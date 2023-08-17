const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    first_name : {
        type : String,
        required : true,
    },
    last_name : {
        type : String,
        required : true,
    },
    website_type : {
        type : String,
        required : true,
    },
    desired_plan : {
        type : String,
        required : true,
    },
    phone_no : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    project_description : {
        type : String,
        required : true,
    },
},{
    timestamps : true,
});

const Contact = mongoose.model("Contact" , contactSchema);
module.exports = Contact;
