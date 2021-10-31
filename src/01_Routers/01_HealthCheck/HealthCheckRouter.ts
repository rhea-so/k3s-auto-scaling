import Runtime from 'runtime';
import Express from 'express';
import { IHealthCheckRequest } from './IHealthCheck.request';
import { IHealthCheckResponse } from './IHealthCheck.response';

Runtime.get('/', async(req: Express.Request, res: Express.Response) => {
	const request: IHealthCheckRequest = req.query;
	const response: IHealthCheckResponse = {
		status: 'ok',
		received: request
	};
	res.json(response);
});
