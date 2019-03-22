<template>
  <v-app class="main-wrapper">
    <topbar></topbar>
    <subtopbar></subtopbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import topbar from "./components/topbar.vue";
import subtopbar from "./components/subtopbar.vue";
export default {
  name: "App",
  components: {
    topbar,
    subtopbar
  }
};
</script>
<style lang="scss" scoped>
.main-wrapper {
  background: linear-gradient(#36a1ff, #00e5ff);
}
</style>
