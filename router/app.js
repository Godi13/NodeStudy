const server = require('./http');
const router = require('./router');

server.start(router.route);
