const connection = require('../database/conections');
// const { delete } = require('../routes');

module.exports = {
    async lista(request, response) {
        const {page = 1} = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*', 'ongs.nome', 'ongs.email', 'ongs.whatsapp', 'ongs.cidade', 'ongs.uf']);
     
        response.header('Total-Incidentes', count['count(*)']);

        return response.json(incidents);
     },


    async create(request, response) {
        const {titulo, descrição, valor} = request.body;
        const ong_id = request.headers.authorization; /* busca o ID da ong logada*/

        const [id] = await connection('incidents').insert({
            titulo,
            descrição,
            valor,
            ong_id
        });

        return response.json({id})
    },

    async delete(request, response) {
        const {id} = request.params;
        const ong_id = request.headers.authorization; /* busca o ID da ong logada*/

        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({error: 'Operação não permitida.'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}