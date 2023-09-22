export interface PostResponse {
  total: string;
  skip: string;
  limit: string;
  users: Post[];
}

export interface Post {
  id: any;
  body: string;
  title: string;
  userId: string;
}
