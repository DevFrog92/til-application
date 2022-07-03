<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">TODO</h1>
      <LoadingSpinner v-if="isLoading" />
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        />
      </ul>
    </div>
    <router-link to="/add" class="create-button"> + </router-link>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchNotes() {
      try {
        this.isLoading = true;
        const { data } = await fetchPosts();
        this.postItems = data.posts;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchNotes();
  },
};
</script>
