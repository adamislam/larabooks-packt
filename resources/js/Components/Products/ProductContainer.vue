<script setup>
    import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { useImages } from '../../composables/images';
import {
        getProduct
    } from '../../composables/products';

    const props = defineProps({
        productId: String,
        isWishlisted: Boolean,
    })
    const {
        data,
        error
    } = await getProduct(props.productId)

    const { images } = useImages()

    const index = Math.floor(Math.random() * images.length)
    const secondIndex = Math.floor(Math.random() * images.length)
    const date = new Date(data.publication_date)

    const product = ref({
        ...data,
        images: {
            large: `/assets/products/${images[index]}`,
            small: `/assets/products/${images[secondIndex]}`
        },
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        price: Math.ceil(Math.random() * 852)
    })

    const showImage = ref(product.value.images.large)

    const changeImage = () => {
        showImage.value = product.value.images.small

        product.value.images.small = product.value.images.large
        product.value.images.large = showImage.value
    }

    const languages = computed(() => product.value.languages.filter(l => !!l.name))

    const showItems = ['description', 'learn', 'features']
    const currentItem = ref(showItems[0])

    const selectedItem = computed(() => product.value[currentItem.value])
    const selectItem = (item = 'description') => {
        currentItem.value = item
    }

    const itemIcon = (item) => {
        if(item === 'learn') return 'mdi-school'
        if(item === 'features') return 'mdi-star-circle-outline'
        return 'mdi-information-outline'
    }

</script>

<template>
    <section class="product">
        <div class="product-photo">
            <div class="photo-container">
                <div class="photo-main">
                    <div class="controls">
                        <i class="mdi" :class="[props.isWishlisted ? 'mdi-heart': 'mdi-heart-outline']"></i>
                    </div>
                    <img :src="showImage">
                    <div class="main-info">
                        <span>Authors: </span>
                        <a v-for="author in product.authors" :href="author.profile_url" :title="author.about" target="__blank"> {{ author.name }}</a>
                        <template v-if="languages.length">
                            <span>Languages: </span>
                            <p v-for="language in languages">{{ language.name }} <span v-if="language.version">v ({{language.version}})</span></p>
                        </template>

                        <p v-if="product.tools">{{ product.tools.name }} from {{ product.tools.vendor }}</p>
                    </div>
                    <div class="book-info">
                        <p>Read Time: {{ product.length }}</p>
                        <p>Publication Date: {{ product.date }}</p>
                        <p>Number of pages: {{ product.pages }}</p>
                    </div>
                </div>
                <div class="photo-album">
                    <ul>
                        <li @click="changeImage"><img :src="product.images.small"></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="product-info">
            <div class="title">
                <h1>{{ product.title }}</h1>
                <h2>{{ product.concept }}</h2>
                <h2>{{ product.vendors.name }}</h2>
                <p>Category: {{ product.category }}</p>
                <p>Isbn13: {{ product.isbn13 }}</p>
                <p>Product Type: {{ product.product_type }}</p>
                <p>{{ product.tagline }}</p>
            </div>
            <div class="price">
                ₹ <span>{{ product.price }}</span>
            </div>
            <div class="variant">
                <h2>{{ currentItem }}</h2>
                <ul>
                    <li v-for="item in showItems" :key="item" :class="{'is-active': currentItem === item}" @click="selectItem(item)">
                        <i class="mdi" :class="itemIcon(item)"></i>
                    </li>
                </ul>
            </div>
            <div class="description">
                <div v-html="selectedItem"></div>
            </div>
            <a :href="product.url" target="__blank">
                <span class="buy--btn">Buy Book</span>
            </a>
        </div>
    </section>

</template>

