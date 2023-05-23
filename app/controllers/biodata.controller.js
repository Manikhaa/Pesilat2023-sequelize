const db = require('../models');

const Biodata = db.biodata;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(" >>> biodata controller api");
    //validasi req
    if (!req.body.Nama){
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    console.log(" >>> create biodata object");

    //create bio object
    const biodata = {
        Nama: req.body.Nama,
        Tempat_Lahir: req.body.Tempat_Lahir,
        Tanggal_Lahir : req.body.Tanggal_Lahir,
        Alamat: req.body.Alamat,
    };

     //save bio ke db
     Biodata.create(biodata)
     .then(data => {
         console.log(" >>> insert biodata succefull");
         res.send(data);
     })
     .catch(err => {
         console.log(" >>> insert biodata fail");
         res.status(500).send({
             message: "Error occurred while inserting biodata"
         });
     });
 
 };

    exports.findAll = (req, res) => {
        Biodata.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error while retrieving biodata."
            });
        });
    };

    exports.findOne = (req, res) => {
        Biodata.findOne({
            where: {
                id: req.params.id

            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error while finding biodata."
            });
        });
    };

    exports.delete = (req, res) => {
        Biodata.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(
            res.send({
                message: "Success delete with id = " + req.params.id + "!",
            })
        )
        .catch(err => {
            res.status(500).send({
                message: "couldnt delete with id =" + req.params.id 
            });
        });
    };
 
    




