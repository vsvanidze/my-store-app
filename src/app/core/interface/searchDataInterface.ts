export interface searchDataInterface {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    rating: rating
}

interface rating {
    rate: number,
    count: Number
}