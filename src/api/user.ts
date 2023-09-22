import { User } from '../models';

export async function fetchUsers(limit: number, skip: number) {
  const response = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
  );

  return response.json();
}

export async function fetchSingleUser(id: any) {
  const response = await fetch(`https://dummyjson.com/users/${id}`);

  return response.json();
}

export async function createUser(user: User) {
  const response = await fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  return response.json();
}
