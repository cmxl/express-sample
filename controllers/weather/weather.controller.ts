import { Request, Response } from 'express';
import { Weather } from './weather.models';

export const weatherController = {
	getWeather: async (req: Request, res: Response) => {
		try {
			const weather = await fetch('https://www.noobit.dev/api/weather/Regensburg/stats?year=2023');
			const data: Weather = await weather.json();
			const superSampled = data.min.filter(x => x.samples > 97);
			res.json(superSampled);
		}
		catch (err) {
			res.status(500).send(err)
		}
	}
};




