const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tickets: {
        type: Array,
        required: false,
        default: [],
    },
    projectManager: {
        type: String,
        required: true,
    },
    projectManagerId: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;