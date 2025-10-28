import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model.js";

export const signUp = async (req, res) => {
  try {
    const { body } = req;
    const { email, password, phoneNumber } = body;

    const hashedPassword = await bcrypt.hashSync(password, 10);
    console.log("OLD PASSWORD", password);
    console.log("HASH PASSWORD", hashedPassword);

    const user = await UserModel.create({
      email,
      password: hashedPassword,
      phoneNumber,
    });

    res.status(200).send({ message: "Success", data: user });
  } catch (error) {
    console.log("ERROR", error);
    res.status(500).send({ message: "ERROR", error });
  }
};

export const login = async (req, res) => {
  const { body } = req;
  const { email, password } = body;

  const user = await UserModel.findOne({ email });

  if (!user.length) {
    //error
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  if (!isPasswordCorrect) {
    res.status(403).send({ message: "Password Incorrect", error });
  }

  res.status(200).send({ message: "Success", data: user });
};
