<template>
    <h1>Hi {{ this.name }}! That's a Vue component!</h1>
</template>

<script>
export default {
    name: "FirstComponent",
    data() {
        return {
            name: 'Lu'
        }
    }
}
</script>