<template>
  <nav class="navigation">
    <ul class="menu-wrapper">
      <li class="menu-item">
        <a href="/">
          <font-awesome-icon icon="fa-solid fa-door-open" />
          <span class="menu-item-text">Home</span>
        </a>
      </li>
      <li class="menu-item">
        <font-awesome-icon icon="fa-regular fa-address-card" />
        <span class="menu-item-text">About</span>
      </li>
      <li class="menu-item">
        <font-awesome-icon icon="fa-regular fa-folder-open" />
        <span class="menu-item-text">Projects</span>
      </li>
      <li class="menu-item">
        <font-awesome-icon icon="fa-regular fa-paper-plane" />
        <span class="menu-item-text">Contact</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navigation {
  max-width: 70%;
  min-width: 60%;
  margin: 0;
}
.menu-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  list-style: none;
  padding: 0;
}
.menu-item-text {
  margin-left: 10px;
  font-size: 16px;
}
.menu-item:hover {
  color: var(--color-white);
  transition: ease-in 0.3s;
  cursor: pointer;
}
@media only screen and (max-width: 820px) {
  .navigation {
    display: none;
  }
}
</style>
