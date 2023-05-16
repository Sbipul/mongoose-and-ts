import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

export type UserModel = Model<IUser, {}, IUserMethods>;
export const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: { type: String, required: true, unique: true },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  age: { type: Number, required: true },
  phone: { type: Number, required: true },
  job: { type: Boolean },
  address: {
    presentAdd: { type: String, required: true },
    permanentAdd: { type: String, required: true },
  },
});
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

export const User = model<IUser, UserModel>("User", userSchema);
