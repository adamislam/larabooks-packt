<script setup>
    const props = defineProps({
        id: String
    })
    console.log({props})
</script>

<template>
    <div>
        product ID = {{id}}
    </div>
</template>

<style lang="scss" scoped>

</style>
