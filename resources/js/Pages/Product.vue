<script setup>
import ProductContainer from '../Components/Products/ProductContainer.vue';
import Authenticated from '../../../vendor/laravel/breeze/stubs/inertia-vue/resources/js/Layouts/Authenticated.vue';

const props = defineProps({
    productId: String
})

</script>

<template>
    <Head title="Product">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css">
    </Head>

    <AuthenticatedLayout>

        <Suspense>
            <div class="product-container">
                <ProductContainer :productId="props.productId" />
            </div>
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </AuthenticatedLayout>

</template>

<style lang="scss" scoped>

</style>
