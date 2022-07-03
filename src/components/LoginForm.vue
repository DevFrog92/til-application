<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <PageHeader>Login</PageHeader>
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">ID</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">PW</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button class="btn">login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import PageHeader from '@/components/common/PageHeader.vue';

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      // error가 발생했을 때, 어떤 줄에서 에러가 발생했는지 디버깅이 쉽다.
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };

        await this.$store.dispatch('LOGIN', userData);
        this.$router.push('/main');
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
