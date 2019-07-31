const Redis = require('ioredis');
const client = new Redis(process.env.REDIS_PORT, process.env.REDIS_HOST);

client.on('connect', () => console.log('[redis] redis is connect ... '));
client.on('error', (err) => console.log('[redis] error connection, cause :'+err));


module.exports = client;
