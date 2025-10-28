import { FoodCategory } from "../models/user.model"

export const createFoodCategory = async (req, res)=>{
  try {
    const { body } = req;

    const foodCategory = await FoodCategory.create(body);
    res.status(200).send({message:"Amjilttai nemlee", data: foodCategory});
  } catch (error) {
    res.statis(500).send({message:"Aldaa garlaa", data: null});
  }
}