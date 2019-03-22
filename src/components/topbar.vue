<template>
  <v-toolbar app dark height="64">
    <img src="../assets/icons/logo.svg" alt="logo" @click="goTo" class="logo">
    <v-tabs color="mblack" height="64" slider-color="white">
      <v-tab
        v-for="item in menu_"
        :key="item.title"
        class="title font-weight-light l-tab"
        active-class="v-tabs__item--active font-weight-medium"
        :to="item.path"
      >{{ item.title }}</v-tab>
    </v-tabs>
    <v-menu>
      <template v-slot:activator="{ on }">
        <img :src="flags_[0].path" alt="flag" v-on="on" class="flag">
      </template>
      <div class="l-menu">
        <img
          :src="flag.path"
          alt="flag"
          class="flag"
          v-for="(flag, index) in flags_"
          :key="flag.name"
          @click="selectLanguage(index)"
        >
      </div>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      menu_: [
        { title: "home", path: "/home" },
        { title: "about", path: "/about" },
        { title: "skills", path: "/skills" },
        { title: "projects", path: "/projects" },
        { title: "contact", path: "/contact" }
      ],
      flags_: [
        { name: "EN", path: require("../assets/svg/flags/EN.svg") },
        { name: "DZ", path: require("../assets/svg/flags/DZ.svg") },
        { name: "FR", path: require("../assets/svg/flags/FR.svg") }
      ]
    };
  },
  methods: {
    selectLanguage(index) {
      let tab = this.flags_;
      tab.splice(0, 0, tab[index]); // copy selected elt at 1st pos
      tab.splice(index + 1, 1); // delete selected elt
    },
    goTo() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
  height: 52px;
  margin-right: 24px;
}
.l-tab {
  min-width: 140px;
}
.flag {
  border: white solid 1px;
  cursor: pointer;
}
.l-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
}
</style>
