const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var JurorSchema = new Schema ({
    lastName: {
        type: String,
        trim: true,
        required: 'Last name is a required field'
    },
    firstName: {
        type: String,
        trim: true,
        required: 'First name is a required feild'
    },
})

class newJuror {
    constructor ({id, lastName, firstName}) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
    }
}

JurorSchema.loadClass(newJuror);
let Juror = mongoose.model("Juror", JurorSchema);

module.exports = Juror;