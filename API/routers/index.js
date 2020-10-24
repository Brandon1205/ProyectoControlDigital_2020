//importamos servidor
const express = require("express");
//importar Router Express
const router = express.Router();
const path = require('path');

//importamos controlador
const controladorCarro = require("../controllers/controladorCarro");
//Exportamos router
module.exports = function() {
    router.get("/", function(req, res, next) { //creamos pagina
        res.sendFile(path.join(__dirname, '../views/home/index.html'));
    });
    //Agrega modelo de los datos
    router.post("/datos", controladorCarro.crearDato);
    //Actualiza modelo de los datos
    router.put("/datos/:_id", controladorCarro.actualizarDato);
    //Obtener modelo de los datos
    router.get("/datos/:_id", controladorCarro.obtenerDato);

    router.post("/formulario", controladorCarro.actualizarformulario);
    return router;
}