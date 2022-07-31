<script setup>
import { computed } from '@vue/reactivity';
import { getProducts } from '../composables/products';
import { useProductStore } from '../store/products';

const store = useProductStore()


const setPagination = async (page = 1) => {
    const { data, error } = await getProducts(page)

    store.setProducts(data.value)
}

const pages = computed(() => {
    if(store.current_page <= 2) return [1, 2, 3, 4, 5]
    if(store.current_page >= store.last_page - 1) return [store.last_page - 4, store.last_page - 3, store.last_page - 2, store.last_page - 1, store.last_page]

    return [store.current_page - 2, store.current_page - 1, store.current_page, store.current_page + 1, store.current_page + 2]
})

</script>

<template>
    <div class="pagination-container wow zoomIn mar-b-1x" data-wow-duration="0.5s">
        <ul class="pagination">
            <li class="pagination-item--wide first" :class="{disable: store.current_page == 1}" @click="setPagination(store.current_page - 1)"> <a class="pagination-link--wide first" href="#"><span class="mdi mdi-menu-left"></span>&nbsp;Previous</a> </li>

            <li v-if="store.current_page > 3" class="pagination-item" @click="setPagination(1)"> <a class="pagination-link">1</a> </li>

            <li class="pagination-item" :class="{'is-active': page === store.current_page}" v-for="page in pages" :key="page" @click="setPagination(page)"> <a class="pagination-link">{{ page }}</a> </li>

            <li v-if="store.current_page < store.last_page - 2" class="pagination-item" @click="setPagination(store.last_page)"> <a class="pagination-link">{{ store.last_page }}</a> </li>
            <li class="pagination-item--wide last" :class="{disable: store.current_page == store.last_page}" @click="setPagination(store.current_page + 1)"> <a class="pagination-link--wide last" href="#">Next&nbsp;<span class="mdi mdi-menu-right"></span></a> </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

.pagination-container {

    --light-color: #ff7148;
    --dark-color: #f60;
    --text-color: #D5E1EF;

	margin-top: 1em;
	padding-top: 2em;
	border-top: 1px solid #d7dadb;
	text-align: center;
}

.pagination-item {
    cursor: pointer;
	list-style-type: none;
	display: inline-block;
	border-right: 1px solid #d7dadb;

	transform: scale(1) rotate(19deg) translateX(0px) translateY(0px) skewX(-10deg) skewY(-20deg);

    &:hover,
	&.is-active {
		background-color: var(--dark-color);
		border-right: 1px solid #fff;

		.pagination-link {
			color: #fff;
		}

	}

    &.first-number {
       border-left: 1px solid #d7dadb;
    }

    .pagination-link {
        padding: 1.1em 1.6em;
        display: inline-block;
        text-decoration: none;
        color: #8b969c;

        transform: scale(1) rotate(0deg) translateX(0px) translateY(0px) skewX(20deg) skewY(0deg);
    }

}



.pagination-item--wide {
    cursor: pointer;
	list-style-type: none;
	display: inline-block;

    .first {
        margin: 0 1em 0 0;
    }

    .last {
        margin: 0 0 0 1em;
    }

    &.disable {
        a {
            cursor: not-allowed;

            &:hover {
                color: #8b969c;
            }
        }
    }
}

.pagination-link--wide {
	text-decoration: none;
	color: #8b969c;
	padding: 1.1rem 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        font-size: 1.5rem;
    }

    .first {
        margin-right: 0.5em;
    }

    .last {
        margin-left: 0.5em;
    }

    &:hover {
        color: var(--light-color);
    }
}

</style>
