

const WebSocketServer=require('ws').Server;
var redis=require("redis");


const redisPub=redis.createClient();
const redisSub=redis.createClient();
const server=require('http').createServer(require('ecstatic')({root: `${__dirname}/www`}));
const wss = new WebSocketServer({server:server});
wss.on('connection', ws=>{
		console.log("client Connected");      
        ws.on('message', msg=>{
            console.log(`Messagem ${msg}`);
            // broadcast(msg);
            redisPub.publish('chat_message', msg);
        });
		
});


/*

function broadcast(msg){
	wss.clientes.forEach(client=>{
		client.send(msg);
		})
}*/


redisSub.subscribe('chat_message');
redisSub.on('message',(channel, msg)=>{
	wss.clients.forEach(client=>{
		client.send(msg);
		})
})
server.listen(process.argv[2] || 8080);