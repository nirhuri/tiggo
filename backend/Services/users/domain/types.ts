export type User = {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  created_at: Date;
  updated_at: Date;
  email: string;
  password: string;
  role_type: number; // role type returned from db
  role_title: string; // role title returned from db
};
