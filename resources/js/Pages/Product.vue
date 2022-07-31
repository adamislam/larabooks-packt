<script setup>
import ProductContainer from '../Components/Products/ProductContainer.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import NavBar from '../Components/NavBar.vue';
import Loading from '../Components/Loading.vue';
import Footer from '../Components/Footer.vue';

const props = defineProps({
    productId: String,
    isWishlisted: Boolean,

    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
})

</script>

<template>
    <Head title="Product">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css">
    </Head>

    <div class="relative flex flex-wrap items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0 page-container">
        <NavBar ...props="props" />
        <Suspense>
            <ProductContainer :productId="props.productId" :isWishlisted="props.isWishlisted" />
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>

</style>
