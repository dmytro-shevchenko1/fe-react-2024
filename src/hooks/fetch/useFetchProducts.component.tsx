import { useQuery } from 'react-query';

import type { Product } from '@/interfaces/Products.ts';

const fetchProducts = async (url: string): Promise<{ products: Product[]; total: number }> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

const useFetchProducts = (url: string) =>
    useQuery<{ products: Product[]; total: number }, Error>(['products', url], () => fetchProducts(url));

export default useFetchProducts;
