const mongoose = require('mongoose');
const pagamentoModel = mongoose.model('pagamentos');

module.exports = function (app) {
    app.get('/pagamentos', function (req, resp) {
        pagamentoModel.find({}, ['dataPagamento', 'entrada', 'totalPago'], {sort: {emissao: 1}})
            .populate('cliente', 'documento nome email')
            .then(
                function (data) {
                    resp.status(200).send(data);
                }, 
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.post('/pagamentos', function (req, resp) {
        pagamentoModel.create(req.body)
            .then(
                function (data) {
                    resp.status(201).send(data);
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.get('/pagamentos/:id', function (req, resp) {
        pagamentoModel.findById(req.params.id)
            .populate('cliente')
            .populate('itens.servico')
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.put('/pagamentos/:id', function (req, resp) {
        pagamentoModel.findOneAndUpdate({ '_id': req.params.id }, req.body)
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.delete('/pagamentos/:id', function (req, resp) {
        pagamentoModel.deleteOne({ '_id': req.params.id })
            .then(
                function () {
                    resp.status(204).send();
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
}