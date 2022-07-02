<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <PageHeader>Sign Up</PageHeader>
      <form @submit.prevent="registerUser" class="form">
        <div>
          <label for="username">ID</label>
          <input
            type="text"
            id="username"
            v-model="username"
            :class="usernameValidClass"
          />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">PW</label>
          <input
            type="password"
            id="password"
            v-model="password"
            :class="passwordValidClass"
          />
          <p class="validation-text">
            <span class="warning" v-if="!isPasswordValid">
              Password must be over 8 letters
            </span>
          </p>
        </div>
        <div>
          <label for="nickname">Nickname</label>
          <input
            type="text"
            id="nickname"
            v-model="nickname"
            :class="nicknameValidClass"
          />
        </div>
        <button
          type="submit"
          class="btn"
          :class="isButtonDisabled"
          :disabled="isButtonDisabled"
        >
          Create
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
import PageHeader from '@/components/common/PageHeader.vue';

export default {
  data() {
    return {
      // form value
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  components: {
    PageHeader,
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    },
    isButtonDisable() {
      return !this.isUserNameValid || !this.password || !this.nickname;
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickName: this.nickname,
      };

      const { data } = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `${data.username}님이 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      // null 보다는 타입 시스템을 이해하고 설계를 하는 것이 나중에 버그를 예방할 수 있다.
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
