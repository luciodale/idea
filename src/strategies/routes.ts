import { Router } from 'express';
import { runningStrategies } from './domain.js';
const strategiesRouter = Router();

// if we want to expose any API from the strategy service
strategiesRouter.get('/running', runningStrategies);

export default strategiesRouter;
