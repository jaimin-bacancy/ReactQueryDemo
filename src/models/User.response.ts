export interface UserResponse {
  total: string;
  skip: string;
  limit: string;
  users: User[];
}

export interface User {
  id: any;
  firstName: string;
  lastName: string;
  email: string;
}
