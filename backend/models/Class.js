const mongoose = require('mongoose');

// Define the schema for your Class model
const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    skillLine: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SkillLine'
    }],
    builds: {
        type: String,
        required: true
    }

});


// Export the Class model
module.exports = mongoose.model('Class', classSchema);
