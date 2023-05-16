import { IUser } from "./user.interface";
import { User } from "./user.model";
export const getUsersFromDb = async () => {
  const users = await User.find();
  return users;
};
export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  console.log(user.fullName());
  return user;
};
export const getAnUserFromDb = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, email: 1 });
  return user;
};
