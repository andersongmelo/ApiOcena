const moment = require('moment')

module.exports = app => {
    const getComanda = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('day').toDate()

            

        app.db('delivery_carrinho')
        .select(

            'delivery_pedido.ID_PEDIDO'
            ,'delivery_pedido.ID_CLIENTE'
            ,'cliente.NOME'
            ,'delivery_pedido.DATA_CONCLUIDO'
            ,'delivery_pedido.VALOR_PEDIDO'
            ,'delivery_carrinho.ID_PRODUTO'
            ,'produto.DESCRICAO'
            ,'delivery_carrinho.QUANTIDADE'
            ,'delivery_carrinho.QUANTIDADE_CONFIRMADA'
            ,'delivery_carrinho.VALOR_PARCIAL'
          )
          .join('delivery_pedido', 'delivery_pedido.id_pedido', '=', 'delivery_carrinho.id_pedido')
          .join('cliente', 'cliente.ID_CLIENTE', '=', 'delivery_pedido.ID_CLIENTE')
          .join('produto', 'produto.ID_PRODUTO', '=', 'delivery_carrinho.ID_PRODUTO')

            //.where( { userId: req.user.id })
            .where('delivery_pedido.DATA_CONCLUIDO', '<=', date)
            .orderBy('delivery_pedido.DATA_CONCLUIDO')
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