<style lang="scss" scoped>
    h3 {
        font-size: 0.7em;
        letter-spacing: 1.2px;
        color: var(--light-color);
    }

    img {
        max-width: 100%;
        filter: drop-shadow(1px 1px 3px var(--light-color));
    }

    /* ----- Product Section ----- */
    .product {

        --light-color: #ff7148;
        --dark-color: #f60;
        --text-color: #D5E1EF;
        --primary: #4c4c4c;

        display: grid;
        grid-template-columns: 0.9fr 1fr;
        margin: auto;
        padding: 3.5rem 1.5rem;
        margin-top: 6rem;
        margin-bottom: 2rem;
        min-width: 600px;
        max-width: 800px;
        background-color: white;
        border-radius: 5px;
    }

    /* ----- Photo Section ----- */
    .product-photo {
        position: relative;
    }

    .photo-container {
        position: absolute;
        left: -2.5em;
        display: grid;
        grid-template-rows: 1fr;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
    }

    .photo-main {
        border-radius: 6px 6px 0 0;
        background-color: var(--light-color);
        background: radial-gradient(#e5f89e, var(--dark-color));
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .controls, .book-info, .main-info {
            display: flex;
            padding: 0.8em;
            color: #fff;
            font-size: 1.5rem;
            flex-wrap: wrap;

            i {
                cursor: pointer;
            }
            p, a {
                width: 100%;
                font-size: 1.1rem;
                text-transform: capitalize;
            }
            a:visited {
                color: unset;
            }
        }
        .main-info {
            position: relative;
            top: 3rem;

            p, a {
                font-size: 1.5rem;
            }
            > span {
                font-size: 1rem;
            }
        }

        .controls {
            justify-content: flex-end;
        }

        img {
            position: absolute;
            left: -3.5em;
            top: 2em;
            max-width: 110%;
            filter: saturate(150%) contrast(120%) hue-rotate(10deg) drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
        }
    }

    .photo-album {
        padding: 0.7em 1em;
        border-radius: 0 0 6px 6px;
        background-color: #fff;

        ul {
            display: flex;
            justify-content: space-around;
        }

        li {
            float: left;
            width: 55px;
            height: 55px;
            padding: 7px;
            border: 1px solid var(--light-color);
            border-radius: 3px;
        }
    }

    /* ----- Informations Section ----- */
    .product-info {
        padding: 0.8em 0;
    }

    .title {
        h1 {
            margin-bottom: 0.1rem;
            color: var(--primary);
            font-size: 1.5rem;
            font-weight: 900;
        }

        span, p {
            font-size: 1.1rem;
            color: var(--light-color);
        }
    }

    .price {
        margin: .2em 0;
        color: var(--dark-color);
        font-size: 1.1em;

        span {
            padding-left: 0.15em;
            font-size: 2.4em;
        }
    }

    .variant {
        overflow: auto;

        h2 {
            text-transform: capitalize;
            color: var(--light-color);
            margin-bottom: 1.1em;
        }

        li {
            float: left;
            width: 35px;
            height: 35px;
            padding: 3px;
            border: 1px solid transparent;
            border-radius: 3px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--dark-color);

            &.is-active {
                border: 1px solid var(--light-color);
            }
        }

        li:not(:first-child) {
            margin-left: 0.1em;
        }
    }

    .description {
        clear: left;
        margin: 2em 0;
        font-size: 0.8rem;

        h3 {
            text-transform: capitalize;
            margin-bottom: 1em;
        }

        // ul {
        //     font-size: 0.8em;
        //     list-style: disc;
        //     margin-left: 1em;
        // }

        // li {
        //     text-indent: -0.6em;
        //     margin-bottom: 0.5em;
        // }
    }

    .buy--btn {
        padding: 1.5em 3.1em;
        border: none;
        border-radius: 7px;
        font-size: 0.8em;
        font-weight: 700;
        letter-spacing: 1.3px;
        color: #fff;
        background-color: var(--dark-color);
        box-shadow: 2px 2px 25px -7px var(--primary);
        cursor: pointer;

        &:active {
            transform: scale(0.97);
        }
    }

    /* ----- Footer Section ----- */
    footer {
        padding: 1em;
        text-align: center;
        color: #fff;

        a {
            color: var(--primary);

            &:hover {
                color: var(--dark-color);
            }
        }
    }

</style>
