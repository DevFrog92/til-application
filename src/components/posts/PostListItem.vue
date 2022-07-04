<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">
      {{ postItem.updatedAt | formatDate }}
      <i class="icon icon-md-create" @click="routeEditPage(postItem._id)"
        >update</i
      >
      <i class="icon icon-md-trash" @click="deleteItem(postItem._id)">trash</i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';
import { formatDate } from '@/utils/filters';

export default {
  props: {
    postItem: {
      type: Object,
      require: true,
      default: () => ({}),
    },
  },
  filters: {
    formatDate,
  },
  methods: {
    async deleteItem(postId) {
      try {
        if (confirm('You want delete it?')) {
          await deletePost(postId);

          this.$emit('refresh');
        }
      } catch (error) {
        console.log(error);
      }
    },
    routeEditPage(postId) {
      this.$router.push(`/post/${postId}`);
    },
  },
};
</script>
