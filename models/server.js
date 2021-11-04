const express = require('express');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();
        //Rutas de mi aplicación

        this.routes();
    }
    middlewares() {

        //Directorio publico
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/api/usuarios', require('../routes/users'))
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('app corriendo en el puerto ', this.port)
        })
    }

}

module.exports = Server;