import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// export type UserModel = Model<IUser, {}, IUserMethods>;
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

//instance
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});
//static
userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({ age: 28 });
  return admins;
});

export const User = model<IUser, UserModel>("User", userSchema);
