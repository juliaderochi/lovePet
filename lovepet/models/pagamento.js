const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    dataPagamento: {
        type: Date,
        default: Date.now
    },
    entrada: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'entradas'
    },
    totalPago: Number,
});

_model.virtual('total').get(function() {
    return this.itens ? this.itens.reduce((total, item) => total + (item.preco * item.quantidade), 0) : 0;
})

mongoose.model('pagamentos', _model);