const express = require('express');
const router = express.Router();

const Usuario = require('../models/User');

router.get('/', function(req, res){
    res.render('formulario');
});

router.get('/usuarios', function(req, res){
    Usuario.findAll({order:[['id', 'DESC']]}).then(function(usuarios){
        res.render('users',{usuarios: usuarios});
    });
});

router.post('/cadastro', function(req, res){
    Usuario.create({
        nome: req.body.nome,
        matricula: req.body.matricula,
        email: req.body.email,
        senha: req.body.senha
    }).then(function(){
        res.redirect('/usuarios');
    }).catch(function(err){
        res.send(''+ err);
    });
});

router.get('/deletar/:id', function(req, res){
    Usuario.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/usuarios');
    }).catch(function(err){
        res.send('Postagem inexistente');
    });
});

module.exports = router;