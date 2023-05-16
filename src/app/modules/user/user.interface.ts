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
export interface IUserMethods {
  fullName(): string;
}
