'use client';
import Pagination from '@mui/material/Pagination';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function PaginationMenu({currentPage, totalItems}){

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const handleChange = (event, value) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', value.toString()); 
        router.replace(`${pathName}?${params.toString()}`);
    };
    const itemsPerPage = 10; 
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return (
        <Pagination    
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
            variant="outlined"
            shape="rounded" />
    );
}