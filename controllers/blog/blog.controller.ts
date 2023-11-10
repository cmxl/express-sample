import { Request, Response } from 'express';
import { Blog } from './blog.models';

export const blogController = {
	getBlogs: async (req: Request, res: Response) => {
		try {
			const blog = await fetch('https://www.noobit.dev/api/blog');
			const data: Blog = await blog.json();
			res.json(data);
		}
		catch (err) {
			res.status(500).send(err)
		}
	}
};
