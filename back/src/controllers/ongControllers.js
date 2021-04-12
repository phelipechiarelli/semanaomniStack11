const connection = require('../database/conections');
const crypto = require('crypto');

module.exports = {

    async lista(request, response) {
        const ongs = await connection('ongs').select('*');
     
        return response.json(ongs);
     },

    async create(request, response) {  

        // retorna os valores do json em cada uma das variaveis dentro das chaves
        const {nome, email, whatsapp, cidade, uf} = request.body;
    
        //cria uma chave primaria aleatória, com 4 bytes de dados e convertida em uma string hexadecimal,
        // com base na biblioteca CRYPTO do node.js
    
        const id = crypto.randomBytes(4).toString('HEX');    
    
        await connection('ongs').insert({
            id,
            nome, 
            email,
            whatsapp,
            cidade,
            uf,
        })
    
        return response.json({
            id
       })
    }
}