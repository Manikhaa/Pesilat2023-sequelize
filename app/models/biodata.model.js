module.exports = (sequelize, Sequelize) => {
    const biodata = sequelize.define("biodataku", {
        Nama:{
            type: Sequelize.STRING,
            allowNull: false
        },
        Tempat_Lahir: {
            type: Sequelize.STRING,
            allowNull:false
        },
        Tanggal_Lahir: {
            type: Sequelize.DATEONLY,
        },
        Alamat: {
            type: Sequelize.STRING,
        }
    });
    return biodata;

};


