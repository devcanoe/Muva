import Base from "./base.model";

export default interface User extends Base {
  role?: Role | string;
  password?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: number;
  gender?: Gender;
}

enum Role {
  ADMIN,
  GUEST,
  USER,
  AGENT,
}

enum Gender {
  MALE,
  FEMALE,
  OTHER,
}
