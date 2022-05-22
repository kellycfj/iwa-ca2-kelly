//it will write the schema into the database collection gametickets

const mongoose = require("mongoose");

//database schema
const gameticketSchema = new mongoose.Schema({
    gaelicgame: String,
    moreinfos: String,   
    },
    { writeConcern: { w: 'majority', j: true, wtimeout: 1000 } })

module.exports = mongoose.model('Gameticket', gameticketSchema);
