<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import ProductList from '../Components/Products/ProductList.vue';
import Loading from '../Components/Loading.vue';
import CategorySelect from '../Components/Products/CategorySelect.vue';
import { useWishlist } from '../store/wishlist'
import NavBar from '../Components/NavBar.vue';
import Footer from '../Components/Footer.vue';

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    wishlists: Array,
})

const wishlistStore = useWishlist()
wishlistStore.saveWishlist(props.wishlists)
</script>

<template>
    <Head title="Welcome">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css">
        <link rel="icon" type="image/x-icon" href="/assets/logo/favicon.png">
    </Head>

    <div class="relative flex flex-wrap items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0 page-container">
        <NavBar ...props="props" />
        <CategorySelect />
        <Suspense>
            <ProductList />
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
    <Footer />
</template>

<style scoped lang="scss">
    .page-container {
        padding-top: 4.5rem;
        align-items: flex-start;
        .bg-gray-100 {
            background-color: #f7fafc;
            background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
        }

        .border-gray-200 {
            border-color: #edf2f7;
            border-color: rgba(237, 242, 247, var(--tw-border-opacity));
        }

        .text-gray-400 {
            color: #cbd5e0;
            color: rgba(203, 213, 224, var(--tw-text-opacity));
        }

        .text-gray-500 {
            color: #a0aec0;
            color: rgba(160, 174, 192, var(--tw-text-opacity));
        }

        .text-gray-600 {
            color: #718096;
            color: rgba(113, 128, 150, var(--tw-text-opacity));
        }

        .text-gray-700 {
            color: #4a5568;
            color: rgba(74, 85, 104, var(--tw-text-opacity));
        }

        .text-gray-900 {
            color: #1a202c;
            color: rgba(26, 32, 44, var(--tw-text-opacity));
        }
    }
</style>
