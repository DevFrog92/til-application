import { posts } from './index';

function fetchPosts() {
  return posts.get('/');
}

function createPost(postData) {
  return posts.post('/', postData);
}

function deletePost(postId) {
  return posts.delete(postId);
}

function updatePost(postId, postData) {
  return posts.put(postId, postData);
}

function fetchPostItem(postId) {
  return posts.get(postId);
}

export { fetchPosts, createPost, deletePost, updatePost, fetchPostItem };
