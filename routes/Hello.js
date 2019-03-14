const opts = {
  // method
  // url || path
  schema: {
    /*
    body: {
        type: 'object',
        properties: {
          name: { type: 'string' }
        },
        required: ['name']
    }
    */
    /*
    querystring: {
      name: { type: 'string' },
      age: { type: 'integer' },
    },
    */
    // params (work as querystring I guess)
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
        },
      },
    },
  },
  // handler aka function (req, reply)
  // bodyLimit - defaults to 1048576 (1MiB)
  // logLevel
};

fastify.get('/Hello', opts, async (req, reply) => {
  console.log(req.req);
  return { hello: 'Hola' }
})