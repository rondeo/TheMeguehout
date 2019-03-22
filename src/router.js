import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About/MainAbout.vue";
import Skills from "./views/Skills/MainSkills.vue";
import Projects from "./views/Projects.vue";
import Contact from "./views/Contact.vue";
// About menu children
import WhoIam from "./views/About/WhoIam.vue";
import Training from "./views/About/Training.vue";
import CarreerPath from "./views/About/CarreerPath.vue";
import JobSearch from "./views/About/JobSearch.vue";
// Skills menu children
import Main from "./views/Skills/Main.vue";
import Technical from "./views/Skills/Technical.vue";
import Leadership from "./views/Skills/Leadership.vue";
import Other from "./views/Skills/Other.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/",
      alias: "/home",
      component: Home
    },
    {
      name: "About",
      path: "/about",
      redirect: "/about/whoiam",
      component: About,
      children: [
        { path: "whoiam", component: WhoIam },
        { path: "training", component: Training },
        { path: "carreerpath", component: CarreerPath },
        { path: "jobsearch", component: JobSearch }
      ]
    },
    {
      name: "Skills",
      path: "/skills",
      redirect: "/skills/main",
      component: Skills,
      children: [
        { path: "main", component: Main },
        { path: "technical", component: Technical },
        { path: "leadership", component: Leadership },
        { path: "other", component: Other }
      ]
    },
    {
      name: "Projects",
      path: "/projects",
      redirect: "/projects/all",
      component: Projects,
      children: [
        { path: "all" },
        { path: "personal" },
        { path: "professional" },
        { path: "volunteering" }
      ]
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ]
});
