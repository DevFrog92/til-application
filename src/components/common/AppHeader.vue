<template>
  <header ref="appHeader">
    <div>
      <router-link :to="logoLink" class="logo"> TIL </router-link>
    </div>
    <div class="navigations">
      <template v-if="!isUserLogin">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </template>
      <template v-else>
        <a href="javascript:;" @click="logout" class="logout-button">Logout</a>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logout() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/login');
    },
  },
};
</script>
<style scoped>
.username {
  color: #fff;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  /* Use the color you like! */
  /* background-color: #3CA776; */
  /* background-color: #2e3e37; */
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.add-button {
  background: #3ca776;
  color: white;
  padding: 4px 23px;
  border-radius: 4px;
}
.logout-button {
  font-size: 14px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
