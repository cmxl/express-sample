import { NextFunction, Request, Response } from 'express';

export const cacheControl = (seconds: number) => {
	return (req: Request, res: Response, next: NextFunction) => {
		res.set('Cache-Control', `public, max-age=${seconds}`);
		next();
	};
};