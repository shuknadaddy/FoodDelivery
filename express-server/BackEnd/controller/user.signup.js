// import { UserModel } from "../models/user.model.js";

// export const createUser = async (req, res) => {
//   const { body } = req;
//   console.log(body);

//   try {
//     const result = await UserModel.create(body);
//     console.log(result, "results");
//     res.status(200).send({ message: "Succes", data: user });
//   } catch (error) {
//     console.error(error);
//     res.status(403).send({ message: "ERROR", data: null });
//   }
// };
