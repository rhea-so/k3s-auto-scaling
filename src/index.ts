require('app-module-path').addPath(__dirname);
require('source-map-support').install();

import Runtime from './runtime';
import Path from 'path';
import Express from 'express';
import SocketIO from 'socket.io';

let serviceDown: boolean = false;

async function main(): Promise<void> {
	let sockets: any[] = [];

	await Runtime.boot();

	Runtime.addMiddleware((_req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
		res.setHeader('Connection', 'close');
		next();
	});

	import('./01_Routers/01_HealthCheck/HealthCheckRouter');

	Runtime.get('/health', async(_req: Express.Request, res: Express.Response) => {
		if (serviceDown === true) {
			res.status(500).end();
			return;
		}
		res.json({ message: 'success' });
	});

	Runtime.addMiddleware(Express.static(Path.join(__dirname, '..', '/public')));

	Runtime.connect(async(socket: SocketIO.Socket) => {
		console.log(socket.id, 'connected');
		sockets.push(socket);
	});

	Runtime.disconnect(async(socket: SocketIO.Socket) => {
		console.log(socket.id, 'disconnected');
		const index: number = sockets.indexOf(socket.id);
		if (index !== -1) {
			sockets[index] = null;
			sockets = sockets.splice(index, 1);
		}
	});

	Runtime.receive('chat', async(_socket: SocketIO.Socket, data: { nickname: string, message: string, version: number }) => {
		for (const socket of sockets) {
			socket?.emit('chat', {
				nickname: data.nickname,
				message: data.message,
				version: 1
			});
		}
	});

	await Runtime.open();
}

main().then().catch((err: Error) => {
	return console.log(err);
});

function startGracefulShutdown(): void {
	serviceDown = true;
	setTimeout(() => {
		process.exit(0);
	}, 1000 * 5);
}

process.on('SIGTERM', startGracefulShutdown);
process.on('SIGINT', startGracefulShutdown);
