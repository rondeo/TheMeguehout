<template>
  <v-toolbar app dark height="64">
    <img src="../assets/icons/logo.svg" alt="logo" @click="goTo" class="logo">
    <v-tabs color="mblack" height="64" slider-color="white">
      <v-tab
        v-for="item in menu__"
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
          @click="selectLanguage(index, flag.name)"
        >
      </div>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      flags_: [
        { name: "en", path: require("../assets/svg/flags/EN.svg") },
        { name: "dz", path: require("../assets/svg/flags/DZ.svg") },
        { name: "fr", path: require("../assets/svg/flags/FR.svg") }
      ]
    };
  },
  methods: {
    selectLanguage(index, lang) {
      let tab = this.flags_;
      tab.splice(0, 0, tab[index]); // copy selected elt at 1st pos
      tab.splice(index + 1, 1); // delete selected elt
      // update the language
      this.$i18n.locale = lang
    },
    goTo() {
      this.$router.push("/home");
    }
  },
  computed: {
    menu__ () {
      return [
        { title: this.$t('menu.home'), path: "/home" },
        { title: this.$t('menu.about'), path: "/about" },
        { title: this.$t('menu.skills'), path: "/skills" },
        { title: this.$t('menu.projects'), path: "/projects" },
        { title: this.$t('menu.contact'), path: "/contact" }
      ]
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
