<template>
  <!-- <font-awesome-icon v-bind:icon="icon" /> -->
  <footer>
    <p>Footer</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icon: "fa-solid fa-user-secret",
    };
  },
};
</script>

<style scoped>
footer {
  height: 45px;
  width: 100%;
  padding: 1em;
  border-top: 1px solid var(--color-border);
}
p {
  text-align: center;
}
</style>
