<script setup>
import AuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
import { useWishlist } from '../store/wishlist';
import ProductItem from '../Components/Products/ProductItem.vue';

const props = defineProps({
    wishlists: Array
})

const wishlistStore = useWishlist()
wishlistStore.saveWishlist(props.wishlists)

const products = wishlistStore.wishlists.map(w => JSON.parse(w.product))

</script>

<template>
    <Head title="Packt | Wishlist">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css">
    </Head>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Wishlist
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        Your wishlist is empty
                    </div>
                </div>
            </div>
        </div>
        <div class="product-container">
            <ProductItem v-for="p in products" :key="p.id" :product="p" class="product-item"></ProductItem>
        </div>
    </AuthenticatedLayout>
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
