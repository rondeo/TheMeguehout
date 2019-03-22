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
    return {
      submenu_about_: [
        { title: "who i'm ?", path: "whoiam" }, // ../about/${path}
        { title: "training", path: "training" }, // ../about/${path}
        { title: "carreer path", path: "carreerpath" }, // ../about/${path}
        { title: "job search", path: "jobsearch" } // ../about/${path}
      ],
      submenu_skills_: [
        { title: "main", path: "main" },
        { title: "technical", path: "technical" },
        { title: "leadership & professional", path: "leadership" },
        { title: "other", path: "other" }
      ],
      submenu_projects_: [
        { title: "All", path: "all" },
        { title: "Personal", path: "personal" },
        { title: "professional", path: "professional" },
        { title: "volunteering", path: "volunteering" }
      ]
    };
  },
  computed: {
    selectedMenu__() {
      return this.$route.path.split("/")[1];
    },
    submenu__() {
      switch (this.selectedMenu__) {
        case "about":
          return this.submenu_about_;
        case "skills":
          return this.submenu_skills_;
        case "projects":
          return this.submenu_projects_;
        default:
          return [];
      }
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
