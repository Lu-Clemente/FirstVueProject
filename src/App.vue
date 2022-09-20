<template>
  <Header />
  <MobileNavbar v-if="this.store.menuActive" />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MobileNavbar from "./components/MobileNavbar.vue";
import { store } from "./store/store.js";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    MobileNavbar,
  },
  data() {
    return {
      store,
    };
  }
};
</script>
