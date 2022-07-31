<script setup>
import { getProduct } from '../../composables/products';

const props = defineProps({
    productId: String
})
const { data, error } = await getProduct(props.productId)

const product = data
</script>

<template>
    <div>
        <h1>{{props.productId}}</h1>
    </div>
</template>

<style lang="scss" scoped>

</style>
