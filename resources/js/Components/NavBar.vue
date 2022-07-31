<script setup>
import Dropdown from '../../../vendor/laravel/breeze/stubs/inertia-vue/resources/js/Components/Dropdown.vue';
import DropdownLink from '../../../vendor/laravel/breeze/stubs/inertia-vue/resources/js/Components/DropdownLink.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/inertia-vue3';

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
})
</script>

<template>
    <div class="top-bar bg-white border-b border-gray-100 fixed top-0 left-0 right-0 shadow">
        <Link :href="route('index')" class="px-6 py-4 sm:block">
            <ApplicationLogo class="h-7 fill-current text-gray-500" />
        </Link>
        <div v-if="canLogin" class="px-6 py-4 sm:block">
            <div v-if="$page.props.auth.user" class="sm:flex sm:items-center sm:ml-6">
                <!-- Settings Dropdown -->
                <div class="ml-3 relative">
                    <Dropdown align="right" width="48">
                        <template #trigger>
                            <span class="inline-flex rounded-md">
                                <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                    {{ $page.props.auth.user.name }}

                                    <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </span>
                        </template>

                        <template #content>
                            <DropdownLink :href="route('wishlist')" as="button">
                                Wishlist
                            </DropdownLink>
                            <DropdownLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </DropdownLink>
                        </template>
                    </Dropdown>
                </div>
            </div>

            <template v-if="!$page.props.auth.user">
                <Link :href="route('login')" class="text-sm text-gray-900 ">
                    Log in
                </Link>

                <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-gray-900 ">
                    Register
                </Link>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.top-bar {
    display: flex;
    justify-content: space-between;
    z-index: 99;
}
</style>
