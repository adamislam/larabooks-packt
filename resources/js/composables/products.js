import { unref } from "vue"
import { useFetch } from "./fetch"

export async function getProducts(page = 1) {
    const url = 'https://api.packt.com/api/v1/products'
    const param = { page, limit: 20 }

    const { data, error } = await useFetch(url, param)

    return {
        error,
        data
    }

}

export async function getProduct(id) {
    if(!id) return { data: {}, error: true }
    const url = `https://api.packt.com/api/v1/products/${id}`

    const { data, error } = await useFetch(url, {})

    return {
        error,
        data: unref(data)
    }
}
