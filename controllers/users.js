const {response} = require('express')

const userGet = (req, res = response) => {
    
    const query = req.query;
    
    res.json(
        {
            'ok':true,
            'saludo':'get api',
            query
        }
    );
    
}

const userPut = (req, res = response) => {
    
    const id = req.params.id
    
    res.json(
        {
            'ok':true,
            'saludo':'put api',
            id
        }
    );
}

const userPost = (req, res = response) => {
    
    const body = req.body
    res.json(

        {
            'ok':true,
            'saludo':'post api',
            body
        }
    );
}

const userDelete = (req, res = response) => {
    res.json(
        {
            'ok':true,
            'saludo':'delete api'
        }
    );
}

module.exports = {
    userGet,
    userDelete,
    userPost,
    userPut
}