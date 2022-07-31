import { ref } from "vue";

import { defineStore } from "pinia";

export const useWishlist = defineStore('wishlist', () => {
    const wishlists = ref([])

    const saveWishlist = (w = []) => {
        wishlists.value = w
    }

    const addRemoveFromWishlist = (product) => {
        const exist = wishlists.value.find(w => w.product_id == product.id)
        if(!!exist) {
            wishlists.value = wishlists.value.filter(w => w.product_id != product.id)
        }
        else {
            wishlists.value = [
                ...wishlists.value,
                {
                    id: '',
                    product_id: product.id,
                    product: JSON.stringify(product)
                }
            ]
        }
    }

    return {
        wishlists,
        saveWishlist,
        addRemoveFromWishlist
    }
})
