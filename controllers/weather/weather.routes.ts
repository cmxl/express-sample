import { Router } from 'express';
import { cacheControl } from '../../middlewares/cacheControl';
import { weatherController } from './weather.controller';

const router = Router();

export const weatherRoute = () => {

	router.get('/', cacheControl(10), weatherController.getWeather);

	return router;
};