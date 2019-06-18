<template>
  <v-tabs
    class="l-subTopBar"
    :class="{ hide: this.submenu__.length === 0 }"
    color="#D7D7D7"
    height="36"
    align-with-title
    hide-slider
  >
    <v-tab
      v-for="item in submenu__"
      :key="item.key"
      class="subheading font-weight-light text-capitalize"
      active-class="v-tabs__item--active font-weight-medium"
      :to="item.path"
    >
      {{ item.title }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    selectedMenu__() {
      return this.$route.path.split("/")[1];
    },
    submenu__() {
      switch (this.selectedMenu__) {
        case "about":
          return this.submenu_about__;
        case "skills":
          return this.submenu_skills__;
        case "projects":
          return this.submenu_projects__;
        default:
          return [];
      }
    },
    submenu_about__() {
      return [
        { title: this.$t('submenu_about.item1'), path: "whoiam" }, // ../about/${path}
        { title: this.$t('submenu_about.item2'), path: "training" }, // ../about/${path}
        { title: this.$t('submenu_about.item3'), path: "carreerpath" }, // ../about/${path}
        { title: this.$t('submenu_about.item4'), path: "jobsearch" } // ../about/${path}
      ]
    },
    submenu_skills__() {
      return [
        { title: this.$t('submenu_skills.item1'), path: "main" },
        { title: this.$t('submenu_skills.item2'), path: "technical" },
        { title: this.$t('submenu_skills.item3'), path: "leadership" },
        { title: this.$t('submenu_skills.item4'), path: "other" }
      ]
    },
    submenu_projects__() {
      return [
        { title: this.$t('submenu_projects.item1'), path: "all" },
        { title: this.$t('submenu_projects.item2'), path: "personal" },
        { title: this.$t('submenu_projects.item3'), path: "professional" },
        { title: this.$t('submenu_projects.item4'), path: "volunteering" }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.l-subTopBar {
  transition: top 0.3s;
  top: 64px;
  &.hide {
    top: 0;
  }
}
</style>
