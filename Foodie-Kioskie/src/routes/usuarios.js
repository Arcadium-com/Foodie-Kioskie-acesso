var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

// router.get("/listar", function(req, res) {
//     usuarioController.listar(req, res);
// })

module.exports = router;