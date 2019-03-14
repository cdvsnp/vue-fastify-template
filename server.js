const path = require('path');
const static = require('fastify-static'); // serve static files
const routesLoader = require('fastify-loader'); // load all routes from directory
const compress = require('fastify-compress'); // compress responses
const helmet = require('fastify-helmet'); // Important security headers
const fastify = require('fastify')({
	logger: {
		level: 'info',
		file: 'logs.txt',
	},
});

fastify.register(helmet);
fastify.register(compress);
fastify.register(routesLoader, { paths: ['./routes/*.js'] });
fastify.register(static, { root: path.join(__dirname, 'dist') });

const start = async () => {
	try {
		await fastify.listen(5000);
	} catch(err) {
		fastify.log.error(err);
		process.exit(1);
	}
}

start();