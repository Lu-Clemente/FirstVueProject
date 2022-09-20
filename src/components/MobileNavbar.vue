<template>
  <nav class="navigation-out-overlay" @click="this.store.closeMenu()">
    <div class="navigation-in-overlay" @click.stop="">
      <button @click="this.store.closeMenu()">
        <font-awesome-icon icon="fa-solid fa-xmark" class="fa-2x" />
      </button>

      <div class="divider"></div>

      <ul class="menu-wrapper">
        <li class="menu-item">
          <router-link to="/">
            <font-awesome-icon icon="fa-solid fa-door-open" />
            <span class="menu-item-text">Home</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/about">
            <font-awesome-icon icon="fa-regular fa-address-card" />
            <span class="menu-item-text">About</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/projects">
            <font-awesome-icon icon="fa-regular fa-folder-open" />
            <span class="menu-item-text">Projects</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/contact">
            <font-awesome-icon icon="fa-regular fa-paper-plane" />
            <span class="menu-item-text">Contact</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { store } from "../store/store.js";

export default {
  name: "MobileNavbar",
  data() {
    return {
      store,
    };
  },
  watch: {
    $route(to, from) {
      this.store.closeMenu();
    },
  },
};
</script>

<style scoped>
.navigation-out-overlay {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9;
}
.navigation-in-overlay {
  width: 40%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  background-color: var(--color-background-mute);
  padding: 10px;
}
button {
  background-color: transparent;
  border: none;
  color: inherit;
  margin-top: 8px;
  margin-bottom: 4px;
  padding: 0;
}
button:hover {
  color: var(--color-white);
  transition: ease-in 0.3s;
}
.divider {
  border: 1px solid var(--color-border);
  margin-bottom: 35px;
  margin-top: 14px;
}
.menu-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35vh;
  justify-content: space-between;
  list-style: none;
  padding: 0;
}
.menu-item-text {
  margin-left: 10px;
  font-size: 18px;
}
.menu-item:hover {
  color: var(--color-white);
  transition: ease-in 0.3s;
  cursor: pointer;
}

@media only screen and (max-width: 1024px) {
  .navigation {
    width: 60%;
  }
}
@media only screen and (max-width: 425px) {
  .navigation {
    width: 100%;
  }
}
</style>
