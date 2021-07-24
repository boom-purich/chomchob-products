export type Product = {
    id: string;
    name: string;
    image_url: string;
    description: string;
    price: string;
    review: {
        number: number;
        rating: number;
    };
    brand_info: {
        name: string;
        url: string;
    }
}