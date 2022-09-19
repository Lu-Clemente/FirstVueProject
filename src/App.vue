<template>
  <Header />
  <MobileNavbar v-if="this.store.menuActive" />
  <Home />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";
import MobileNavbar from "./components/MobileNavbar.vue";
import { store } from "./store/store.js";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer,
    MobileNavbar,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
