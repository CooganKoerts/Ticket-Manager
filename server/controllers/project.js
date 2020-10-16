const Project = require('../models/project');
const { addProject } = require('../controllers/user');

const path = '/project';

const projectGet = (req, res) => {
    console.log(`${path} GET`);

    Project.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            // TODO create error response & code
            console.log(`${path} GET Error: ${err}`);
        })
};

const projectPost = (req, res) => {
    const project = new Project(req.body);
    console.log(`${path} POST`);

    project.save()
        .then((result) => {
            addProject(project.projectManagerId, result);
            res.send(result);
        })
        .catch((err) => {
            // TODO create error response & code
            console.log(`${path} POST Error: ${err}`);
        })
};

const projectIdGet = (req, res) => {
    const id = req.params.id;
    console.log(`${path}/:id GET`)

    project.findById(id)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            // TODO create error response & code
            console.log(`${path}/:id GET Error: ${err}`);
        });
};

const projectIdDelete = (req, res) => {
    const id = req.params.id;
    console.log(`${path}/:id DELETE`)

    project.findByIdAndDelete(id)
        .then(result => {
            res.statusCode = 200;
            res.send('Project successfully deleted!');
        })
        .catch(err => {
            // TODO create error response & code
            console.log(`${path}/:id DELETE Error: ${err}`);
        });
};

module.exports = {  
    projectGet,
    projectPost,
    projectIdGet,
    projectIdDelete
};