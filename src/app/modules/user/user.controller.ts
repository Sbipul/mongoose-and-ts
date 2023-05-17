import { NextFunction, Request, Response } from "express";
import {
  createUserToDb,
  getAdminUserFromDb,
  getAnUserFromDb,
  getUsersFromDb,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  await createUserToDb(data);
  res.status(200).json({
    status: 200,
    message: "Successfully user created",
  });
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDb();
  res.status(200).json({
    status: 200,
    data: users,
  });
};

export const getAnUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const user = await getAnUserFromDb(id);
  res.status(200).json({
    status: 200,
    data: user,
  });
};
export const getAdminsUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const adminUsers = await getAdminUserFromDb();
  res.status(200).json({
    status: 200,
    data: adminUsers,
  });
};
