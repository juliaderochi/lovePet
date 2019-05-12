const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    codigo: {
        type:String,
        required: true
    },
    descricao: String,
    preco: Number,
    estoque: Number
});

mongoose.model('servicos', _model);