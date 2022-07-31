import { ref } from "vue"

export async function useFetch(url, params = {}) {
    const data = ref({})
    const error = ref(null)
    const token = `jrDkRsO4cDAPHZcX8KGl0hOQ9Fjs6zcQsh5apKPv`

    const urlWithQueryParam = `${url}?${new URLSearchParams(params)}`
    try {
        const res = await fetch(urlWithQueryParam, {
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            })
        })

        data.value = await res.json()
    } catch (err) {
        error.value = err
    }

    return {
        data,
        error
    }
}
