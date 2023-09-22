export async function fetchPostsByUser(id: any) {
  const response = await fetch(`https://dummyjson.com/posts/user/${id}`);

  return response.json();
}
