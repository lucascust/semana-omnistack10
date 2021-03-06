// Router é um módulo de Express
const { Router } = require('express');

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();


// método para buscar dados, Dev busca todos, Search busca com filtro
routes.get('/devs', DevController.index)
routes.get('/search', SearchController.index)
// método para registro de usuário
routes.post('/devs', DevController.store)

// Exportação das rotas
module.exports = routes;



// Métodos HTTP: get, post, put, delete

/* Tipos de Parametros:
 
- Query Params: req.query (Filtros, ordenação, paginação, ...)
- Route Params: req.params(Indetificar um recurso na alteração ou remoção. PUT e DELETE)
- Body: req.body (dados para criação/alteração de registro) 
*/

/* Simulação de Busca em "/users?search=Lucas"
app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({
        message :'Hello world'});
}); 
*/

/*  Comando delete enviando id = "1", /users/1 
/ Ali declarei que depois da "/", o valor seria o ID a ser deletado.
app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({
        message :'Hello world'});
});
*/
/* Envio de dados para cadastro em "/users"
app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message :'Hello world' });
});*/
// JSON = { "name":"lucas", "email: "lucascust@furg.br"} sempre usar aspas duplas para não numeros

