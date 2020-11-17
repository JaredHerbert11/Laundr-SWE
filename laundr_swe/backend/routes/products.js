
import * as launderPageController from '../controllers/laundrProductController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const laundrPageRouter = express.Router();

laundrPageRouter.get('/', launderPageController.getAllProducts);
laundrPageRouter.post('/', launderPageController.create);
//laundrPageRouter.get('/:productId', launderPageController.read);
laundrPageRouter.get('/:laundrProductName', launderPageController.getByName);

export default laundrPageRouter;
