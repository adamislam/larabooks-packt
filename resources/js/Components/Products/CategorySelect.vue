<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { useCategoryStore } from '../../store/categories';

    const categoryStore = useCategoryStore()

    const category = ref('')

    const selectCategory = (c) => {
        if(!c) return
        category.value = c
        categoryStore.changeCategory(c)
        closeCategory()
    }
    const showCategories = computed(() => {
        return categoryStore.categories.filter(c => c.toLowerCase().includes(category.value.toLowerCase()))
    })

    const open = ref(false)
    const openCategory = () => {
        open.value = true
    }
    const closeCategory = () => {
        open.value = false
    }



</script>

<template>
    <div class="category-container">
        <p>
            Selected Category is:
        </p>
        <form>
            <input @input="openCategory" class="chosen-value" type="text" v-model="category" placeholder="Type to filter">
            <ul class="value-list" :class="{open}">
                <li v-for="c in showCategories" :key="c" @click="selectCategory(c)">{{ c }}</li>
            </ul>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    .category-container {
        --light-color: #ff7148;
        --dark-color: #f60;
        --text-color: #D5E1EF;

        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        flex-wrap: wrap;

        p {
            margin: 1rem 0;
        }

        form {
            margin-left: 1rem;
            position: relative;
            width: 350px;
        }

        // .chosen-value,
        .value-list {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 101;
        }

        .chosen-value {
            width: 100%;
            font-family: 'Ek Mukta';
            font-weight: 600;
            letter-spacing: 4px;
            height: 4rem;
            font-size: 1.1rem;
            padding: 1rem;
            background-color: #FAFCFD;
            border: 3px solid transparent;
            transition: .3s ease-in-out;

            &::-webkit-input-placeholder {
                color: #3333;
            }

            &:hover {
                background-color: var(--light-color);
                cursor: pointer;

                &::-webkit-input-placeholder {
                    color: #3333;
                }
            }

            &:focus,
            &.open {
                box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);
                outline: 0;
                background-color: var(--light-color);
                color: #000;

                &::-webkit-input-placeholder {
                    color: #3333;
                }
            }
        }

        .value-list {
            list-style: none;
            margin-top: 4rem;
            box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            max-height: 0;
            transition: .3s ease-in-out;

            &.open {
                max-height: 320px;
                overflow: auto;
            }

            li {
                position: relative;
                height: 4rem;
                background-color: #FAFCFD;
                padding: 1rem;
                font-size: 1.1rem;
                display: flex;
                align-items: center;
                cursor: pointer;
                transition: background-color .3s;
                opacity: 1;

                &:hover {
                    background-color: var(--light-color);
                }

                &.closed {
                    max-height: 0;
                    overflow: hidden;
                    padding: 0;
                    opacity: 0;
                }
            }
        }
    }

</style>
