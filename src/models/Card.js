const mongoose = require('mongoose');

const Card = new mongoose.Schema(
    {
        title: {  
            type: String,
            required: true,
        },
        status: {  
            type: Number,
            default: 0,
        },
        duration: {  
            type: Number,
            required: true,
        },
        points: {  
            type: Number,
            default: 1,
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Card', Card)