import { HydratedDocument, Model } from "mongoose";
export interface IUser {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  gender: "Male" | "Female";
  age: number;
  phone: number;
  job?: boolean;
  address: {
    presentAdd: string;
    permanentAdd: string;
  };
}

// instance method
export interface IUserMethods {
  fullName(): string;
}
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
