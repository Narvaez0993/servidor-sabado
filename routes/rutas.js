//se trae la funcion Router para separar las rutas de mi api
const { Router}=require('express')

// una variable que personaliza mis rutas
const rutas = Router()


    rutas.get('/avanzada/v1/jugadores/', function (req, res) {
        res.send('peticion de tipo GET (para buscar)')
    })
    
    rutas.get('/avanzada/v1/jugadores/id', function (req, res) {
        res.send('peticion de tipo GET (para buscar un jugador)')
        })
    
    rutas.post('/avanzada/v1/jugadores', function (req, res) {
        res.send('peticion de tipo POST (para insertar)')
    })
    
    rutas.put('/avanzada/v1/jugadores/id', function (req, res) {
        res.send('peticion de tipo PUT (para editar)')
    })
    
        
    rutas.delete('/avanzada/v1/jugadores/id', function (req, res) {
        res.send('peticion de tipo DELETE (para eliminar)')
    })

module.exports=rutas