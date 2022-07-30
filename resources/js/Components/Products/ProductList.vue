<script setup>
import { computed } from '@vue/reactivity';
import { useImages } from '../../composables/images.js'
import { getProducts } from '../../composables/products.js'
import ProductItem from './ProductItem.vue';

const { images } = useImages()
const { products,
        current_page,
        from,
        last_page,
        per_page,
        to,
        total } = await getProducts()


const productList = computed(() => products.map(p => {
    const index = Math.floor(Math.random() * images.length)
    const date = new Date(p.publication_date)

    return {
        ...p,
        image: `/assets/products/${images[index]}`,
        category: p.categories[Math.floor(index / p.categories.length)],
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        price: Math.ceil(Math.random() * 852)
    }
}))
</script>

<template>
    <div class="product-container">
        <ProductItem v-for="p in productList" :key="p.id" :product="p" class="product-item"></ProductItem>
    </div>
</template>

<style lang="scss" scoped>
    .product-container {
        margin: 3rem 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>
