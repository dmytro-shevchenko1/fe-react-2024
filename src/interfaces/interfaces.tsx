export interface Category {
    id: number;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
    category: Category;
}
