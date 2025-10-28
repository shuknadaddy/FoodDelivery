import { Router } from "express";
import { createFoodCategory } from "../controller/foodCategory.controller.js";

const CategoryRouter = Router();

CategoryRouter.post("/", createFoodCategory);

export default CategoryRouter;
