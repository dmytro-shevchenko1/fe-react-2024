import { useQuery } from 'react-query';

import type { Category } from '@/interfaces/Category.ts';

const fetchCategories = async (): Promise<Category[]> => {
    const response = await fetch('https://ma-backend-api.mocintra.com/api/v1/categories');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

const useFetchCategories = () => useQuery<Category[], Error>('categories', fetchCategories);

export default useFetchCategories;
