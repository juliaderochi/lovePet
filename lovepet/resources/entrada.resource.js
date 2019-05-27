const mongoose = require('mongoose');
const entradaModel = mongoose.model('entradas');

module.exports = function (app) {
    app.get('/entradas', function (req, resp) {
        entradaModel.find({}, ['emissao', 'animais', 'itens', 'total'], {sort: {animais: 1}})
            .populate('entrada', 'emissao')
            .populate('animal', 'nome')
            .populate('itens.servico')
            .then(
                function (data) {
                    resp.status(200).send(data);
                }, 
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.post('/entradas', function (req, resp) {
        entradaModel.create(req.body)
            .then(
                function (data) {
                    resp.status(201).send(data);
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.get('/entradas/:id', function (req, resp) {
        entradaModel.findById(req.params.id)
            .populate('animal')
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
    app.put('/entradas/:id', function (req, resp) {
        entradaModel.findOneAndUpdate({ '_id': req.params.id }, req.body)
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
    app.delete('/entradas/:id', function (req, resp) {
        entradaModel.deleteOne({ '_id': req.params.id })
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