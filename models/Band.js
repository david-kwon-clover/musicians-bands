const {Sequelize, sequelize, DataTypes} = require('../db');

// TODO - define the Band model
const Band = sequelize.define({
    name: DataTypes.STRING,
    genre: DataTypes.STRING
})

module.exports = {
    Band
};