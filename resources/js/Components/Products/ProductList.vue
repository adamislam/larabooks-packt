<script setup>
import { getProducts } from '../../composables/products.js'
import ProductItem from './ProductItem.vue';

import { useProductStore }  from "../../store/products";

const store = useProductStore()

const { data, error } = await getProducts()

store.setProducts(data.value)

</script>

<template>
    <div class="product-container" v-if="!error">
        <!-- <div class="h1">Total {{ total }}</div> -->
        <ProductItem v-for="p in store.products" :key="p.id" :product="p" class="product-item"></ProductItem>
    </div>
</template>

<style lang="scss" scoped>
    .product-container {
        margin: 1rem 1rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    @media only screen and (max-width: 1000px) {
        .product-container {
            justify-content: center;

            .product-item {
                margin: 0.7rem;
            }
        }
    }
</style>
