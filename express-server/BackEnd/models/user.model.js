import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number },
    address: { type: String },
    // role: { type:, required: true },
    // orderedFoods: { type: Object },
    // ttl: { type: Date },
    // isVerified: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model("User", UserSchema);
