<script setup>
import { Inertia } from '@inertiajs/inertia';
import { computed } from '@vue/reactivity';
import { useWishlist } from '../../store/wishlist';

    const {
        product
    } = defineProps({
        product: {
            type: Object,
            required: true
        }
    });


    const wishlistStore = useWishlist()

    const  saveWishlist = () => {
        Inertia.post('/wishlist', {
            product
        })
        wishlistStore.addRemoveFromWishlist(product)
    }

    const openProduct = () => {
        Inertia.get(`/product/${product.id}`)
    }


    const isWishlisted = computed(() => !!wishlistStore.wishlists.find(w => w.product_id == product.id))


</script>

<template>
    <div class="wrapper" v-bind="$attrs">

        <div class="overview-info">
            <div class="actions">
                <div class="wishlist-button neuro-button" @click="saveWishlist">
                    <span class="mdi" :class="[isWishlisted ? 'mdi-heart': 'mdi-heart-outline']"></span>
                </div>
            </div>

            <div class="product-info">
                <div class="group-text">
                    <h3>Category</h3>
                    <p>{{ product.category }}</p>
                </div>
                <div class="group-text">
                    <h3>Release</h3>
                    <p>{{ product.date }}</p>
                </div>
                <div class="group-text">
                    <h3>Price</h3>
                    <p>₹{{ product.price }}</p>
                </div>


                <div @click="openProduct" class="product-image">
                    <img :src="product.image" alt="product: ps5 controller image">
                </div>

            </div>

        </div>
        <!-- overview info -->

        <div class="product-specifications">
            <div class="info-container">
                <h1>{{ product.title }}</h1>
                <p>{{ product.concept }}</p>

                <div class="product-features">
                    <div class="feature">
                        <div class="feature-icon mdi mdi-account-box">
                        </div>
                        <div class="feature-text">
                            <p> <strong>Authors</strong></p>
                            <p>{{ product.authors[0] }}</p>
                        </div>
                    </div>
                    <div class="feature" v-if="product.language">
                        <div class="feature-icon mdi mdi-language-php">
                        </div>
                        <div class="feature-text">
                            <p> <strong>Language</strong></p>
                            <p>{{ product.language }}</p>
                        </div>
                    </div>
                    <div class="feature" v-if="product.tool">
                        <div class="feature-icon mdi mdi-hammer-wrench">
                        </div>
                        <div class="feature-text">
                            <p> <strong>Tool</strong></p>
                            <p>{{ product.tool }}</p>
                        </div>
                    </div>
                    <div class="feature" v-if="product.vendor">
                        <div class="feature-icon mdi mdi-domain">
                        </div>
                        <div class="feature-text">
                            <p> <strong>Vendor</strong></p>
                            <p>{{ product.vendor }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="checkout-button">
                <div class="price-tag">
                    <span>₹</span>{{ product.price }}
                </div>
                <button class="pre-order">
                    <p>Add to wishlist</p>
                    <div class="button-action">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
        <!-- product specificaiton -->

    </div>
    <!-- wrapper-->
</template>


<style lang="scss">
    a {
        text-decoration: none;
        color: var(--text-color);

        &:active,
        &:visited {
            text-decoration: none;
        }
    }

    .wrapper {
        margin: 0.7rem 0;
        --bg-shape-color: linear-gradient(120deg, #2b2b2b, #0F1620);
        --light-color: #ff7148;
        --dark-color: #f60;
        --text-color: #D5E1EF;
        width: 350px;
        border-radius: 40px;
        background-image: var(--bg-shape-color);
        overflow: hidden;
    }

    .overview-info,
    .product-specifications {
        padding: 24px;
        color: var(--text-color);
    }

    .overview-info {
        background-image: linear-gradient(176deg, var(--light-color), var(--dark-color));
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 32px;

        .wishlist-button {
            position: relative;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            svg {
                color: #ababab73;
            }
        }

        .neuro-button {
            background-image: var(--bg-shape-color);

            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: inset 3px 4px 5px 0px rgba(197, 197, 197, 0.1), inset 3px 6px 6px 5px rgba(78, 77, 77, 0.1), -2px -2px 8px 2px rgba(255, 255, 255, 0.1), 2px 2px 6px 3px rgba(0, 0, 0, 0.4);
        }
    }



    .product-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        min-height: 200px;
        margin-bottom: 50px;

        .product-image {
            cursor: pointer;
            position: absolute;
            width: 250px;
            height: auto;
            right: 0rem;

            img {
                width: 80%;
                height: auto;
                margin-left: auto;
            }

            transition: ease 0.8s all;

            &:hover {
                transform: scale(1.1);
            }
        }

        .group-text {
            z-index: 10;
            width: min-content;

            h3 {
                letter-spacing: 3.2px;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 8px;
                text-transform: uppercase;
            }

            p {
                font-size: 12px;
                opacity: 0.8;
            }

        }
    }

    .product-specifications {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 360px;

        h1 {
            font-family: 'Michroma', sans-serif;
            margin-top: 8px;
            margin-bottom: 8px;
            font-size: 24px;
        }

        p {
            opacity: 0.8;
            font-size: 12px;
        }

        .product-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-top: 10px;
            grid-row-gap: 10px;

            .feature {
                display: flex;
            }

            .feature-icon {
                width: 40px;
                height: 40px;
                background-image: var(--bg-shape-color);
                border-radius: 8px;
                margin-right: 16px;
                font-size: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }



    .checkout-button {
        display: flex;
        width: 100%;
        background-image: var(--bg-shape-color);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: -2px -2px 2px 0px rgba(80, 80, 80, 0.1), 2px 2px 3px 0px rgba(12, 12, 12, 0.3), inset 0px 0px 0px 2px rgba(80, 80, 80, 0.2);
        margin-top: 12px;
        padding: 10px;

        justify-content: space-between;
        align-items: center;

        .price-tag {
            display: flex;
            align-items: center;
            font-size: 32px;

            span {
                color: #488dc7;
                font-size: 20px;
            }
        }

        /* checkout button*/
        button.pre-order {
            outline: 0;
            border: 0;
            border-radius: 6px;
            display: flex;
            align-items: center;
            overflow: hidden;
            background-image: linear-gradient(85deg, #61c7ef, #4833fb);
            color: white;

            p {
                padding: 8px 17px;
                border-right: 1px solid rgba(0, 0, 0, 0.4);
            }

            .button-action {
                border-left: 1px solid rgba(255, 255, 255, .2);
                padding: 5px 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgba(255, 255, 255, 0.7);
            }
        }
    }

</style>
