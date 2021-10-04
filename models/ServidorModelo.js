const express = require('express')

//traer IMPORTAR LA CONEXION

const {conectarBD} = require('../database/conexion.js')

//traer las rutas

const rutas=require('../routes/rutas.js')

class ServidorModelo{

    constructor(){
         this.app = express()
         this.conectarConBD()
         this.enrutarPeticiones()
    }

    encenderServidor(){

        this.app.listen(process.env.PUERTO, function(){
            console.log("servidor encendido... "+ process.env.PUERTO)
        })
    }

    enrutarPeticiones(){

        this.app.use('/',rutas)
        


    }

    conectarConBD(){
        conectarBD()
    }

}

module.exports=ServidorModelo;