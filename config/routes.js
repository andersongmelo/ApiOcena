module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin',app.api.auth.signin)

    app.route('/comanda')
    //s.all(app.config.passport.authenticate())
    .get(app.api.comanda.getComanda)
    .post(app.api.comanda.save)
    
    app.route('/comanda/:doc')
    .all(app.config.passport.authenticate())
    .get(app.api.comanda.getComandaDoc)
    
}