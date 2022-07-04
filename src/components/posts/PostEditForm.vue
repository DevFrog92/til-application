<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea type="text" id="contents" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents must be less then 200
          </p>
        </div>
        <button class="btn" type="submit">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { updatePost, fetchPostItem } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      postId: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  created() {
    this.fetchPost();
    console.log(this.$route.params.id);
  },
  methods: {
    async submitForm() {
      try {
        const response = await updatePost(this.postId, {
          title: this.title,
          contents: this.contents,
        });

        console.log(response);
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPost() {
      try {
        const postId = this.$route.params.id;
        this.postId = postId;
        const { data } = await fetchPostItem(postId);

        this.title = data.title;
        this.contents = data.contents;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.btn {
  color: #fff;
}
</style>
