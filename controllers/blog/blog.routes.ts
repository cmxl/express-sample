import { Router } from 'express';
import { cacheControl } from '../../middlewares/cacheControl';
import { blogController } from './blog.controller';

const router = Router();

export const blogRoutes = () => {

	router.get('/', cacheControl(10), blogController.getBlogs);

	return router;
};