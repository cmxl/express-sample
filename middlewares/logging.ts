import { NextFunction, Request, Response } from 'express';

export const logging = (req: Request, res: Response, next: NextFunction) => {
	res.addListener('finish', () => console.log(`${req.method} ${req.originalUrl} => ${res.statusCode} ${res.statusMessage} ${res.get('Content-Length') || ''}`));
	next();
};
