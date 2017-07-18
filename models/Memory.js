var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MemorySchema = new Schema({
    title: {
        type: String
    },
    data: {
        type: String
    },
     
    shared: {
        type: Boolean,
        default: false
    }
});

var Memory = mongoose.model("Memory", MemorySchema);
module.exports = Memory;
