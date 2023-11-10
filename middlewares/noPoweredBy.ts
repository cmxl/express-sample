import { NextFunction, Request, Response } from 'express';

export const noPoweredBy = (req: Request, res: Response, next: NextFunction) => {
	res.removeHeader('X-Powered-By');
	next();
};
