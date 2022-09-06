<template>
  <h1>Hello world!</h1>
  <FirstComponent />
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue"
import Navbar from "./components/Navbar.vue"

export default ({
  name: "App",
  components: {
    FirstComponent,
    // Navbar
  }
})
</script>
