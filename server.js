const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

// prepend all routes with '/api' for example '/api/users'
// server.use('/api', router);

server.listen(port, () => {
    console.log('JSON Server is running')
});
