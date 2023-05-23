const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const db = require("./app/models");
db.sequelizeConnection.sync()
.then(() => {
    console.log("Synced db.");
})
.catch((err) => {
    console.log("Failed to sync db:" +err.message);
});

//import biocontroller
const biodataController = require('./app/controllers/biodata.controller.js');
//bio route
app.post("/", (req, res) => {
    console.log(">>> create route api")
    biodataController.create(req, res)
    }); 


    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
    
    const biodata = require("./app/controllers/biodata.controller.js");
// find all bio routes
    app.get("/", (req, res) => {
        console.log(">>> bio find all is empty");
        biodataController.findAll(req, res)
    });

// find bio by id 
app.post("/:id", (req, res) => {
    biodataController.findOne(req, res)
});

// delete
app.post("/:id", (req, res) => {
    biodataController.delete(req, res)
});


//bio route
app.post("/", (req, res) => {
    biodata.create(req, res)
});

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//     'biodata',
//     'root',
//     '',
//     {
//         host: 'localhost',
//         dialect: 'mysql'
//     }
// );

// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully. ');
// }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
// });