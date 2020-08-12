const moment = require('moment')

module.exports = app => {
    const getComanda = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('day').toDate()

        app.db('comanda')
            .where( { userId: req.user.id })
            .where('data', '<=', date)
            .orderBy('data')
            .then(comanda => res.json(comanda))
            .catch(err => res.status(400).json(err))
    }

    const getComandaDoc = (req, res) => {
        const doc = req.params.doc ? req.params.doc
            : -1

        app.db('comanda')
           
            .where('documento', '=', doc)
            .then(comanda => res.json(comanda))
            .catch(err => res.status(400).json(err))
    }

    const save = (req, res) => {
        if (!req.body.data.trim()) {
            return res.status(400).send('A data é um campo obrigatório')
        }

        req.body.userId = req.user.id

        app.db('comanda')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }




    return { getComanda,getComandaDoc, save }
}