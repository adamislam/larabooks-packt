import { reactive } from "vue"

export function useImages() {
    const images = reactive([
        'image-1.jpg',
        'image-2.jpeg',
        'image-3.jpg',
        'image-4.png',
        'image-5.jpeg',
        'image-6.jpeg',
        'image-7.png',
        'image-8.jpeg',
        'image-9.jpeg',
        'image-10.png',
        'image-11.png',
        'image-12.png',
        'image-13.jpeg',
        'image-14.jpeg',
        'image-15.jpeg',
        'image-16.jpeg',
        'image-17.jpeg',
        'image-18.jpeg',
        'image-19.jpeg',
        'image-20.jpeg',
    ])

    return {
        images
    }
}
