var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MemorySchema = new Schema({
    title: {
        type: String
    },
    data: {
        type: String
    },
    date:{
        type: Date
    },

    shared: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String
    },
});

var Memory = mongoose.model("Memory", MemorySchema);
module.exports = Memory;
