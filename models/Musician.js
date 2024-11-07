const {Sequelize, sequelize, DataTypes} = require('../db');

// TODO - define the Musician model
const Musician = sequelize.define("Musician", {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
})

module.exports = {
    Musician
};