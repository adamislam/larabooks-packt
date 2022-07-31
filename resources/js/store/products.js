import { useImages } from "@/composables/images";
import { computed } from "@vue/reactivity";
import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useCategoryStore }  from "./categories";

export const useProductStore = defineStore('product', () => {

    const { images } = useImages()

    const allProducts = reactive({
        data: [
            {
                id: 0,
                isbn13: 0,
                title: "",
                publication_date: "1970-01-01 00:00:00",
                authors: [""],
                categories: [""],
                concept: "",
                language: "",
                tool: "",
                vendor: ""
            }
        ]
    })
    const current_page = ref(1)
    const from = ref(1)
    const last_page = ref(1)
    const per_page = ref(100)
    const to = ref(1)
    const total = ref(0)

    const setProducts = (data) => {
        allProducts.data = data.products.map(p => {
            const index = Math.floor(Math.random() * images.length)
            const date = new Date(p.publication_date)

            return {
                ...p,
                image: `/assets/products/${images[index]}`,
                category: p.categories[Math.floor(index / p.categories.length)],
                date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
                price: Math.ceil(Math.random() * 852)
            }
        })

        current_page.value = data.current_page;
        from.value = data.from
        last_page.value = data.last_page
        per_page.value = data.per_page
        to.value = data.to
        total.value = data.total
    }

    const categoryStore = useCategoryStore()

    const products = computed(() => allProducts.data.filter(p => p.categories.includes(categoryStore.category)))

    return {
        setProducts,
        products,
        current_page,
        from,
        last_page,
        per_page,
        to,
        total,
    }
})
