interface Category {
    id: number;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
    category: Category;
}

export type { Category, Product };
