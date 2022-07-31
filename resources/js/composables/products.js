import { useFetch } from "./fetch"

export async function getProducts(page = 1) {
    const url = 'https://api.packt.com/api/v1/products'
    const param = { page }

    const { data, error } = await useFetch(url, param)

    return {
        error,
        data
    }

}
