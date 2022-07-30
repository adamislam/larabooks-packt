import { ref } from "vue"
import { useFetch } from "./fetch"

export async function getProducts(page = 1) {
    const url = 'https://api.packt.com/api/v1/products'
    const param = { page }

    const { data, error } = await useFetch(url, param)

    return {
        error,
        products: data.value.products,
        current_page: data.value.current_page,
        from: data.value.from,
        last_page: data.value.last_page,
        per_page: data.value.per_page,
        to: data.value.to,
        total: data.value.total,
    }

}
