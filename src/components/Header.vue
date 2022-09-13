<template>
  <header>
    <font-awesome-icon icon="fa-solid fa-terminal" class="fa-2x" />
    <Navbar v-if="!this.store.menuActive" />
    <button @click="this.store.openMenu()">
      <font-awesome-icon icon="fa-solid fa-bars" class="fa-2x" />
    </button>
  </header>
</template>

<script>
import Navbar from "./Navbar.vue";
import { store } from "../store/store.js"

export default {
  name: "Header",
  components: {
    Navbar,
  },
  data() {
    return {
      store
    }
  }
};
</script>

<style scoped>
header {
  height: 65px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 8;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3em 0 3em;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background);
}
button {
    background-color: transparent;
    border: none;
    color: inherit;
    margin-bottom: 10px;
    padding: 0;
}
button:hover {
    color: var(--color-white);
    transition: ease-in 0.3s;
}

@media only screen and (min-width: 820px) {
  button {
    display: none;
  }
}
@media only screen and (max-width: 425px) {
  header {
    padding: 1.5rem 1.5em 0 1.5em;
  }
}
</style>
