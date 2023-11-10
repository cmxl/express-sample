export interface WeatherSample {
	date: Date;
	temperature: number;
	samples: number;
}

export interface Weather {
	min: WeatherSample[];
	max: WeatherSample[];
	avg: WeatherSample[];
}