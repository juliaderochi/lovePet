const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    documento: {
        type:String,
        required: true
    },
    nome: String,
    email: String,
    telefone: String,
    animal: {
        type: Schema.Types.ObjectId,
        ref: 'animais'
    },
});

mongoose.model('clientes', _model);