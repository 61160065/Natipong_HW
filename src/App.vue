<template>
  <div id="root">
    <div id="nav">
      <router-link to="/"> Profile</router-link>
      <router-link to="/contact">Contact </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { ref } from "vue";
export default {};
</script>

<style scoped>
#root {
  text-align: center;
}

#nav {
  font-size: 1.5em;
  margin-bottom: 30px;
}
a {
  text-decoration: none;
  margin: 30px 25px;
  color: #333;
}
a:hover {
  text-decoration: underline;
  color: blue;
}
</style>