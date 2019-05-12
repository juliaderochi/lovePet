const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    nome: {
        type:String,
        required: true
    },
    especie: String,
    raca: String,
    sexo: String,
    nascimento: Date,
    microchip: Number,
    peso: Number,
    pelagem: String,
    comportamento: String,
    porte: String,
    observacao: String
});

mongoose.model('animais', _model);