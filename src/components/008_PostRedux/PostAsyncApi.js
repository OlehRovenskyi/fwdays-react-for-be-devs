const POST_URL = 'http://localhost:3000/posts';

export async function getPostsAsync() {
  const res = await fetch(POST_URL);

  return res.json();
}

export async function getPostAsync(id) {
  const res = await fetch(`${POST_URL}/${id}`);

  return res.json();
}


export async function createPostAsync(post) {
  const res = await fetch(POST_URL, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: { 'Content-Type': 'application/json' }
  });

  return res.json();
}

export async function updatePostAsync(id, post) {
  const res = await fetch(`${POST_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: { 'Content-Type': 'application/json' }
  });

  return res.json();
}

export async function deletePostAsync(id) {
  const res = await fetch(`${POST_URL}/${id}`, {
    method: 'DELETE',
  });

  return res.json();
}