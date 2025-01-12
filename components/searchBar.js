'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Searchbar() {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    const handleSearch = (term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
            params.set('page', '1');
        }
        else {
            params.delete('query');
            params.delete('page');
        }
        router.replace(`${pathName}?${params.toString()}`);
    }
    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
                <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                >
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                </svg>
            </div>
            <input type="search" id="search" className="block w-full p-4 ps-10 outline-none bg-transparent text-gray-600 text-sm border border-4 border-mintchoc-brown-three rounded-lg" placeholder="Search"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />

        </div>

    );
}