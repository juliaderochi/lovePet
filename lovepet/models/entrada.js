const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    emissao: {
        type: Date,
    },
    animal: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'animais'
    },
    itens: [{
        servico: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'servicos'
        },
        preco: Number,
        quantidade: Number,
        total: Number
    }]
});

_model.virtual('total').get(function() {
    return this.servico ? this.servico.reduce((total, item) => total + (item.preco * item.quantidade), 0) : 0;
})

mongoose.model('entradas', _model);